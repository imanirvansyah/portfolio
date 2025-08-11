import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';



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
    <mesh ref={meshRef} position={[0, .2, 0]} geometry={nodes.Cube.geometry} scale={0.9}>
      <MeshTransmissionMaterial
        transmission={1}
        thickness={0.2}
        roughness={0}
        distortionScale={0}
        temporalDistortion={0}
        ior={1.2}
        chromaticAberration={0.02}
        backside
      />
    </mesh>
  )
}