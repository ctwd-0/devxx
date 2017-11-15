var container,stats;

var camera, controls, scene, renderer;

var directionalLight;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var mouse = new THREE.Vector2();

var raycaster, INTERSECTED;

var metadata = {};
var lookup = {};
var group_info = {};
var group_count, root_groups = [];
var meta_ready_count = 0;

var xbj_loader = new CTWD.XBJLoader();

function on_metadata(file_metadata) {
	var lines = file_metadata.split('\n');
	lines.forEach(function(line) {
		if(line != '') {
			meta = line.split(' ');
			if(meta.length == 2) {
				metadata[meta[0]] = meta[1];
			}
		}
	});
	on_meta_index_group_ready();
}

function on_lookup(file_lookup) {
	var lines = file_lookup.split('\n');
	lines.forEach(function(line) {
		if(line != '') {
			look = line.split(' ');
			if(look.length == 3) {
				lookup[look[0]] = {
					file: look[1],
					offset: parseInt( look[2], 10 )
				};
			}
		}
	});
	on_meta_index_group_ready();
}

function on_group_info(file_group_info) {
	var lines = file_group_info.split('\n');
	group_count = lines[0];
	root_groups = lines[2].trim().split(' ');
	var pos = 3
	while (pos + 4 < lines.length) {
		group_name = lines[pos].trim();
		group_info[group_name] = {
			groups:lines[pos+2].trim().split(' '),
			objects: lines[pos+4].trim().split(' ')
		}
		if(group_info[group_name].groups.length == 1 && group_info[group_name].groups[0] === '') {
			group_info[group_name].groups = [];
		}
		if(group_info[group_name].objects.length == 1 && group_info[group_name].objects[0] === '') {
			group_info[group_name].objects = [];
		}
		pos += 5;
	}
	on_meta_index_group_ready();
}

function on_meta_index_group_ready() {
	meta_ready_count++;
	if(meta_ready_count == 3) {
		//alert('meta_ready!');
		load_root_groups();
		current_model = 'g_' + root_groups[0];
	}
}

function load_root_groups() {
	var mesh_to_load = make_up_load_list(root_groups);
	load_xbjs_and_add_to_scene(mesh_to_load);
}

function load_xbjs_and_add_to_scene(mesh_to_load) {
	mesh_to_load.files.forEach(function (file) {
		var file_loader = new THREE.FileLoader();
		file_loader.setResponseType('arraybuffer');
		file_loader.load('model\\' + file, function(binary) {
			mesh_to_load[file].forEach(function(component) {
				var mesh = xbj_loader.load(binary, component.offset);
				if(component.as_name !== undefined) {
					mesh.name = component.as_name;
				}
				root_meshes[mesh.name] = mesh;
				scene.add( mesh );
			});
		});
	});
}

function load_xbjs_adn_add_to_cache(mesh_to_load, cache, on_loading_finished) {
	var ready_files = [];
	mesh_to_load.files.forEach(function (file) {
		var file_loader = new THREE.FileLoader();
		file_loader.setResponseType('arraybuffer');
		file_loader.load('model\\' + file, function(binary) {
			mesh_to_load[file].forEach(function(component) {
				var mesh = xbj_loader.load(binary, component.offset);
				if(component.as_name !== undefined) {
					mesh.name = component.as_name;
				}
				cache[mesh.name] = mesh;
			});
			ready_files.push(file);
			if(ready_files.length === mesh_to_load.files.length) {
				on_loading_finished();
			}
		});
	});
}

function check_lookup(component_name, objcet_to_fill, as_name) {
	file = lookup[component_name].file;
	offset = lookup[component_name].offset;
	if(objcet_to_fill[file] === undefined) {
		objcet_to_fill[file] = [];
		objcet_to_fill.files.push(file);
	}

	object = {
		component_name: component_name,
		offset: offset,
	};
	if(as_name !== undefined) {
		object.as_name = as_name;
	}
	objcet_to_fill[file].push(object);
}

