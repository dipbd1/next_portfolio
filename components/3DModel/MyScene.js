import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";

import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";

import Model from "./Model";

export default function MyScene() {
  const [showPopover, setShowPopover] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-full">
      {showPopover && (
        <div className="absolute w-40">
          <div className="chat chat-end ">
            <div className="chat-bubble bg-cyan-900 text-green-700">Scratch Me</div>
          </div>
        </div>
      )}
      <Canvas
        camera={{ position: [1, 0, 12.25], fov: 10 }}
        style={{
          // backgroundColor: "#00FFFFFF",
          // width: "50vw",
          // height: "50vh",
          zIndex: 1,
        }}
      >
        <ambientLight intensity={1.25} />
        {/* <ambientLight intensity={0.1} /> */}
        <directionalLight intensity={2.4} />
        <Suspense fallback={null}>
          {/* <Model position={[0.25, -0.9, 1]} /> */}
          <PresentationControls
            global={false} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={false} // Snap-back to center (can also be a spring config)
            speed={5} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[0, Math.PI / 2]} // Vertical limits
            azimuth={[-Math.PI / 2, Math.PI / 2]} // Horizontal limits
            // azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 1700, friction: 26 }} // Spring config
          >
            <Model position={[0, -0.9, 0]} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
