var CTWD = {};

CTWD.XBJLoader = function() {

};
// var is_little = (function() {
//   var buffer = new ArrayBuffer(2);
//   new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
//   // Int16Array 使用系统自带的字节顺序
//   return new Int16Array(buffer)[0] === 256;
// })();
var is_little = true;
var random_shift = true;
//console.log(littleEndian);

CTWD.XBJLoader.prototype = {
	constructor: CTWD.XBJLoader,
	load: function (binary, offset) {
		var vertices = [];
		var faces    = [];
		var geometry = {
			vertices : [],
			normals  : [],
			uvs      : [],
			name     : ""
		};
		var data_view = new DataView(binary);
		var name_len = data_view.getUint32(offset, is_little);
		offset+=4;
		for(var i = 0; i < name_len; i++) {
			geometry.name +=  String.fromCharCode(data_view.getUint8(offset + i, is_little));
		}
		while(name_len % 4 !== 0){
			name_len++;
		}
		//console.log(geometry.name);
		offset += name_len;
		var nb_double = data_view.getUint8(offset, is_little);
		var nb_int = data_view.getUint8(offset+1, is_little);
		offset += 4;
		var nb_vertices = data_view.getUint32(offset, is_little);
		offset += 4;
		// if(nb_double === 8) {
		// 	for(var i = 0; i < nb_vertices * 3; i++) {
		// 		vertices.push(data_view.getFloat64(offset + i * 8, is_little));
		// 	}
		// 	offset += nb_vertices * 3 * 8;
		// } else 
		if(nb_double == 4) {
			for(var i = 0; i < nb_vertices * 3; i++) {
				vertices.push(data_view.getFloat32(offset + i * 4, is_little));
			}
			offset += nb_vertices * 3 * 4;
		} else {
			console.log("不可处理的float长度: ", nb_double);
		}
		var nb_faces = data_view.getUint32(offset, is_little);
		offset+=4;
		if(nb_int === 4) {
			for(var i = 0 ; i < nb_faces * 3; i++){
				faces.push(data_view.getUint32(offset + i * 4, is_little))
			}
			offset += nb_faces * 3 * 4;
		} else if(nb_int === 3) {
			for(var i = 0 ; i < nb_faces * 3; i++){
				lower = data_view.getUint16(offset + i * 3, is_little);
				upper = data_view.getUint8(offset + i * 3 + 2, is_little);
				faces.push(lower + (upper << 16));
			}
			offset += nb_faces * 3 * 3;
		} else if(nb_int === 2) {
			for(var i = 0 ; i < nb_faces * 3; i++){
				faces.push(data_view.getUint16(offset + i * 2, is_little))
			}
			offset += nb_faces * 3 * 2;
		} else if(nb_int === 1) {
			for(var i = 0 ; i < nb_faces * 3; i++){
				faces.push(data_view.getUint8(offset + i, is_little))
			}
			offset += nb_faces * 3;
		} else {
			console.log("不可处理的int长度");
		}

		for(var i = 0; i < faces.length; i++) {
			var index = faces[i] - 1;
			geometry.vertices.push(vertices[index * 3 + 0]);
			geometry.vertices.push(vertices[index * 3 + 1]);
			geometry.vertices.push(vertices[index * 3 + 2]);
		}

		var buffergeometry = new THREE.BufferGeometry();

		if(nb_double === 4) {
			buffergeometry.addAttribute( 'position', 
				new THREE.BufferAttribute( new Float32Array( geometry.vertices ), 3 ) );
		} else {
			console.log("不可处理的float长度: ", nb_double);
		}

		buffergeometry.computeVertexNormals();
		buffergeometry.name = geometry.name;

		material = new THREE.MeshPhongMaterial();
		material.shading = THREE.SmoothShading;
		material.side = THREE.DoubleSide;
		
		mesh = new THREE.Mesh(buffergeometry, material);
		mesh.name = buffergeometry.name;

		//container = new THREE.Group();
		//container.add(mesh);

		return mesh;
	}
};