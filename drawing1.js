// set up camera, scene, renderer, and controls
var camera, scene, renderer, controls, spotlight;

// set up geometry, material, and mesh
var geometry, mesh, material;

// initialize function
function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  // add camera
  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1); // location x, y, z
  scene.add(light);

// spotlight
  spotlight = new THREE.SpotLight(0xffffff, 0.5, 2000); // color, intensity, distance
  spotlight.position.set(5, 5, 5);
  spotlight.castShadow = true;
  spotlight.shadowCameraVisible = true;
  scene.add(spotlight);

  // create a loader
  var loader = new THREE.BufferGeometryLoader();

  // load the custom geometry and material
  //   loader.load('letter-block.json', function(geometry, materials) {
  //   material = new THREE.MeshPhongMaterial( { map: THREE.TextureLoader(cube-diffuse-texture.png)} );
  //   mesh = new THREE.Mesh(geometry, materials);
  //   mesh.scale.set(80, 80, 80);
  //   mesh.position.y = 80;
  //   mesh.position.x = 150;
  //   scene.add(mesh);
  // });

    loader.load('images/dress3.json', function(geometry) {
    material = new THREE.MeshPhongMaterial( {color: 0x13161a});
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(37, 37, 37);
    mesh.position.y = 65;
    mesh.position.x = 150;
    mesh.castShadow = true;
    scene.add(mesh);
  });

    loader.load('images/dress4.json', function(geometry) {
    material = new THREE.MeshStandardMaterial( { color: 0x2b3a59} );
    mesh2 = new THREE.Mesh(geometry, material);
    mesh2.scale.set(30, 30, 30);
    mesh2.position.y = 70;
    mesh2.position.x = 0;
    mesh2.castShadow = true;
    scene.add(mesh2);
  });

    loader.load('images/dress3.json', function(geometry) {
    material2 = new THREE.MeshStandardMaterial( { color: 0x13161a} );
    mesh3 = new THREE.Mesh(geometry, material2);
    mesh3.scale.set(37, 37, 37);
    mesh3.position.y = 65;
    mesh3.position.x = -150;
    mesh3.castShadow = true;
    scene.add(mesh3);
  });

  // var floorGeometry = new THREE.PlaneGeometry(700, 230, 2, 2); // x, y, vertices
  // var floorMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, opacity: 0.3, side: THREE.DoubleSide});
  // var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  // floor.rotation.x = Math.PI / 2;
  // floor.position.y = -270;
  // floor.position.x = 400;
  // floor.position.z = -110;
  // floor.receiveShadow = true;

  // scene.add(floor);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

// Make it spin
function animate() {
  requestAnimationFrame(animate);


  if (mesh) {
    mesh.rotation.y += 0.003;
  }

  if (mesh2) {
    mesh2.rotation.y += 0.003;
  }

  if (mesh3) {
    mesh3.rotation.y += 0.003;
  }

  renderer.render(scene, camera);
  controls.update();
}



// call the functions
init();
animate();
