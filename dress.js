var camera, scene, renderer, controls, spotlight;
var geometry, material, mesh;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1); // location x, y, z
  scene.add(light);

  spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000); // color, intensity, distance
  spotlight.position.set(500, 500, 500);
  spotlight.castShadow = true;
  scene.add(spotlight);

  // shadow map texture width
  spotlight.shadow.mapSize.width = 4096;
  // shadow map texture height
  spotlight.shadow.mapSize.height = 4096;

  // perspective shadow camera frustum near parameter
  spotlight.shadow.camera.near = 500;
  // perspective shadow camera frustum far parameter
  spotlight.shadow.camera.far = 2000;
  // perspective shadow camera frustum field of view
  spotlight.shadow.camera.fov = 45;

  // view shadow camera
  // var helper = new THREE.CameraHelper(spotlight.shadow.camera);
  // scene.add(helper);

  // instantiate a loader
  var textureLoader = new THREE.TextureLoader();

  textureLoader.load('lace.jpg', function(texture) {
    material = new THREE.MeshStandardMaterial({map: texture});

    sphereGeometry = new THREE.SphereGeometry(100, 50, 50);
    sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.y = 100;
    sphere.castShadow = true;
    scene.add(sphere);

    var octahedronGeometry = new THREE.OctahedronGeometry(100, 0);
    var octahedron = new THREE.Mesh(octahedronGeometry, material);
    octahedron.position.y = 100;
    octahedron.position.x = 250;
    octahedron.castShadow = true;
    scene.add(octahedron);

    // radius, tube diameter, radial segments, tube segments
    var torusGeometry = new THREE.TorusGeometry(75, 25, 25, 100);
    var torus = new THREE.Mesh(torusGeometry, material);
    torus.position.y = 100;
    torus.position.x = -250;
    torus.castShadow = true;
    scene.add(torus);
  });

  textureLoader.load('lace.jpg', function(texture) {
    var planeMaterial = new THREE.MeshStandardMaterial({map: texture, side: THREE.DoubleSide});
    var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = Math.PI / -2;
    plane.receiveShadow = true;
    scene.add(plane);
  });

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

init();
animate();