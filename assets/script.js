function init3DModel(containerId, modelPath, loaderClass) {
  const container = document.getElementById(containerId);
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(500, 500);
  container.appendChild(renderer.domElement);
  
  const loader = new loaderClass();
  loader.load(modelPath, (object) => {
    scene.add(object);
    camera.position.z = 5;
  });

  animate();

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
};

init3DModel("wasp-model", "assets/models/wasp.obj", THREE.OBJLoader);
init3DModel("bison-model", "assets/models/Bison.fbx", THREE.FBXLoader);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
