// import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';



export const Icosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (!meshRef) return;

    meshRef.current.rotation.x -= delta
    meshRef.current.rotation.y += delta
  })
  return (
    // <mesh ref={meshRef} position={[0, .5, 0]} geometry={nodes.Cube.geometry} >
    //   <MeshTransmissionMaterial
    //     transmission={1}
    //     thickness={0.2}
    //     roughness={0}
    //     distortionScale={0}
    //     temporalDistortion={0}
    //     ior={1.2}
    //     chromaticAberration={0.02}
    //     backside
    //   />
    // </mesh>
    <mesh ref={meshRef} scale={0.3} position={[0, .2, 0]}>
      <icosahedronGeometry />
      <meshStandardMaterial color="#242B32" />
    </mesh>
  )
}