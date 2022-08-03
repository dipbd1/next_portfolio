import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

export default function MyScene() {
  return (
    <Canvas
      camera={{ position: [1, 0, 12.25], fov: 10 }}
      style={{
        // backgroundColor: "#00FFFFFF",
        // width: "50vw",
        // height: "50vh",
      }}
    >
      <ambientLight intensity={1.25} />
      {/* <ambientLight intensity={0.1} /> */}
      <directionalLight intensity={2.4} />
      <Suspense fallback={null}>
        {/* <Model position={[0.25, -0.9, 1]} /> */}
        <Model position={[0, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
