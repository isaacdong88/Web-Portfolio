import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cube = () => {
  const cube = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight position={[-40, 30, 10]} />
      <primitive
        object={cube.scene}
        scale={5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
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
      camera={{ position: [30, 10, 10], fov: 30 }}
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