function check_objects_files(objects) {
	mesh_to_load = {files:[]};
	objects.forEach(function(object) {
		component_name = 'o_' + object;
		check_lookup(component_name, mesh_to_load);
	});
	return mesh_to_load;
}

function make_up_load_list(groups) {
	var mesh_to_load = {files:[]};
	groups.forEach(function(group) {
		group_info[group].groups.forEach(function(sub_group) {
			component_name = 'g_' + group + '_g_' + sub_group;
			check_lookup(component_name, mesh_to_load);
		});
		group_info[group].objects.forEach(function(object) {
			component_name = 'g_' + group + '_o_' + object;
			if(lookup[component_name] === undefined) {
				as_name = component_name;
				component_name = 'o_' + object;
				check_lookup(component_name, mesh_to_load, as_name);
			} else {
				check_lookup(component_name, mesh_to_load);
			}
		});
	});
	return mesh_to_load;
}

function random_color() {
	return new THREE.Color(Math.random(), Math.random(), Math.random());
}



var STATE = { NONE: -1, CHANGE_FOCOUS: 1 };
var target0, target1, position0, position1;
var start_time;
var change_focous_duration = 500;
var state = STATE.NONE;


var low_resolution_meshes = {};

var high_resolution_meshes = {};

var hr_meshes_to_load = [];

var root_meshes = {};

var current_meshes = {};

var model_stack = [];

var current_model = '';

var hr_mesh_ready_unchanged = {};

var focous_name = '';

function clear_transparency_and_color(meshes) {
	for(var key in meshes) {
		meshes[key].material.color = new THREE.Color(1,1,1);
		meshes[key].material.transparent = false;
	}
}

function change_meshes_and_backup(name) {
	if(state == STATE.NONE) {
		if(current_model === 'g_' + root_groups[0]) {
			low_resolution_meshes = root_meshes;
		} else {
			low_resolution_meshes = current_meshes;
		}
		model_stack.push({
			model_name: current_model,
			model_meshes: low_resolution_meshes
		});

		for(var key in low_resolution_meshes) {
			scene.remove(low_resolution_meshes[key]);
		}
		for(var key in high_resolution_meshes) {
			scene.add(high_resolution_meshes[key]);
		}
		current_meshes = high_resolution_meshes;
		current_model = name;
		clear_transparency_and_color(low_resolution_meshes);
	} else {
		hr_mesh_ready_unchanged = {
			name:name,
		};
	}
}

function prepare_hr_meshes(name) {
	info = name.split('_');
	if(info.length === 2) {
		//这已经是最后一层了
		return;
	} else if(info.length === 4) {
		group = parseInt(info[1], 10);
		next = parseInt(info[3], 10);
		if(info[2] === 'g') {
			hr_meshes_to_load = make_up_load_list([info[3]]);
		} else if(info[2] === 'o'){
			name_hr_meshes = [];
			name_hr_meshes.push('o' + next);
			hr_meshes_to_load = check_objects_files([info[3]]);
		} else {
			console.log('error prepare_hr_meshes. type: ', info[2]);
			return;
		}
		high_resolution_meshes = {};
		load_xbjs_adn_add_to_cache(hr_meshes_to_load, high_resolution_meshes, function() {
			change_meshes_and_backup(info[2] + '_' + info[3]);
		});
	} else {
		console.log('error prepare_hr_meshes. name: ', name);
	}
}

function change_focous(mesh) {
	name = mesh.name;
	info = name.split('_');
	if(info.length == 2) {
		//这已经是最后一层了
		return;
	} else {
		box = new THREE.Box3();
		box.setFromObject(mesh);
		target1 = box.getCenter();
		target0 = controls.target.clone();
		position0 = camera.position.clone();
		size = box.getSize().length();
		direction = position0.clone().sub(target0).normalize();
		position1 = target1.clone().add(direction.setLength(size));
		controls = null;
		start_time = new Date().getTime();
		state = STATE.CHANGE_FOCOUS;
		focous_name = name;
		prepare_hr_meshes(name);
	}
}

