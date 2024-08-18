// components/Backgrounds/MovingParticles.js
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Particles() {
    const pointsRef = useRef();
    const [positions] = useState(() => {
        const positions = [];
        for (let i = 0; i < 5000; i++) {
            const x = THREE.MathUtils.randFloatSpread(100);
            const y = THREE.MathUtils.randFloatSpread(100);
            const z = THREE.MathUtils.randFloatSpread(100);
            positions.push(x, y, z);
        }
        return new Float32Array(positions);
    });

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.001;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions}>
            <PointMaterial size={0.05} color="#ffffff" />
        </Points>
    );
}

export default function MovingParticles() {
    return (
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
            }}
        >
            <Particles />
        </Canvas>
    );
}