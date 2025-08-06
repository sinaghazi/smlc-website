// src/components/SMLC/CubeVisualization.tsx
import React, { useRef, useEffect, useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { IconState, Position } from './types';
import { AxisType, AXIS_LABELS } from "../../types/axis.types";
import * as THREE from 'three';
import { Html } from '@react-three/drei';


interface CubeVisualizationProps {
    primaryIcon: IconState;
    secondaryIcon: IconState;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
}

const IconMesh: React.FC<{
    position: Position;
    color: string;
    axisType: AxisType;
}> = ({ position, color, axisType }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    const geometry = useMemo(() => {
        switch (axisType) {
            case AxisType.PERSONAL:
                return new THREE.SphereGeometry(0.1, 32, 32);
            case AxisType.ORGANIZATIONAL:
                return new THREE.BoxGeometry(0.2, 0.2, 0.2);
            case AxisType.SOCIETAL:
                return new THREE.ConeGeometry(0.1, 0.2, 32);
            default:
                return new THREE.SphereGeometry(0.1, 32, 32);
        }
    }, [axisType]);

    return (
        <mesh
            ref={meshRef}
            position={[position.x, position.y, position.z]}
            geometry={geometry}
        >
            <meshStandardMaterial color={color} metalness={0.1} roughness={0.5} />
        </mesh>
    );
};

// Create a new component for the axis labels
const AxisLabel: React.FC<{
    position: [number, number, number];
    text: string;
}> = ({ position, text }) => {

    return (
        <Html
            position={position}
            center
            style={{
                transform: 'translate3d(-50%, -50%, 0)',
                background: 'white',
                padding: '2px 4px',
                borderRadius: '4px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                opacity: 0.9,
                pointerEvents: 'none',
            }}

        >
            <div className="text-gray-900 font-medium">{text}</div>
        </Html>
    );
};


const CubeObject: React.FC<{
    primaryIcon: IconState;
    secondaryIcon: IconState;
}> = ({ primaryIcon, secondaryIcon }) => {

    const meshRef = useRef<THREE.Mesh>(null);

    const axisLabels = useMemo(() => {
        const labels = AXIS_LABELS[primaryIcon.axisType];
        return [
            // X-axis
            { position: [-1.5, 0, 0] as [number, number, number], text: labels.x.split(' vs. ')[0] },
            { position: [1.5, 0, 0] as [number, number, number], text: labels.x.split(' vs. ')[1] },
            // Y-axis
            { position: [0, 1.5, 0] as [number, number, number], text: labels.y.split(' vs. ')[1] },
            { position: [0, -1.5, 0] as [number, number, number], text: labels.y.split(' vs. ')[0] },
            // Z-axis
            { position: [0, 0, 1.5] as [number, number, number], text: labels.z.split(' vs. ')[1] },
            { position: [0, 0, -1.5] as [number, number, number], text: labels.z.split(' vs. ')[0] },
        ];
    }, [primaryIcon.axisType]);

    const [geometry, edges, transparentMaterial, lineMaterial] = useMemo(() => {
        const geo = new THREE.BoxGeometry(2, 2, 2);
        const edgesGeo = new THREE.EdgesGeometry(geo);
        const transMat = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        const lineMat = new THREE.LineBasicMaterial({
            color: '#666666',
            linewidth: 1
        });
        return [geo, edgesGeo, transMat, lineMat];
    }, []);

    return (
        <group>
            <mesh ref={meshRef}>
                <primitive object={geometry} attach="geometry" />
                <primitive object={transparentMaterial} attach="material" />
            </mesh>

            <lineSegments>
                <primitive object={edges} attach="geometry" />
                <primitive object={lineMaterial} attach="material" />
            </lineSegments>

            {/* Axis Lines */}
            <group>
                {['red', 'green', 'blue'].map((color, index) => {
                    const positions = new Float32Array(
                        index === 0 ? [-1, 0, 0, 1, 0, 0] :
                            index === 1 ? [0, -1, 0, 0, 1, 0] :
                                [0, 0, -1, 0, 0, 1]
                    );

                    return (
                        <line key={color}>
                            <bufferGeometry>
                                <bufferAttribute
                                    attach="attributes-position"
                                    array={positions}
                                    count={positions.length / 3}
                                    itemSize={3}
                                />
                            </bufferGeometry>
                            <lineBasicMaterial color={color} linewidth={2} />
                        </line>
                    );
                })}


            </group>
            {axisLabels.map((label, index) => (
                <AxisLabel
                    key={index}
                    position={label.position}
                    text={label.text}
                />
            ))}

            {primaryIcon.active && (
                <IconMesh
                    position={primaryIcon.position}
                    color={primaryIcon.color}
                    axisType={primaryIcon.axisType}
                />
            )}
            {secondaryIcon.active && (
                <IconMesh
                    position={secondaryIcon.position}
                    color={secondaryIcon.color}
                    axisType={secondaryIcon.axisType}
                />
            )}
        </group>
    );
};

const Scene: React.FC<{
    primaryIcon: IconState;
    secondaryIcon: IconState;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
}> = ({ primaryIcon, secondaryIcon }) => {
    const { camera, gl } = useThree();

    useEffect(() => {
        camera.position.set(3, 3, 3);
        camera.lookAt(0, 0, 0);
        gl.setClearColor('#ffffff', 1);
    }, [camera, gl]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <CubeObject
                primaryIcon={primaryIcon}
                secondaryIcon={secondaryIcon}
            />
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                maxDistance={10}
                minDistance={2}
                enableDamping
                dampingFactor={0.05}
                makeDefault
            />
        </>
    );
};

export const CubeVisualization: React.FC<CubeVisualizationProps> = ({
                                                                        primaryIcon,
                                                                        secondaryIcon,
                                                                        onPositionChange
                                                                    }) => {
    return (
        <div className="w-full h-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
            <Canvas
                gl={{
                    antialias: true,
                    alpha: false,
                    preserveDrawingBuffer: true,
                    powerPreference: 'high-performance',
                }}
                camera={{
                    fov: 60,
                    near: 0.1,
                    far: 1000,
                    position: [3, 3, 3]
                }}
                style={{
                    background: 'white',
                }}
            >
                <Scene
                    primaryIcon={primaryIcon}
                    secondaryIcon={secondaryIcon}
                    onPositionChange={onPositionChange}
                />
            </Canvas>
        </div>
    );
};

export default CubeVisualization;
