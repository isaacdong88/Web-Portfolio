import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cube = () => {
  const cube = useGLTF("./cube/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight position={[-40, 30, 10]} />
      <primitive
        object={cube.scene}
        scale={0.1}
        position={[10, -20, -20]}
        rotation={[1, 1, 1]}
      />
    </mesh>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      shadows
      camera={{ position: [80, -30, -30], fov: 70 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Cube />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
