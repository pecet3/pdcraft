import * as THREE from "three"

// renderer

const renderer = new THREE.WebGLRenderer()

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

//camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

camera.position.set(2, 2, 2)
camera.lookAt(0, 0, 0)

// scene

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00d000 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()