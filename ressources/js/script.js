const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

for () {

}

// Create all walls
const geometry = new THREE.BoxGeometry(7, 0.1, 6);
const material = new THREE.MeshBasicMaterial( { color: "rgb(133, 109, 104)" } );
const ground = new THREE.Mesh( geometry, material );

const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial( { color: "rgb(151, 151, 151)" } );
const wall = new THREE.Mesh( geometry1, material1 );

// Spawn all walls
scene.add( ground );
scene.add( wall );

// Set all walls coordinates
wall.position.y = 0.5
wall.position.x = -3
wall.position.z = -2.5


// Camera
camera.position.z = 6;
camera.position.y = 5;
camera.rotation.x = -0.65;

const animate = function () {
    requestAnimationFrame( animate );

    //ground.rotation.x += 0.01;
    //ground.rotation.y += 0.01;
    //wall.rotation.x += 0.01;
    //wall.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();