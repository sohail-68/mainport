import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("/computer-desk-area/scene.gltf"); // Use public path

  return (
<primitive
  object={scene}
        scale={0.15}
  
  position={[0, -1, 0]}
  rotation={[0, Math.PI, 0]}
/>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Add Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
        />
        <hemisphereLight intensity={0.3} groundColor="black" />
        
        {/* Controls and Model */}
        <OrbitControls autoRotate enableZoom={true} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
