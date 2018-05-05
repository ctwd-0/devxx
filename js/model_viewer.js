var ColorKeywords = { 
	'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4,
	'beige': 0xF5F5DC,   'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'yellow': 0xFFFF00, 'crimson': 0xDC143C,  'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC,'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'cornsilk': 0xFFF8DC, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'blanchedalmond': 0xFFEBCD,'bisque': 0xFFE4C4, 'yellowgreen': 0x9ACD32 };

var sel_color_dict= {
	'01red':0xe6194b,
	'02green': 0x3cb44b,
	'03yellow':0xffe119,
	'04blue': 0x0082c8,
	'05orange': 0xfe8231,
	'06purple': 0x911eb4,
	'07cyan': 0x46f0f0,
	'08magenta': 0xf032e6,
	'09lime': 0xd2f53c,
	'10pink':0xfabebe,
	'11teal': 0x008080,
	'12lavender': 0xe6beff, 
	'13brown': 0xaa6e28,
	'14beige': 0xfffac8,
	'15maroon': 0x800000,
	'16mint': 0xaaffc3,
	'17olive': 0x808000,
	'18coral': 0xffd8b1,
	'19navy': 0x000080,
};

var _colors = [];

for(var key in sel_color_dict) {
	var color = new THREE.Color();
	color.setHex(sel_color_dict[key]);
	_colors.push(color);
}

for(var key in ColorKeywords) {
	var color = new THREE.Color();
	color.setStyle(key);
	_colors.push(color);
}

var container, stats;

var camera, controls, scene, renderer, tracker, hinter;

var directionalLight;

var mouse = new THREE.Vector2();

var raycaster;

var metadata = {};
var lookup = {};
var group_info = {};
var names = {};
var ids = {};
var rhino_csv = {};
var csv_rhino = {};
var group_count, root_groups = [];
var meta_ready_count = 0;

var xbj_loader = new CTWD.XBJLoader();

var _viewer;

var _scaler = 0.6;

var boxes = {};
var box_count = 0;
var box_left = 0;

var selected_color = new THREE.Color(1,0,0);
var selected_mesh = null;

function try_change_photo() {
	var model_id = '';
	if(next_scene == 'g_1') {
		model_id = 'g_7';
	} else if(next_scene == 'o_15258' 
		|| next_scene == 'o_15259' 
		|| next_scene == 'o_15260' 
		|| next_scene == 'o_15261' 
		) {
		model_id = 'o';
	} else {
		model_id = 'g_-1';
	}
	bus.$emit("change_photo", model_id);
	next_scene = '';
}

function cancel_select() {
	if(selected_mesh !== null) {
		selected_mesh.material.color = new THREE.Color(1,1,1);
		selected_mesh = null;
	}
}

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

function on_names(file_names) {
	var lines = file_names.split('\n');
	lines.forEach(function(line) {
		pts = line.split(' ');
		names[pts[0]]= {
			uuid: pts[1],
			name: pts[2],
		};
		if(ids[pts[2]] === undefined) {
			ids[pts[2]] = [];
		}
		ids[pts[2]].push({
			uuid: pts[1],
			id: pts[0],
		});
	});
	on_meta_index_group_ready();
}

function on_rhino_csv(data) {
	var lines = data.split('\n');
	lines.forEach(function(line) {
		pts = line.split(',');
		if (pts.length === 2) {
			rhino_csv[pts[0]] = pts[1];
			csv_rhino[pts[1]] = pts[0];
		}
	});
	on_meta_index_group_ready();
}

function lookup_object_id(rhino_id) {
	if(ids[rhino_id] === undefined) {
		return -1;
	} else if(ids[rhino_id].length != 1) {
		return -2;
	} else {
		return ids[rhino_id][0].id;
	}
}

function triger_mv_direct_to_object(table_id) {
	if(table_id === "") {
		alert("构建编号不能为空");
		return;
	}
	let rhino_id = table_id;
	if (csv_rhino[table_id] !== undefined) {
		rhino_id = csv_rhino[table_id];
	}

	let direct_model_id = lookup_object_id(rhino_id);
	if (direct_model_id === -1 || direct_model_id === -2) {
		if(direct_model_id === -1) {
			alert("模型编号有误，请检查");
		} else {
			alert("该模型编号对应重复的构件，请检查");
		}
		return;
	}

	let sub_group_id = check_sub_group('-1', direct_model_id);
	if (sub_group_id === -1 || sub_group_id === -2) {
		alert('这个构件未被任何一个群组包含，请检查');
		return;
	}
	if (model_stack.length !== 0) {
		cancel_select();
		back_to_parent_and_direct_id = direct_model_id;
		back_to_parent();
	} else{
		triger_direct_to_object(direct_model_id);
	}
}

function triger_direct_to_object(id) {
	cancel_select();
	next_scene = 'o_' + id;
	var object_name = 'g_-1_o_' + id;
	let sub_group_id = check_sub_group('-1', id);
	if(sub_group_id === -1 || sub_group_id === -2) {
		alert('这个构件未被任何一个群组包含，请检查');
	} else {
		var group_name = 'g_-1_g_' + sub_group_id;
		var sub_group = root_meshes[group_name];
		var object = null;
		for(var i in sub_group.children) {
			if(sub_group.children[i].name === object_name) {
				object = sub_group.children[i];
			}
		}
		if(object !== null) {
			direct_to_object(sub_group, object);
		}
	}
}

var filter_data = null;

function clear_filter_data() {
	cancel_select();
	if(filter_data === null) {
		return;
	}
	for(let key in current_meshes) {
		if(current_meshes[key] instanceof THREE.Object3D) {
			current_meshes[key].material.transparent = false;
			current_meshes[key].material.opacity = 1.0;
		}
	}

	for(let type in filter_data) {
		for(let key in filter_data[type].meshes) {
			let mesh = filter_data[type].meshes[key].mesh;
			mesh.material = mesh.bak_material;
		}
	}
	
	filter_data = null;
	bus.$emit("cancel_filter", true);
	renderer.need_update = true;
}
function filter_objects_fill_data(data) {
	if (current_model[0] === "o") {
		let current_object = current_model.split("_")[1];
		for(let key in data) {
			data[key].ids = [];
			data[key].meshes = [];
			for(let i in data[key].names) {
				let name = data[key].names[i];
				if(csv_rhino[name] !== undefined) {
					name = csv_rhino[name];
				}
				id = lookup_object_id(name);
				if(id === current_object) {
					data[key].ids.push(id);
					mesh_name = current_model;
					data[key].meshes.push({
						mesh_name:mesh_name,
						mesh: current_meshes[mesh_name],
					}); 
				}
			}
		}
		return;
	}
	let current_group = current_model.split("_")[1];
	for(let key in data) {
		data[key].ids = [];
		data[key].meshes = [];
		for(let i in data[key].names) {
			let name = data[key].names[i];
			if(csv_rhino[name] !== undefined) {
				name = csv_rhino[name];
			}
			id = lookup_object_id(name);
			if(id !== -1 && id !== -2) {
				if(data[key].ids.indexOf(id) === -1) {
					let sub_group_id = check_sub_group(current_group, id);
					if (sub_group_id === -2) {

					} else if(sub_group_id === -1) {
						data[key].ids.push(id);
						mesh_name = current_model + '_o_' + id;
						data[key].meshes.push({
							mesh_name:mesh_name,
							mesh: current_meshes[mesh_name],
						}); 
					} else {
						data[key].ids.push(id);
						mesh_name = current_model + '_o_' + id;
						group_name = current_model + '_g_' + sub_group_id;
						data[key].meshes.push({
							mesh_name:mesh_name,
							group_name:group_name,
							group: current_meshes[group_name],
							mesh: current_meshes[group_name].meshes[mesh_name],
						}); 
					}
				}
			}
		}
	}
}

function filter_objects_set_meshes(data) {
	filter_data = data;
	for(var key in current_meshes) {
		if(current_meshes[key] instanceof THREE.Object3D) {
			current_meshes[key].material.transparent = true;
			current_meshes[key].material.opacity = 0.2;
		}
	}

	for(var type in data) {
		for(var key in data[type].meshes) {
			var mesh = data[type].meshes[key].mesh;
			mesh.material.transparent = false;
			mesh.material.opacity = 1;
			mesh.bak_material = mesh.material;
			mesh.material = mesh.bak_material.clone();
			mesh.material.transparent = false;
			mesh.material.opacity = 1.0;
			mesh.material.color = data[type].color;
		}
	}
}

function triger_filter_objects(data) {
	cancel_select();
	if(filter_data !== null) {
		clear_filter_data();
	}

	if(data === undefined || data == null) {
		return;
	}

	filter_objects_fill_data(data);
	
	filter_objects_set_meshes(data);

	renderer.need_update = true;
}

function triger_clear_filter_data() {
	clear_filter_data();
}

function on_meta_index_group_ready() {
	meta_ready_count++;
	if(meta_ready_count == 5) {
		//alert('meta_ready!');
		load_root_groups();
		current_model = 'g_' + root_groups[0];
	}
}

function load_root_groups() {
	var mesh_to_load = {files:[]};
	make_up_load_list(root_groups, mesh_to_load);
	for(var key in mesh_to_load) {
		if(key === 'files') {
			continue;
		}
		box_count += mesh_to_load[key].length;
	}
	box_left = box_count;
	load_xbjs_and_add_to_scene(mesh_to_load);
}

function check_sub_group(group_id, obj_id) {
	var g_info = group_info[group_id];
	if(g_info.objects.indexOf(obj_id) != -1) {
		//包含，但并没有sub_group;
		return -1;
	} else {
		for(var i = 0; i < g_info.groups.length; i++) {
			sub_group = g_info.groups[i];
			sub_contain = check_sub_group(sub_group, obj_id);
			if(sub_contain !== -2) {
				return sub_group;
			}
		}
	}
	return -2;
}

function load_xbjs_and_add_to_scene(mesh_to_load) {
	mesh_to_load.files.forEach(function (file) {
		let file_loader = new THREE.FileLoader();
		file_loader.setResponseType('arraybuffer');
		file_loader.load('dist/model/' + file, function(binary) {
			mesh_to_load[file].forEach(function(component) {
				box_left--;
				let mesh = xbj_loader.load(binary, component.offset);
				let obj_ids = mesh.name.split('_');
				let obj_id = obj_ids[3];
				let group_id = obj_ids[1];
				if(component.as_name !== undefined) {
					mesh.name = component.as_name;
				}
				let box = new THREE.Box3();
				box.setFromObject(mesh);
				let size = box.getSize();
				let center = box.getCenter();
				let box_geo = new THREE.BoxGeometry(size.x, size.y, size.z);
				box_geo.translate(center.x,center.y,center.z);
				boxes[obj_id] = box_geo;
				if(box_left == 0) {
					h_div = document.createElement('div');
					h_div.style.position = "absolute";
					h_div.style.right = 0;
					h_div.style.bottom = 0;
					h_div.style.width = '200px';
					h_div.style.height = '200px';
					container.appendChild(h_div);

					hinter = new CTWD.Hinter(boxes);
					hinter.init(h_div);
				}
				if(names[obj_id].name === '') {
					ct = 0;
					if(size.x < 40) ct++;
					if(size.y < 40) ct++;
					if(size.z < 40) ct++;
					if(ct >= 2) {
						return;
					}
				}

				sub_group = check_sub_group(group_id, obj_id);
				if(sub_group !== -1 && sub_group !== -2) {
					sub_group_name = 'g_' + group_id + '_g_' + sub_group;
					if(root_meshes[sub_group_name] === undefined) {
						root_meshes[sub_group_name] = new THREE.Group();
						root_meshes[sub_group_name].name = sub_group_name;
						root_meshes[sub_group_name].material = mesh.material;
						root_meshes[sub_group_name].meshes = {};
						scene.add(root_meshes[sub_group_name]);
						renderer.need_update = true;
					}
					root_meshes[sub_group_name].add(mesh);
					root_meshes[sub_group_name].meshes[mesh.name] = mesh;
					mesh.material = root_meshes[sub_group_name].material;
				}
				renderer.need_update = true;
			});
		});
	});
}

function load_xbjs_and_add_to_cache(mesh_to_load, cache, on_loading_finished) {
	var ready_files = [];
	mesh_to_load.files.forEach(function (file) {
		var file_loader = new THREE.FileLoader();
		file_loader.setResponseType('arraybuffer');
		file_loader.load('dist/model/' + file, function(binary) {
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

function make_up_load_list(groups, mesh_to_load, as_group) {
	groups.forEach(function(group) {
		if(group_info[group].groups.length != 0) {
			make_up_load_list(group_info[group].groups, mesh_to_load, group);
		}
		group_info[group].objects.forEach(function(object) {
			component_name = 'g_' + group + '_o_' + object;
			if(as_group !== undefined) {
				component_name = 'g_' + as_group + '_o_' + object;
			}
			if(lookup[component_name] === undefined) {
				as_name = component_name;
				component_name = 'o_' + object;
				check_lookup(component_name, mesh_to_load, as_name);
			} else {
				check_lookup(component_name, mesh_to_load);
			}
		});
	});
}

function random_color() {
	return new THREE.Color(Math.random(), Math.random(), Math.random());
}

function color_to_css_string(color) {
	return 'rgb('
		+Math.round(color.r*255)+','
		+Math.round(color.g*255)+','
		+Math.round(color.b*255)+')';
}

var STATE = { 
	NONE: -1, 
	CHANGE_FOCOUS: 1,
	BACK_TO_PARENT: 2,
	ROTATE_TO_DIR: 3,
	DIRECT_TO_OBJECT: 4,
};

var target0, target1, position0, position1, up0, up1;
var start_time;
var change_focous_duration = 500;
var back_to_parent_duration = 500;
var rotate_to_dir_duration = 500;
var state = STATE.NONE;
var next_scene = '';


var low_resolution_meshes = {};

var high_resolution_meshes = {};

var hr_meshes_to_load = [];

var root_meshes = {};

var current_meshes = {};

var model_stack = [];

var current_model = '';

var hr_mesh_ready_unchanged = null;

var focous_name = '';

var parent_scene = {};

var waiting_for_mesh = false;

var back_to_parent_and_direct_id = -1;


function clear_transparency_and_color(meshes) {
	for(var key in meshes) {
		if(meshes[key].material) {
			meshes[key].material.color = new THREE.Color(1, 1, 1);
			meshes[key].material.transparent = false;
		}
	}
	renderer.need_update = true;
}

function prepare_hr_meshes(name, box, direct_object_name) {
	info = name.split('_');
	if(info.length === 2) {
		//这已经是最后一层了
		return;
	} else if(info.length === 4) {
		let hr_meshes_to_load = {files:[]};
		if(info[2] === 'g') {
			make_up_load_list([info[3]], hr_meshes_to_load);
		} else if(info[2] === 'o'){
			hr_meshes_to_load = check_objects_files([info[3]]);
		} else {
			console.log('error prepare_hr_meshes. name: ', name);
			return;
		}
		if(direct_object_name !== undefined) {
			let name = "o_" + direct_object_name.split("_")[3]
			check_lookup(name, hr_meshes_to_load);
		}
		let high_resolution_meshes = {};
		load_xbjs_and_add_to_cache(hr_meshes_to_load, high_resolution_meshes, function() {
			high_resolution_meshes._box = box.clone();
			change_meshes_and_backup(info[2] + '_' + info[3], high_resolution_meshes, direct_object_name);
		});
	} else {
		console.log('error prepare_hr_meshes. name: ', name);
	}
}

function change_meshes_and_backup(name, high_resolution_meshes, direct_object_name) {
	cancel_select();
	clear_filter_data();
	if(state === STATE.NONE) {
		if(current_model === 'g_-1') {
			low_resolution_meshes = root_meshes;
		} else {
			low_resolution_meshes = current_meshes;
		}
		model_stack.push({
			model_name: current_model,
			model_meshes: low_resolution_meshes,
		});

		if (direct_object_name !== undefined) {
			model_stack.push({
				model_name: name,
				model_meshes: high_resolution_meshes,
			});
		}

		for(var key in low_resolution_meshes) {
			if(low_resolution_meshes[key] instanceof THREE.Object3D)
			scene.remove(low_resolution_meshes[key]);
		}
		if(direct_object !== null) {
			direct_object.material = direct_object.bak_material;
			scene.remove(direct_object);
		}
		if(direct_object_name === undefined) {
			for(var key in high_resolution_meshes) {
				if(high_resolution_meshes[key] instanceof THREE.Object3D) {
					scene.add(high_resolution_meshes[key]);
				}
			}
			current_meshes = high_resolution_meshes;
			current_model = name;
		} else {
			let info = direct_object_name.split('_');
			current_model = "o_" + info[3];
			scene.add(high_resolution_meshes[current_model]);
			current_meshes = [high_resolution_meshes[current_model]];
			delete high_resolution_meshes[current_model];
		}

		waiting_for_mesh = false;
		clear_transparency_and_color(low_resolution_meshes);
		renderer.need_update = true;
		if(hinter) {
			hinter.renderer.need_update = true;
		}
	} else {
		hr_mesh_ready_unchanged = {
			name:name,
			high_resolution_meshes:high_resolution_meshes,
			direct_object_name:direct_object_name,
		};
	}
}

function rotate_to_certain_dir(dir) {
	box = current_meshes._box;
	target1 = box.getCenter();
	target0 = controls.target.clone();
	position0 = camera.position.clone();
	size = box.getSize().length() * _scaler;
	direction = dir.clone();
	position1 = target1.clone().add(direction.setLength(size));
	up0 = camera.up.clone();
	up1 = new THREE.Vector3(0,1,0);
	if (up1.clone().cross(dir).length() < 0.00001) {
		if(direction.y > 0) {
			up1 = new THREE.Vector3(0,0,-1);
		} else {
			up1 = new THREE.Vector3(0,0,1);
		}
	}
	controls = null;
	start_time = new Date().getTime();
	state = STATE.ROTATE_TO_DIR; 
	renderer.need_update = true;
}

function change_focous(mesh) {
	cancel_select();
	clear_filter_data();
	name = mesh.name;
	info = name.split('_');
	if(info.length == 2) {
		//这已经是最后一层了
		return;
	} else {
		next_scene = info[2] + '_' + info[3];
		box = new THREE.Box3();
		box.setFromObject(mesh);
		target1 = box.getCenter();
		target0 = controls.target.clone();
		position0 = camera.position.clone();
		size = box.getSize().length() * _scaler;
		direction = position0.clone().sub(target0).normalize();
		position1 = target1.clone().add(direction.setLength(size));
		controls = null;
		start_time = new Date().getTime();
		state = STATE.CHANGE_FOCOUS;
		focous_name = name;
		prepare_hr_meshes(name, box);
		waiting_for_mesh = true;
		renderer.need_update = true;
	}
}

var direct_object = null;

function direct_to_object(sub_group, object) {
	cancel_select();
	clear_filter_data();
	direct_object = object;
	object.bak_material = object.material;
	object.material = object.bak_material.clone();

	let box = new THREE.Box3();
	box.setFromObject(object);

	let sub_group_box = new THREE.Box3();
	sub_group_box.setFromObject(sub_group);

	target1 = box.getCenter();
	target0 = controls.target.clone();
	position0 = camera.position.clone();
	size = box.getSize().length() * _scaler;
	direction = position0.clone().sub(target0).normalize();
	position1 = target1.clone().add(direction.setLength(size));
	controls = null;
	start_time = new Date().getTime();
	state = STATE.DIRECT_TO_OBJECT;
	prepare_hr_meshes(sub_group.name, sub_group_box, object.name);
	waiting_for_mesh = true;
	renderer.need_update = true;
}

function back_to_parent() {
	cancel_select();
	clear_filter_data();
	if(state === STATE.NONE && waiting_for_mesh === false) {
		if (model_stack.length) {
			state = STATE.BACK_TO_PARENT;
			parent_scene = model_stack.pop();
			next_scene = parent_scene.model_name;
			box = parent_scene.model_meshes._box;
			target1 = box.getCenter();
			target0 = controls.target.clone();
			position0 = camera.position.clone();
			size = box.getSize().length() * _scaler;
			direction = position0.clone().sub(target0).normalize();
			position1 = target1.clone().add(direction.setLength(size));
			controls = null;
			start_time = new Date().getTime();
			for(var key in parent_scene.model_meshes) {
				if(parent_scene.model_meshes[key] instanceof THREE.Object3D) {
					scene.add(parent_scene.model_meshes[key]);
					parent_scene.model_meshes[key].material.transparent = true;
					parent_scene.model_meshes[key].material.opacity = 0;
				}
			}
			state = STATE.BACK_TO_PARENT;
			renderer.need_update = true;
		}
	} else {
		return;
	}
}

function on_double_click(event) {
	if(state === STATE.NONE && waiting_for_mesh === false) {
		mouse.x = ( event.offsetX / container.clientWidth ) * 2 - 1;
		mouse.y = - ( event.offsetY / container.clientHeight ) * 2 + 1;
		
		raycaster.setFromCamera( mouse, camera );
		var origin = raycaster.ray.origin;
		var direction = raycaster.ray.direction;
		var intersects = raycaster.intersectObjects( scene.children, true);
		if ( intersects.length > 0 ) {
			//change_scene(intersects[ 0 ].object.path);
			//alert(intersects[0].object.name);
			var object = intersects[0].object;
			if(object.parent instanceof THREE.Group) {
				object = object.parent;
			}
			//object.material.color = random_color();
			change_focous(object);
		} else {
			back_to_parent();
		}
	}
}
var mouse_down_pos = null;

function on_mouse_down(event) {
	mouse_down_pos = new THREE.Vector2(event.offsetX, event.offsetY);
}

function on_click(event) {
	if(mouse_down_pos === null
		|| mouse_down_pos.x !== event.offsetX
		|| mouse_down_pos.y !== event.offsetY
		) {
		mouse_down_pos = null;
		return;
	}
	cancel_select();
	mouse_down_pos = null;
	if(state === STATE.NONE && waiting_for_mesh === false) {
		mouse.x = ( event.offsetX / container.clientWidth ) * 2 - 1;
		mouse.y = - ( event.offsetY / container.clientHeight ) * 2 + 1;
		
		raycaster.setFromCamera( mouse, camera );
		var origin = raycaster.ray.origin;
		var direction = raycaster.ray.direction;
		var intersects = raycaster.intersectObjects( scene.children, true);
		if ( intersects.length > 0 ) {
			clear_filter_data();
			var object = intersects[0].object;
			if(object.parent instanceof THREE.Group) {
				object = object.parent;
				object.material.color = selected_color;
				selected_mesh = object;
				renderer.need_update = true;
			} else if(object instanceof THREE.Mesh) {
				object.material.color = selected_color;
				selected_mesh = object;
				renderer.need_update = true;
			}
		}
	}
}

function update_webgl_container() {

	camera.aspect = container.clientWidth / container.clientHeight;

	camera.updateProjectionMatrix();

	renderer.setSize( container.clientWidth , container.clientHeight );
	renderer.need_update = true;
}

var container;

function init(box, _container) {
	root_meshes._box = box.clone();
	target = box.getCenter();
	position = target.clone();
	position.z += box.getSize().length() * _scaler;

	container = _container;

	camera = new THREE.PerspectiveCamera( 60, container.clientWidth / container.clientHeight, 1, 100000 );
	camera.position.copy(position);
	camera.lookAt(target.clone());
	
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( container.clientWidth, container.clientHeight );
	renderer.need_update = true;

	controls = new THREE.TrackballControls( camera, container, renderer);
	controls.staticMoving = true;
	controls.target = target.clone();
	controls.update();
	// scene

	scene = new THREE.Scene();
	var ambient = new THREE.AmbientLight( 0x808080 );
	scene.add( ambient );

	directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 0, 1 );
	scene.add( directionalLight );

	var file_loader = new THREE.FileLoader();
	
	file_loader.load('dist/model/_metadata', function(file) {
		on_metadata(file);
	});
	
	file_loader.load('dist/model/_lookup', function(file) {
		on_lookup(file);
	});
	
	file_loader.load('dist/model/_group_info', function(file) {
		on_group_info(file);
	});
	file_loader.load('dist/model/_names', function(file) {
		on_names(file);
	});
	file_loader.load('dist/model/_rhino_csv_id_maps.csv', function(file) {
		on_rhino_csv(file);
	});
	
	current_meshes = root_meshes;

	raycaster = new THREE.Raycaster();
	
	container.appendChild( renderer.domElement );
	stats = new Stats();
	stats.dom.style.position = "absolute";
	container.appendChild( stats.dom );

	let t_div = document.createElement('div');
	t_div.style.position = "absolute";
	t_div.style.right = 0;
	t_div.style.top = 0;
	t_div.style.width = '150px';
	t_div.style.height = '150px';
	container.appendChild(t_div);

	tracker = new CTWD.Tracker();
	tracker.init(t_div);
	
	container.addEventListener( 'dblclick', on_double_click );
	container.addEventListener( 'click', on_click );
	container.addEventListener( 'mousedown', on_mouse_down );
	
	window.addEventListener( 'resize', update_webgl_container);
}

function animate() {

	requestAnimationFrame( animate );

	if(controls){
		controls.update();
	}

	if(tracker.controls) {
		tracker.controls.update();
	}

	if(hinter && hinter.controls) {
		hinter.controls.update();
	}

	if(renderer.need_update){
		render();
	}

	if(tracker.renderer.need_update) {
		tracker.render();
	}

	if(hinter && hinter.renderer.need_update) {
		hinter.render();
	}

	stats.update();
}

function render() {

	if(state == STATE.NONE) {
		dir = camera.position.clone().sub(controls.target).normalize();

		directionalLight.position.copy(dir);

		renderer.render( scene, camera );
		renderer.need_update = false;
	} else if(state == STATE.CHANGE_FOCOUS) {
		render_change_focous();
	} else if(state == STATE.BACK_TO_PARENT){
		render_back_to_parent();
	} else if(state == STATE.ROTATE_TO_DIR){
		render_rotate_to_dir();
	} else if(state == STATE.DIRECT_TO_OBJECT){
		render_direct_to_object();
	} else {
		//
	}
}

function render_change_focous() {
	time = new Date().getTime() - start_time;
	if(time > change_focous_duration) {
		camera.position.copy(position1);
		camera.lookAt(target1);

		controls = new THREE.TrackballControls( camera, container, renderer);
		controls.staticMoving = true;
		controls.target = target1.clone(); 
		controls.update();

		dir = position1.clone().sub(target1).normalize();
		directionalLight.position.copy(dir);
		
		state = STATE.NONE;
		
		for(var key in current_meshes) {
			if(current_meshes[key] instanceof THREE.Object3D) {
				current_meshes[key].material.transparent = true;
				current_meshes[key].material.opacity = 0;
			}
		}
		if(current_meshes[focous_name] !== undefined) {
			if(current_meshes[focous_name] instanceof THREE.Object3D) {
				current_meshes[focous_name].material.transparent = false;
				current_meshes[focous_name].material.opacity = 1;
			}
		}

		if(hr_mesh_ready_unchanged !== null) {
			change_meshes_and_backup(
				hr_mesh_ready_unchanged.name,
				hr_mesh_ready_unchanged.high_resolution_meshes,
				hr_mesh_ready_unchanged.direct_object_name
				);
			hr_mesh_ready_unchanged = null;
			waiting_for_mesh = false;
		} else {
			// for(var key in low_resolution_meshes) {
			// 	if(low_resolution_meshes[key] instanceof THREE.Object3D 
			// 		&& key !== focous_name) {
			// 		scene.remove(low_resolution_meshes[key]);
			// 	}
			// }
		}

		focous_name = '';
		renderer.render( scene, camera );

		renderer.need_update = false;
		if(hinter) {
			hinter.renderer.need_update = true;
		}
		try_change_photo();
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
			if(current_meshes[key] instanceof THREE.Object3D) {
				current_meshes[key].material.transparent = true;
				current_meshes[key].material.opacity = 0;
			}
		}

		for(var key in current_meshes) {
			if(current_meshes[key] instanceof THREE.Object3D) {
				current_meshes[key].material.transparent = true;
				current_meshes[key].material.opacity = 1 - scaler;
			}
		}
		if(current_meshes[focous_name] !== undefined) {
			if(current_meshes[focous_name] instanceof THREE.Object3D) {
				current_meshes[focous_name].material.transparent = false;
				current_meshes[focous_name].material.opacity = 1;
			}
		}

		renderer.render( scene, camera );
		renderer.need_update = true;
	}
}

function render_back_to_parent() {
	time = new Date().getTime() - start_time;
	if(time > back_to_parent_duration) {
		camera.position.copy(position1);
		camera.lookAt(target1);

		controls = new THREE.TrackballControls( camera, container, renderer);
		controls.staticMoving = true;
		controls.target = target1.clone(); 
		controls.update();

		dir = position1.clone().sub(target1).normalize();
		directionalLight.position.copy(dir);
		
		state = STATE.NONE;
		
		for(var key in current_meshes) {
			scene.remove(current_meshes[key]);
		}

		current_model = parent_scene.model_name;
		current_meshes = parent_scene.model_meshes;
		parent_scene = {};
		clear_transparency_and_color(current_meshes);

		renderer.render( scene, camera );
		renderer.need_update = false;
		if(hinter) {
			hinter.renderer.need_update = true;
		}
		try_change_photo();
		if (back_to_parent_and_direct_id !== -1) {
			if(model_stack.length === 0) {
				let direct_id = back_to_parent_and_direct_id;
				back_to_parent_and_direct_id = -1;
				triger_direct_to_object(direct_id);
			} else {
				back_to_parent();
			}
		}
	} else {
		scaler = time / back_to_parent_duration;
		var target = target0.clone().multiplyScalar(1 - scaler);
		target.add(target1.clone().multiplyScalar(scaler));
		var position = position0.clone().multiplyScalar(1 - scaler);
		position.add(position1.clone().multiplyScalar(scaler));
		camera.position.copy(position);
		camera.lookAt(target);
		
		dir = position.clone().sub(target).normalize();
		directionalLight.position.copy(dir);

		for(var key in parent_scene.model_meshes) {
			if(parent_scene.model_meshes[key].material) {
				parent_scene.model_meshes[key].material.transparent = true;
				parent_scene.model_meshes[key].material.opacity = scaler;
			}
		}

		renderer.render( scene, camera );
		renderer.need_update = true;
	}
}

function render_rotate_to_dir() {
	time = new Date().getTime() - start_time;
	if(time > rotate_to_dir_duration) {
		camera.position.copy(position1);
		camera.up.copy(up1);
		camera.lookAt(target1);

		controls = new THREE.TrackballControls( camera, container, renderer );
		controls.staticMoving = true;
		controls.target = target1.clone(); 
		controls.update();

		dir = position1.clone().sub(target1).normalize();
		directionalLight.position.copy(dir);
		
		state = STATE.NONE;
		renderer.render( scene, camera );
		renderer.need_update = false;
	} else {
		scaler = time / rotate_to_dir_duration;
		let temp_pos = new THREE.Vector3();
		let dir0 = position0.clone().sub(target0);
		let dir1 = position1.clone().sub(target1);
		if(dir0.clone().cross(dir1).length() > 0.00001
			|| dir0.clone().normalize().sub(dir1.clone().normalize()).length() < 0.00001
			) {
			temp_pos = dir0.clone().multiplyScalar(1 - scaler);
			temp_pos.add(dir1.clone().multiplyScalar(scaler));
		} else {
			let middle0 = up0.clone().cross(dir0);
			if(scaler <= 0.5) {
				temp_pos = dir0.clone().multiplyScalar(0.5 - scaler);
				temp_pos.add(middle0.clone().multiplyScalar(scaler));
			} else {
				scaler -= 0.5;
				temp_pos = middle0.clone().multiplyScalar(0.5 - scaler);
				temp_pos.add(dir1.clone().multiplyScalar(scaler));
			}
		}
		temp_pos.normalize().multiplyScalar(dir0.length()*(1-scaler) + dir1.length()*scaler);

		let target = target0.clone().multiplyScalar(1 - scaler);
		target.add(target1.clone().multiplyScalar(scaler));
		let position = target.clone().add(temp_pos);
		let up = up0.clone().multiplyScalar(1 - scaler);
		up.add(up1.clone().multiplyScalar(scaler));
		
		camera.position.copy(position);
		camera.up.copy(up);
		camera.lookAt(target);
		
		dir = position.clone().sub(target).normalize();
		directionalLight.position.copy(dir);

		renderer.render( scene, camera );
		renderer.need_update = true;
	}
}

function render_direct_to_object() {
	time = new Date().getTime() - start_time;
	if(time > change_focous_duration) {
		camera.position.copy(position1);
		camera.lookAt(target1);

		controls = new THREE.TrackballControls( camera, container, renderer);
		controls.staticMoving = true;
		controls.target = target1.clone(); 
		controls.update();

		dir = position1.clone().sub(target1).normalize();
		directionalLight.position.copy(dir);
		
		state = STATE.NONE;


		if(hr_mesh_ready_unchanged !== null) {
			change_meshes_and_backup(
				hr_mesh_ready_unchanged.name,
				hr_mesh_ready_unchanged.high_resolution_meshes,
				hr_mesh_ready_unchanged.direct_object_name
				);
			hr_mesh_ready_unchanged = null;
			waiting_for_mesh = false;
		} else {
			// for(var key in low_resolution_meshes) {
			// 	if(low_resolution_meshes[key] instanceof THREE.Object3D ) {
			// 		scene.remove(low_resolution_meshes[key]);
			// 	}
			// }
			// scene.add(direct_object);
		}

		renderer.render( scene, camera );

		renderer.need_update = false;
		if(hinter) {
			hinter.renderer.need_update = true;
		}
		try_change_photo();
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
			if(current_meshes[key] instanceof THREE.Object3D) {
				current_meshes[key].material.transparent = true;
				current_meshes[key].material.opacity = 1 - scaler;
			}
		}

		renderer.render( scene, camera );
		renderer.need_update = true;
	}
}