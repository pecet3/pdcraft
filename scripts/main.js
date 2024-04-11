import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"
import Stats from "three/examples/jsm/libs/stats.module.js"
import { World } from "./world"
import { createGUI } from "./ui"

const stats = new Stats()
document.body.append(stats.dom)
// renderer

const renderer = new THREE.WebGLRenderer()

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x86d9ff)
document.body.appendChild(renderer.domElement)

//camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

camera.position.set(-32, 16, -32)


const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(16, 0, 16)
controls.update()
// scene

const scene = new THREE.Scene()
const world = new World()
world.generate()

scene.add(world)
// lights

function setupLights() {
  const light1 = new THREE.DirectionalLight()
  light1.position.set(1, 1, 1)
  scene.add(light1)

  const light2 = new THREE.DirectionalLight()
  light1.position.set(-1, -1, -0.5)
  scene.add(light2)

  const ambient = new THREE.AmbientLight()
  ambient.intensity = 0.2
  scene.add(ambient)
}

// render 

function animate() {
  requestAnimationFrame(animate)

  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  stats.update()
  renderer.render(scene, camera)
}


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

setupLights()
createGUI(world)
animate()