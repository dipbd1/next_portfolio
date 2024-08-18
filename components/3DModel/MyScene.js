/* eslint-disable react/no-unknown-property */
import {Suspense, useEffect, useRef, useState} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import DeathStarModel from "./DeathStarModel";

function SecondCameraController() {
    const {camera} = useThree();
    const initialPosition = useRef([0, 0, 60]);
    const targetPosition = useRef([0, 0, 5]);
    const initialFov = useRef(12);
    const targetFov = useRef(12);
    const progress = useRef(0);
    const rotationSpeed = 0.003; // Adjust the speed of the rotation

    useFrame(() => {
        if (progress.current < 1) {
            progress.current += 0.01; // Adjust the speed of the animation
            camera.position.lerpVectors(
                new THREE.Vector3(...initialPosition.current),
                new THREE.Vector3(...targetPosition.current),
                progress.current
            );
            camera.fov = initialFov.current + (targetFov.current - initialFov.current) * progress.current;
            camera.updateProjectionMatrix();
        } else {
            // Rotate the camera horizontally in an anti-clockwise direction
            camera.position.applyAxisAngle(new THREE.Vector3(0, -1, 0), rotationSpeed);
            camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera keeps looking at the target
        }
    });
    return null;
}


export default function MyScene({showPopOverOrNot = true}) {
    const [showPopover, setShowPopover] = useState(true);

    const scale = 0.01;


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopover(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (<div className="h-1/2">
        {showPopOverOrNot && showPopover && (

            <div className="absolute w-40">
                <div className="chat chat-end ">
                    <div className="chat-bubble bg-cyan-900 text-green-700">Scratch Me</div>
                </div>
            </div>)}
        <Canvas
            style={{
                touchAction: "none", // for mobile
                zIndex: 1,
            }}
        >
            <SecondCameraController/>
            <OrbitControls/>
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
                <DeathStarModel scale={[scale, scale, scale]} position={[0, 0, 0]}/>
            </Suspense>

        </Canvas>
    </div>);
}
