const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometry
const geometryGround = new THREE.BoxGeometry(7, 0.1, 6);
const materialGround = new THREE.MeshBasicMaterial({color: "rgb(133, 109, 104)"});
const ground = new THREE.Mesh(geometryGround, materialGround);

const geometryWall = new THREE.BoxGeometry(1, 1, 1);
const materialWall = new THREE.MeshBasicMaterial({color: "rgb(151, 151, 151)"});

// Create all walls
for (let i = 0; i < 7; i++) {
    window['wallA' + i] = new THREE.Mesh(geometryWall, materialWall);
    window['wallA' + i].position.y = 0.5
    window['wallA' + i].position.x = -3 + i
    window['wallA' + i].position.z = -2.5
}

for (let i = 0; i < 7; i++) {
    window['wallB' + i] = new THREE.Mesh(geometryWall, materialWall);
    window['wallB' + i].position.y = 0.5
    window['wallB' + i].position.x = -3 + i
    window['wallB' + i].position.z = -1.5
}

for (let i = 0; i < 7; i++) {
    window['wallC' + i] = new THREE.Mesh(geometryWall, materialWall);
    window['wallC' + i].position.y = 0.5
    window['wallC' + i].position.x = -3 + i
    window['wallC' + i].position.z = -0.5
}

for (let i = 0; i < 7; i++) {
    window['wallD' + i] = new THREE.Mesh(geometryWall, materialWall);
    window['wallD' + i].position.y = 0.5
    window['wallD' + i].position.x = -3 + i
    window['wallD' + i].position.z = 0.5
}

for (let i = 0; i < 7; i++) {
    window['wallE' + i] = new THREE.Mesh(geometryWall, materialWall);
    window['wallE' + i].position.y = 0.5
    window['wallE' + i].position.x = -3 + i
    window['wallE' + i].position.z = 1.5
}

for (let i = 0; i < 7; i++) {
    window['wallF' + i] = new THREE.Mesh(geometryWall, materialWall);
    window['wallF' + i].position.y = 0.5
    window['wallF' + i].position.x = -3 + i
    window['wallF' + i].position.z = 2.5
}

// Spawn Actors
scene.add(ground);
for (let i = 0; i < 7; i++) {
    scene.add(window['wallA' + i]);
    scene.add(window['wallB' + i]);
    scene.add(window['wallC' + i]);
    scene.add(window['wallD' + i]);
    scene.add(window['wallE' + i]);
    scene.add(window['wallF' + i]);
}

// Draw the path
scene.remove(window['wallA' + 1])
scene.remove(window['wallB' + 1])
scene.remove(window['wallB' + 3])
scene.remove(window['wallB' + 4])
scene.remove(window['wallB' + 5])
scene.remove(window['wallB' + 6])
scene.remove(window['wallC' + 1])
scene.remove(window['wallC' + 2])
scene.remove(window['wallC' + 3])
scene.remove(window['wallC' + 5])
scene.remove(window['wallD' + 1])
scene.remove(window['wallD' + 3])
scene.remove(window['wallD' + 5])
scene.remove(window['wallE' + 1])
scene.remove(window['wallE' + 3])
scene.remove(window['wallE' + 4])
scene.remove(window['wallE' + 5])

// Camera
camera.position.x = -2;
camera.position.z = -2;
camera.position.y = 0.5;
camera.rotation.x = 0;
camera.rotation.y = 3.25;

function flycam() {
    if (camera.position.z < -0.5) {
        camera.position.z += 0.01;
    } else {
        camera.position.z = -0.5;
        if (camera.rotation.y < 4.60) {
            camera.rotation.y += 0.01;
        } else {
            if (camera.position.x < -0.5) {
                camera.position.x += 0.01;
            }
        }
    }
}

const animate = function () {
    requestAnimationFrame(animate);

    flycam();

    //ground.rotation.x += 0.01;
    //ground.rotation.y += 0.01;
    //wall.rotation.x += 0.01;
    //wall.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();