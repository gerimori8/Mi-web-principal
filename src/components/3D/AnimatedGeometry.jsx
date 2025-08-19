import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere({ position, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[1, 32, 32]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  )
}

function AnimatedTorus({ position, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed) * 0.2
    }
  })

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.4, 16, 32]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0.2}
        metalness={0.6}
      />
    </Torus>
  )
}

function AnimatedBox({ position, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.4
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[1.5, 1.5, 1.5]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Box>
  )
}

function AnimatedGeometry() {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        {/* Animated geometries */}
        <AnimatedSphere position={[-4, 2, -2]} color="#3b82f6" speed={0.8} />
        <AnimatedTorus position={[4, -1, -1]} color="#8b5cf6" speed={1.2} />
        <AnimatedBox position={[0, -3, -3]} color="#06b6d4" speed={0.6} />
        <AnimatedSphere position={[3, 3, -4]} color="#ec4899" speed={1.5} />
        <AnimatedTorus position={[-3, -2, -2]} color="#10b981" speed={0.9} />
      </Canvas>
    </div>
  )
}

export default AnimatedGeometry

