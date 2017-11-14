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

var meshes = {};

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
	}
}

function load_root_groups() {
	var mesh_to_load = make_up_load_list(root_groups);
	load_xbj(mesh_to_load);
}

function load_xbj(mesh_to_load) {
	mesh_to_load.files.forEach(function (file) {
		var file_loader = new THREE.FileLoader();
		file_loader.setResponseType('arraybuffer');
		file_loader.load('model\\' + file, function(binary) {
			mesh_to_load[file].forEach(function(component) {
				var mesh = xbj_loader.load(binary, component.offset);
				scene.add( mesh );
				//console.log(mesh.name);
				meshes[mesh.name] = mesh;
			});
		});
	});
}

function make_up_load_list(groups) {
	var mesh_to_load = {files:[]};
	groups.forEach(function(group) {
		group_info[group].groups.forEach(function(sub_group) {
			component_name = 'g_' + group + '_g_' + sub_group;
			file = lookup[component_name].file;
			offset = lookup[component_name].offset;
			if(mesh_to_load[file] == null) {
				mesh_to_load[file] = [];
				mesh_to_load.files.push(file);
			}
			mesh_to_load[file].push({
				component_name: component_name,
				offset: offset,
			});

		});
		group_info[group].objects.forEach(function(object) {
			component_name = 'g_' + group + '_o_' + object;
			if(lookup[component_name] == null) {
				component_name = 'o_' + object;
			}
			file = lookup[component_name].file;
			offset = lookup[component_name].offset;
			if(mesh_to_load[file] == null) {
				mesh_to_load[file] = [];
				mesh_to_load.files.push(file);
			}
			mesh_to_load[file].push({
				component_name: component_name,
				offset: offset,
			});
		});
	});

	return mesh_to_load;
}

function init(box) {

	target = box.getCenter();
	position = target.clone();
	//position.z += (box.max.z - box.min.z)*2;
	position.z += box.getSize().length();
	
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 80000 );
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

function random_color() {
	return new THREE.Color(Math.random(), Math.random(), Math.random());
}

var STATE = { NONE: -1, CHANGE_FOCOUS: 1 };
var target0, target1, position0, position1;
var start_time;
var change_focous_duration = 500;
var state = STATE.NONE;

function change_focous(mesh) {
	name = mesh.name;
	info = name.split('_');
	if(info.length == 2) {
		//do_nothing();
		//这已经是最后一层了
	} else {
		box = new THREE.Box3();
		box.setFromObject(mesh);
		target1 = box.getCenter();
		target0 = controls.target.clone();
		position0 = camera.position.clone();
		size = box.getSize().length();
		direction = position0.clone().sub(target0).normalize();
		position1 = target1.clone().add(direction.setLength(size));
		// for(var key in meshes) {
		// 	if(meshes[key].name === mesh.name) {
		// 		continue;
		// 	} else {
		// 		scene.remove(meshes[key]);
		// 	}
		// }
		controls = null;
		state = STATE.CHANGE_FOCOUS;
		start_time = new Date().getTime();
	}
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
			
			renderer.render( scene, camera );
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

			renderer.render( scene, camera );
		}
	} else {
		//
	}
}