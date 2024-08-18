import ITSFModel from "./ITSFModel";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Suspense} from "react";
import BankModel from "./BankModel";
import * as THREE from "three";
import {CameraControls, OrbitControls} from "@react-three/drei";
import {PerspectiveCamera} from "three";

function SpinCameraController() {
    const {camera} = useThree();
    const rotationSpeed = 0.003; // Adjust the speed of the rotation

    useFrame(() => {
        // Rotate the camera horizontally in an anti-clockwise direction
        camera.position.applyAxisAngle(new THREE.Vector3(0, -1, 0), rotationSpeed);
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera keeps looking at the target
    });

    return null;
}

export default function ITSF() {
    return <Canvas
        style={{
            touchAction: "none", // for mobile
            zIndex: 1,
        }}
        camera={{ position: [150, 200, -100] }}
    >
        <OrbitControls/>
        <SpinCameraController/>
        <ambientLight intensity={0.5}/>
        <directionalLight
            intensity={1.0}
            position={[5, 10, 7.5]}
            castShadow={true}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
        />
        <pointLight
            intensity={0.8}
            position={[-10, 10, -10]}
            distance={50}
            decay={2}
        />
        <spotLight
            intensity={0.7}
            position={[15, 20, 5]}
            angle={0.3}
            penumbra={1}
            castShadow={true}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
        />
        <pointLight
            intensity={0.6}
            position={[0, -10, 0]} // Position the light below the scene
            distance={30}
            decay={2}
        />


        <Suspense fallback={null}>
            <ITSFModel position={[0, -40, 0]} scale={[.6, .6, .6]}/>
        </Suspense>
    </Canvas>
}