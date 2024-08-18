/* eslint-disable react/no-unknown-property */
import ITSFModel from "./ITSFModel";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Suspense} from "react";
import * as THREE from "three";
import { OrbitControls} from "@react-three/drei";

// function SpinCameraController() {
//     const {camera} = useThree();
//     const rotationSpeed = 0.003; // Adjust the speed of the rotation
//
//     useFrame(() => {
//         // Rotate the camera horizontally in an anti-clockwise direction
//         camera.position.applyAxisAngle(new THREE.Vector3(0, -1, 0), rotationSpeed);
//         camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera keeps looking at the target
//     });
//
//     return null;
// }


function SpinCameraController() {
    const { camera, scene } = useThree();
    const rotationSpeed = 0.003; // Adjust the speed of the rotation
    const zoomSpeed = 1; // Adjust the speed of the zoom
    const zoomRange = .18; // Adjust the range of the zoom
    const scaleSpeed = 0.002; // Adjust the speed of the scale bumping
    const scaleRange = 0.001; // Adjust the range of the scale bumping

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        // Rotate the camera horizontally in an anti-clockwise direction
        camera.position.applyAxisAngle(new THREE.Vector3(0, -1, 0), rotationSpeed);

        // Calculate the zoom factor using a sine wave
        const zoomFactor = 1 + Math.sin(elapsedTime * zoomSpeed) * zoomRange;

        // Apply the zoom factor to the camera's position
        camera.position.setLength(zoomFactor * 5); // Adjust the base distance as needed

        // Calculate the scale factor using a sine wave
        const scaleFactor = 1 + Math.sin(elapsedTime * scaleSpeed) * scaleRange;

        // Apply the scale factor to the model
        scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Ensure the camera keeps looking at the target
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    });

    return null;
}

export default function ITSF() {
    return <Canvas
        style={{
            touchAction: "none", // for mobile
            zIndex: 1,
        }}
        camera={{ position: [30,20,20] }}
    >
        <OrbitControls enableZoom={false}/>
        <SpinCameraController />
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
            <ITSFModel position={[0, -2, 0]} scale="0.016"/>
        </Suspense>
    </Canvas>
}