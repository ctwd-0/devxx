var CTWD = CTWD||{};

//右下角显示单个构件位置的装置
CTWD.Hinter = function(boxes) {
	var _this = this;
	this.camera = {};
	this.scene = {};
	this.renderer = {};
	this.controls = {};
	this.boxes = boxes;
	this.back_material = new THREE.MeshStandardMaterial();
	this.back_material.flatShading = true;
	this.back_material.transparent = true;
	this.back_material.opacity = 0.3;
	this.hint_material = new THREE.MeshStandardMaterial();
	this.hint_material.flatShading = true;
	this.hint_material.color = new THREE.Color(1,0,0);

	this.full_geo = new THREE.Geometry();
	for(var key in boxes) {
		this.full_geo.merge(boxes[key]);
	}
	this.full_geo.computeBoundingBox();
	var box = this.full_geo.boundingBox.clone();
	var size = box.getSize();
	this.translate = box.getCenter().negate();
	this.scale_factor = 0;
	if(this.scale_factor < size.x) this.scale_factor = size.x;
	if(this.scale_factor < size.y) this.scale_factor = size.y;
	if(this.scale_factor < size.z) this.scale_factor = size.z;
	this.scale_factor = 2.0 / this.scale_factor;

	this.full_geo.translate(this.translate.x, this.translate.y, this.translate.z);
	this.full_geo.scale(this.scale_factor, this.scale_factor, this.scale_factor);

	this.full_mesh = new THREE.Mesh(this.full_geo, this.back_material);
	
	this.small_mesh = null;

	this.init = function(ctn) {
		this.container = ctn;
		aspect_ratio = this.container.clientWidth / this.container.clientHeight;
		this.camera = new THREE.PerspectiveCamera( 60, aspect_ratio, 1, 100 );
		//this.set_camera_pos(new THREE.Vector3(0,0,2));
		this.camera.position.copy(new THREE.Vector3(0,0,2));
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
		this.directionalLight = new THREE.DirectionalLight( 0xffffff );
		this.directionalLight.position.set( 0, 0, 1 );
		this.scene.add( this.directionalLight );

		this.scene.add(this.full_mesh);

		this.renderer.need_update = true;
	}

	this.render = function() {
		this.controls.update();

		var parts = current_model.split('_');
		if(parts[0] == 'g') {
			if(this.small_mesh !== null) {
				this.scene.remove(this.small_mesh );
				this.small_mesh = null;
			}
		} else {
			if(this.small_mesh !== null && this.small_mesh.name == parts[1]){

			} else {
				if(this.small_mesh !== null) {
					this.scene.remove(this.small_mesh);
					this.small_mesh = null;
				} else {
					var small_geo = this.boxes[parts[1]].clone();
					small_geo.translate(this.translate.x, this.translate.y,this.translate.z);
					small_geo.scale(this.scale_factor*1.01, this.scale_factor*1.01, this.scale_factor*1.01);
					this.small_mesh = new THREE.Mesh(small_geo, this.hint_material);
					this.small_mesh.name = parts[1];
					this.scene.add(this.small_mesh);
				}
			}
		}
		dir = this.camera.position.clone().normalize();
		this.directionalLight.position.copy(dir);

		this.renderer.render(this.scene, this.camera);
		this.renderer.need_update = false;
	};
}

CTWD.Hinter.prototype.constructor = CTWD.Hinter;
