// src/components/SMLC/CubeVisualization.tsx
import React, { useMemo, useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { IconState, Position } from './types';
import { AxisType, AXIS_LABELS } from "../../types/axis.types";
import * as THREE from 'three';
import { Html } from '@react-three/drei';


interface CubeVisualizationProps {
    primaryIcon: IconState;
    secondaryIcon: IconState;
    personalPosition?: Position;
    organizationalPosition?: Position;
    societalPosition?: Position;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
}

interface IconProps {
    position: [number, number, number];
    axisType: AxisType;
}

function LeadershipIcon({ position, axisType }: IconProps) {
    const meshRef = useRef<THREE.LineSegments>(null);
    
    // Create simple 3D line-based icons
    const geometry = useMemo(() => {
        const points: number[] = [];
        const scale = 0.004; // Scale for line drawings - even smaller for cube

        switch (axisType) {
            case AxisType.PERSONAL: {
                // Simple recognizable human figure - stick figure style
                
                // Head (circle made of line segments)
                const headRadius = 8;
                for (let i = 0; i <= 16; i++) {
                    const angle = (i / 16) * Math.PI * 2;
                    points.push(
                        Math.cos(angle) * headRadius, 
                        Math.sin(angle) * headRadius + 20, 
                        0
                    );
                }
                
                // Body (vertical line from neck to waist)
                points.push(0, 12, 0, 0, -8, 0);
                
                // Arms (horizontal line)
                points.push(-10, 5, 0, 10, 5, 0);
                
                // Left leg
                points.push(0, -8, 0, -6, -18, 0);
                
                // Right leg  
                points.push(0, -8, 0, 6, -18, 0);
                
                break;
            }
            
            case AxisType.ORGANIZATIONAL: {
                // Simple building outline using lines
                // Building outline (rectangle)
                points.push(-20, -25, 0, 20, -25, 0); // bottom
                points.push(20, -25, 0, 20, 25, 0);   // right
                points.push(20, 25, 0, -20, 25, 0);   // top
                points.push(-20, 25, 0, -20, -25, 0); // left
                
                // Windows (3x3 grid)
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const x = -12 + col * 12;
                        const y = -10 + row * 12;
                        // Window outline
                        points.push(x - 3, y - 3, 0, x + 3, y - 3, 0); // bottom
                        points.push(x + 3, y - 3, 0, x + 3, y + 3, 0); // right
                        points.push(x + 3, y + 3, 0, x - 3, y + 3, 0); // top
                        points.push(x - 3, y + 3, 0, x - 3, y - 3, 0); // left
                    }
                }
                
                // Door
                points.push(-4, -25, 0, -4, -15, 0); // left side
                points.push(-4, -15, 0, 4, -15, 0);  // top
                points.push(4, -15, 0, 4, -25, 0);   // right side
                
                break;
            }
            
            case AxisType.SOCIETAL: {
                // Simple globe using lines
                const radius = 20;
                
                // Main circle (equator)
                for (let i = 0; i <= 32; i++) {
                    const angle = (i / 32) * Math.PI * 2;
                    points.push(
                        Math.cos(angle) * radius, 
                        Math.sin(angle) * radius, 
                        0
                    );
                }
                
                // Vertical meridian lines
                for (let i = 0; i < 4; i++) {
                    const angle = (i / 4) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius;
                    
                    // Half circle for meridian
                    for (let j = 0; j <= 16; j++) {
                        const vertAngle = (j / 16) * Math.PI - Math.PI / 2;
                        points.push(
                            x * Math.cos(vertAngle),
                            Math.sin(vertAngle) * radius,
                            z * Math.cos(vertAngle)
                        );
                    }
                }
                
                // Horizontal latitude lines
                for (let lat = -1; lat <= 1; lat++) {
                    const y = lat * radius * 0.5;
                    const latRadius = Math.sqrt(radius * radius - y * y);
                    
                    for (let i = 0; i <= 24; i++) {
                        const angle = (i / 24) * Math.PI * 2;
                        points.push(
                            Math.cos(angle) * latRadius,
                            y,
                            Math.sin(angle) * latRadius
                        );
                    }
                }
                
                break;
            }
            
            default:
                break;
        }

        // Create BufferGeometry from points array
        const lineGeometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(points);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        lineGeometry.scale(scale, scale, scale);
        
        return lineGeometry;
    }, [axisType]);

    const material = new THREE.LineBasicMaterial({
        color: '#000000', // Always black to avoid confusion with axis lines
        transparent: true,
        opacity: 1,
        linewidth: 4 // Thicker lines to stand out
    });

    // Get label text for each axis type
    const getLabelText = (axisType: AxisType): string => {
        switch (axisType) {
            case AxisType.PERSONAL: return 'Personal';
            case AxisType.ORGANIZATIONAL: return 'Organizational';
            case AxisType.SOCIETAL: return 'Societal';
            default: return '';
        }
    };

    return (
        <group position={position}>
            {/* Icon */}
            <lineSegments
                ref={meshRef}
                geometry={geometry}
                material={material}
                position={[0, 0, 0]}
            />
            
            {/* Text label underneath */}
            <Html
                position={[0, -0.13, 0]}
                center
                style={{
                    color: '#000000',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            >
                {getLabelText(axisType)}
            </Html>
        </group>
    );
};



// New component for the triangle surface
const TriangleSurface: React.FC<{
    personalPos: Position;
    organizationalPos: Position;
    societalPos: Position;
}> = ({ personalPos, organizationalPos, societalPos }) => {
    const geometry = useMemo(() => {
        const vertices = new Float32Array([
            personalPos.x, personalPos.y, personalPos.z,
            organizationalPos.x, organizationalPos.y, organizationalPos.z,
            societalPos.x, societalPos.y, societalPos.z
        ]);
        
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geo.setIndex([0, 1, 2]);
        geo.computeVertexNormals();
        
        return geo;
    }, [personalPos, organizationalPos, societalPos]);

    return (
        <mesh geometry={geometry}>
            <meshLambertMaterial 
                color="#6366f1" 
                transparent 
                opacity={0.3} 
                side={THREE.DoubleSide}
            />
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
    personalPosition?: Position;
    organizationalPosition?: Position;
    societalPosition?: Position;
}> = ({ primaryIcon, secondaryIcon, personalPosition, organizationalPosition, societalPosition }) => {

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

            {/* Show all three leadership levels simultaneously */}
            {personalPosition && (
                <LeadershipIcon
                    position={[personalPosition.x, personalPosition.y, personalPosition.z]}
                    axisType={AxisType.PERSONAL}
                />
            )}
            {organizationalPosition && (
                <LeadershipIcon
                    position={[organizationalPosition.x, organizationalPosition.y, organizationalPosition.z]}
                    axisType={AxisType.ORGANIZATIONAL}
                />
            )}
            {societalPosition && (
                <LeadershipIcon
                    position={[societalPosition.x, societalPosition.y, societalPosition.z]}
                    axisType={AxisType.SOCIETAL}
                />
            )}
            
            {/* Triangle surface connecting all three levels */}
            {personalPosition && organizationalPosition && societalPosition && (
                <TriangleSurface
                    personalPos={personalPosition}
                    organizationalPos={organizationalPosition}
                    societalPos={societalPosition}
                />
            )}

            {/* Legacy icon support for backward compatibility */}
            {!personalPosition && primaryIcon.active && (
                <LeadershipIcon
                    position={[primaryIcon.position.x, primaryIcon.position.y, primaryIcon.position.z]}
                    axisType={primaryIcon.axisType}
                />
            )}
            {!organizationalPosition && secondaryIcon.active && (
                <LeadershipIcon
                    position={[secondaryIcon.position.x, secondaryIcon.position.y, secondaryIcon.position.z]}
                    axisType={secondaryIcon.axisType}
                />
            )}
        </group>
    );
};

const Scene: React.FC<{
    primaryIcon: IconState;
    secondaryIcon: IconState;
    personalPosition?: Position;
    organizationalPosition?: Position;
    societalPosition?: Position;
    onPositionChange: (isSecondary: boolean, position: Position) => void;
}> = ({ primaryIcon, secondaryIcon, personalPosition, organizationalPosition, societalPosition }) => {
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
                personalPosition={personalPosition}
                organizationalPosition={organizationalPosition}
                societalPosition={societalPosition}
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
                                                                         personalPosition,
                                                                         organizationalPosition,
                                                                         societalPosition,
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
                    personalPosition={personalPosition}
                    organizationalPosition={organizationalPosition}
                    societalPosition={societalPosition}
                    onPositionChange={onPositionChange}
                />
            </Canvas>
        </div>
    );
};

export default CubeVisualization;
