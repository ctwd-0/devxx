var CTWD = CTWD||{};

CTWD.Tracker = function() {
	var _this = this;
	this.size = 1.0;
	this.thick = 0.4;
	this.gap = 0.04;
	this.bricks = [];
	this.camera = {};
	this.scene = {};
	this.renderer = {};
	this.raycaster = {}; 
	this.defualt_material = new THREE.MeshStandardMaterial();
	this.defualt_material.flatShading = true;
	this.defualt_material.side = THREE.DoubleSide;
	this.defualt_material.transparent = true;
	this.defualt_material.opacity = 0.5;
	this.face_material = this.defualt_material.clone();
	this.face_material.color = new THREE.Color(0.54, 0.62, 0.59);
	this.edge_material = this.defualt_material.clone();
	this.edge_material.color = new THREE.Color(0.16, 0.98, 0.05);
	this.corner_material = this.defualt_material.clone();
	this.corner_material.color = new THREE.Color(0.11, 0.25, 0.75);

	this.container;	

	this.create_bricks = function(size, thick, gap) {
		var  result = [];
		// //6 faces;
		var f_a = thick - gap;
		var f_b = (size - thick) * 2;
		var off_f = size - f_a * 0.5;
		f_box = new THREE.BoxGeometry(f_a, f_b, f_b);
		g_box = f_box.clone();
		g_box.translate(off_f, 0, 0);
		result.push(new THREE.Mesh(g_box, this.face_material.clone()));
		g_box = f_box.clone();
		g_box.translate(-off_f, 0, 0);
		result.push(new THREE.Mesh(g_box, this.face_material.clone()));
		
		f_box = new THREE.BoxGeometry(f_b, f_a, f_b);
		g_box = f_box.clone();
		g_box.translate(0, off_f, 0);
		m = new THREE.Mesh(g_box, this.face_material.clone());
		//m.name = "skip";
		result.push(m);
		g_box = f_box.clone();
		g_box.translate(0, -off_f, 0);
		m = new THREE.Mesh(g_box, this.face_material.clone());
		//m.name = "skip";
		result.push(m);

		f_box = new THREE.BoxGeometry(f_b, f_b, f_a);
		g_box = f_box.clone();
		g_box.translate(0, 0, off_f);
		result.push(new THREE.Mesh(g_box, this.face_material.clone()));
		g_box = f_box.clone();
		g_box.translate(0, 0, -off_f);
		result.push(new THREE.Mesh(g_box, this.face_material.clone()));

		//12 edges;
		var e_a = thick - gap;
		var e_b = (size - thick) * 2;
		var off_e = size - e_a * 0.5;
		f_box = new THREE.BoxGeometry(e_a, e_a, e_b);
		for(var i = 0; i <= 1; i++) {
			for(var j = 0; j <= 1; j++) {
				x = i*2-1;
				y = j*2-1;
				x *= off_e;
				y *= off_e;
				h_box = f_box.clone();
				h_box.translate(x,y,0);
				result.push(new THREE.Mesh(h_box, this.edge_material.clone()));
			}
		}
		f_box = new THREE.BoxGeometry(e_a, e_b, e_a);
		for(var i = 0; i <= 1; i++) {
			for(var j = 0; j <= 1; j++) {
				x = i*2-1;
				y = j*2-1;
				x *= off_e;
				y *= off_e;
				h_box = f_box.clone();
				h_box.translate(x,0,y);
				result.push(new THREE.Mesh(h_box, this.edge_material.clone()));
			}
		}
		f_box = new THREE.BoxGeometry(e_b, e_a, e_a);
		for(var i = 0; i <= 1; i++) {
			for(var j = 0; j <= 1; j++) {
				x = i*2-1;
				y = j*2-1;
				x *= off_e;
				y *= off_e;
				h_box = f_box.clone();
				h_box.translate(0,x,y);
				result.push(new THREE.Mesh(h_box, this.edge_material.clone()));
			}
		}

		//8 corners;
		var c_a = thick - gap;
		var off_c = size - c_a * 0.5;
		c_box = new THREE.BoxGeometry(c_a, c_a, c_a);
		for(var i = 0; i <= 1; i++) {
			for(var j = 0; j <=1; j++) {
				for(var k = 0; k <= 1; k++) {
					x = i *2 -1;
					y = j *2 -1;
					z = k *2 -1;
					x *= off_c;
					y *= off_c;
					z *= off_c;
					d_box = c_box.clone();
					d_box.translate(x,y,z);
					result.push(new THREE.Mesh(d_box, this.corner_material.clone()));
				}
			}
		}
		return result;
	};

	this.init = function(ctn) {
		this.container = ctn;
		this.bricks = this.create_bricks(this.size, this.thick, this.gap);

		aspect_ratio = this.container.clientWidth / this.container.clientHeight;
		this.camera = new THREE.PerspectiveCamera( 60, aspect_ratio, 1, 100 );
		//this.set_camera_pos(new THREE.Vector3(0,0,2));
		this.camera.position.copy(new THREE.Vector3(0,0,4));
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		this.renderer = new THREE.WebGLRenderer({
			antialias:true,
			alpha:true,
		});
		this.renderer.setClearColor( 0x000000, 0 ); 
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
		this.container .appendChild( this.renderer.domElement );

		this.controls = new THREE.TrackballControls( this.camera, this.container, this.renderer);
		this.controls.noZoom = true;
		this.controls.noPan = true;
		this.controls.rotateSpeed = 1.0;
		this.controls.staticMoving = true;

		this.scene = new THREE.Scene();
		this.scene.add( new THREE.AmbientLight( 0x808080 ) );
		for(var i in this.bricks) {
			this.scene.add(this.bricks[i]);
		}
		this.directionalLight = new THREE.DirectionalLight( 0xffffff );
		this.directionalLight.position.set( 0, 0, 1 );
		this.scene.add( this.directionalLight );


		this.raycaster = new THREE.Raycaster();
		
		this.container.addEventListener('mousemove', this.on_move);
		this.container.addEventListener('dblclick', this.on_click);

		this.renderer.need_update = true;
	};

	this.on_click = function() {
		if(state === STATE.NONE && waiting_for_mesh === false) {
			mouse.x = ( event.offsetX / _this.container.clientWidth ) * 2 - 1;
			mouse.y = - ( event.offsetY / _this.container.clientHeight ) * 2 + 1;
			
			_this.raycaster.setFromCamera( mouse, _this.camera );
			var intersects = _this.raycaster.intersectObjects( _this.scene.children, true);
			if ( intersects.length > 0 ) {
				//intersects[0].object.material.opacity = 1.0;
				if(intersects[0].object.name == "skip") {
					return ;
				}
				rotate_to_certain_dir(intersects[0].object.geometry.boundingSphere.center.clone().normalize());
			}
		}
	};

	this.render = function() {
		this.controls.update();

		dir = this.camera.position.clone().normalize();
		this.directionalLight.position.copy(dir);

		this.renderer.render(this.scene, this.camera);

		this.renderer.need_update = false;
	};

	this.on_move = function(event) {
		if(state === STATE.NONE && waiting_for_mesh === false) {
			mouse.x = ( event.offsetX / _this.container.clientWidth ) * 2 - 1;
			mouse.y = - ( event.offsetY / _this.container.clientHeight ) * 2 + 1;
			
			_this.raycaster.setFromCamera( mouse, _this.camera );
			var intersects = _this.raycaster.intersectObjects( _this.scene.children, true);
			if ( intersects.length > 0 ) {
				for(var i in scene.children) {
					if(_this.scene.children[i] instanceof THREE.Mesh) {
						_this.scene.children[i].material.opacity = 0.5;
					}
				}
				intersects[0].object.material.opacity = 1.0;
				_this.renderer.need_update = true;
			}
		}
	};

	this.set_camera_pos = function (pos) {
		this.camera.position.copy(pos);
	};
}

CTWD.Tracker.prototype.constructor = CTWD.Tracker;