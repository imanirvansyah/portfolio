"use client";

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

export const LandingSection = () => {
  return (
    <section className="container">
      <div className="canvas-container">
        <CanvasModel />
        <div className='hero-text'>
          <h1 className="title">
            Creative Developer
          </h1>
          <p className="subtitle">
            Hi, I am Iman a Frontend developer based in Indonesia, and i am very interested in work of art on digital platform
          </p>
        </div>
      </div>
    </section>
  )
}

export const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Cube />
      <OrbitControls />
      {/* <Environment preset='city' /> */}
    </Canvas>
  )
}

export const Cube = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes } = useGLTF("/models/cube.glb");

  useFrame((state, delta) => {
    if (!meshRef) return;

    meshRef.current.rotation.x -= delta
    meshRef.current.rotation.y += delta
  })
  return (
    <mesh ref={meshRef} position={[0, .5, 0]} geometry={nodes.Cube.geometry} >
      <meshStandardMaterial />
    </mesh>
  )
}