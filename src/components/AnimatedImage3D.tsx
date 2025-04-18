
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Mesh } from 'three';

interface AnimatedImage3DProps {
  position: [number, number, number];
}

const AnimatedImage3D: React.FC<AnimatedImage3DProps> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime()) * 0.1;
    }
  });

  const [spring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  return (
    <animated.mesh ref={meshRef} position={position} scale={spring.scale}>
      <boxGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial color="#067A46" />
    </animated.mesh>
  );
};

export default AnimatedImage3D;