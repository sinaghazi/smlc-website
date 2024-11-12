import React, { useRef, useEffect, useMemo } from 'react';
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas, useThree, ThreeEvent } from '@react-three/fiber';
import { IconState, Position } from './types';
import { AxisType, AXIS_LABELS } from "../../types/axis.types";
import * as THREE from 'three';

interface CubeVisualizationProps {
    primaryIcon: IconState;
    secondaryIcon: IconState;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
}

const AxisLabel: React.FC<{
    position: [number, number, number];
    text: string;
    rotation?: [number, number, number];
}> = ({ position, text, rotation = [0, 0, 0] }) => {
    return (
        <Text
            position={position}
            rotation={rotation}
            fontSize={0.15}
            color="black"
            anchorX="center"
            anchorY="middle"
            characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?-_"
        >
            {text}
        </Text>
    );
};

const AxisLabels: React.FC<{ axisType: AxisType }> = ({ axisType }) => {
    const labels = AXIS_LABELS[axisType];
    const positions: Array<{
        position: [number, number, number];
        text: string;
        rotation?: [number, number, number];
    }> = useMemo(() => [
        // X-axis
        {
            position: [-1.2, 0, 0],
            text: labels.x.split(' vs. ')[0]
        },
        {
            position: [1.2, 0, 0],
            text: labels.x.split(' vs. ')[1]
        },
        // Y-axis
        {
            position: [0, 1.2, 0],
            text: labels.y.split(' vs. ')[1]
        },
        {
            position: [0, -1.2, 0],
            text: labels.y.split(' vs. ')[0]
        },
        // Z-axis
        {
            position: [0, 0, 1.2],
            text: labels.z.split(' vs. ')[1],
            rotation: [0, Math.PI / 2, 0]
        },
        {
            position: [0, 0, -1.2],
            text: labels.z.split(' vs. ')[0],
            rotation: [0, Math.PI / 2, 0]
        }
    ], [labels]);

    return (
        <>
            {positions.map((props, index) => (
                <AxisLabel key={index} {...props} />
            ))}
        </>
    );
};

const IconMesh: React.FC<{
    position: Position;
    color: string;
    axisType: AxisType;
}> = ({ position, color, axisType }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const material = useMemo(() => new THREE.MeshStandardMaterial({
        color,
        metalness: 0.1,
        roughness: 0.5
    }), [color]);

    const getGeometry = (type: AxisType) => {
        switch (type) {
            case AxisType.PERSONAL:
                return <sphereGeometry args={[0.1, 32, 32]} />;
            case AxisType.ORGANIZATIONAL:
                return <boxGeometry args={[0.2, 0.2, 0.2]} />;
            case AxisType.SOCIETAL:
                return <coneGeometry args={[0.1, 0.2, 32]} />;
            default:
                return <sphereGeometry args={[0.1, 32, 32]} />;
        }
    };

    return (
        <mesh
            ref={meshRef}
            position={[position.x, position.y, position.z]}
            onClick={(e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation();
            }}
        >
            {getGeometry(axisType)}
            <primitive object={material} attach="material" />
        </mesh>
    );
};


const CubeObject: React.FC<{
    primaryIcon: IconState;
    secondaryIcon: IconState;
}> = ({ primaryIcon, secondaryIcon }) => {
    const meshRef = useRef<THREE.Mesh>(null);

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
                                <float32BufferAttribute
                                    attach="attributes-position"
                                    args={[positions, 3]}
                                />
                            </bufferGeometry>
                            <lineBasicMaterial color={color} linewidth={2} />
                        </line>
                    );
                })}
            </group>

            <AxisLabels axisType={primaryIcon.axisType} />

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
        camera.position.set(5, 5, 5);
        camera.lookAt(0, 0, 0);

        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
                minDistance={3}
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
        <div className="w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            <Canvas
                gl={{
                    antialias: true,
                    alpha: false,
                    preserveDrawingBuffer: true,
                    powerPreference: 'high-performance',
                }}
                camera={{
                    fov: 75,
                    near: 0.1,
                    far: 1000,
                    position: [5, 5, 5]
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