function force_select(name) {

}

function on_double_click(event) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	
	raycaster.setFromCamera( mouse, camera );
	var origin = raycaster.ray.origin;
	var direction = raycaster.ray.direction;
	var intersects = raycaster.intersectObjects( scene.children, true);
	if ( intersects.length > 0 ) {
		//change_scene(intersects[ 0 ].object.path);
		//alert(intersects[0].object.name);
		intersects[0].object.material.color = random_color();
		change_focous(intersects[0].object);
	}
}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function init(box) {

	target = box.getCenter();
	position = target.clone();
	//position.z += (box.max.z - box.min.z)*2;
	position.z += box.getSize().length();
	
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
	camera.position.copy(position);
	camera.lookAt(target.clone());
	
	controls = new THREE.TrackballControls( camera );
	controls.staticMoving = true;
	controls.target = target.clone();
	controls.update();
	// scene

	scene = new THREE.Scene();

	var ambient = new THREE.AmbientLight( 0x202020 );
	scene.add( ambient );

	directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 0, 1 );
	scene.add( directionalLight );

	var loader_metadata = new THREE.FileLoader();
	var loader_lookup = new THREE.FileLoader();
	var loader_group_info = new THREE.FileLoader();
	
	loader_metadata.load('model\\_metadata', function(file) {
		on_metadata(file);
	});
	
	loader_lookup.load('model\\_lookup', function(file) {
		on_lookup(file);
	});
	
	loader_group_info.load('model\\_group_info', function(file) {
		on_group_info(file);
	});
	
	current_meshes = root_meshes;

	raycaster = new THREE.Raycaster();
	
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	stats = new Stats();
	container.appendChild( stats.dom );
	
	window.addEventListener( 'dblclick', on_double_click );
	
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {

	requestAnimationFrame( animate );
	
	render();
	
	stats.update();
}

function render() {

	if(state == STATE.NONE) {
		controls.update();

		dir = camera.position.clone().sub(controls.target).normalize();

		directionalLight.position.copy(dir);

		renderer.render( scene, camera );

	} else if(state == STATE.CHANGE_FOCOUS) {
		time = new Date().getTime() - start_time;
		if(time > change_focous_duration) {
			camera.position.copy(position1);
			camera.lookAt(target1);

			controls = new THREE.TrackballControls( camera );
			controls.staticMoving = true;
			controls.target = target1.clone(); 
			controls.update();

			dir = position1.clone().sub(target1).normalize();
			directionalLight.position.copy(dir);
			
			state = STATE.NONE;
			
			for(var key in current_meshes) {
				current_meshes[key].material.transparent = true;
				current_meshes[key].material.opacity = 0;
			}
			if(current_meshes[focous_name] !== undefined) {
				current_meshes[focous_name].material.transparent = false;
				current_meshes[focous_name].material.opacity = 1;
			}
			focous_name = '';

			renderer.render( scene, camera );
			if(hr_mesh_ready_unchanged.name !== undefined) {
				change_meshes_and_backup(hr_mesh_ready_unchanged.name);
				hr_mesh_ready_unchanged = {};
			}
		} else {
			scaler = time / change_focous_duration;
			var target = target0.clone().multiplyScalar(1 - scaler);
			target.add(target1.clone().multiplyScalar(scaler));
			var position = position0.clone().multiplyScalar(1 - scaler);
			position.add(position1.clone().multiplyScalar(scaler));
			camera.position.copy(position);
			camera.lookAt(target);
			
			dir = position.clone().sub(target).normalize();
			directionalLight.position.copy(dir);

			for(var key in current_meshes) {
				current_meshes[key].material.transparent = true;
				current_meshes[key].material.opacity = 1 - scaler;
			}
			if(current_meshes[focous_name] !== undefined) {
				current_meshes[focous_name].material.transparent = false;
				current_meshes[focous_name].material.opacity = 1;
			}

			renderer.render( scene, camera );
		}
	} else {
		//
	}
}