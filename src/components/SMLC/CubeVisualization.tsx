// src/components/SMLC/CubeVisualization.tsx
import React, { useEffect, useMemo } from 'react';
import { OrbitControls, Html, Line } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { EntityState, Position } from './types';
import { EntityKind, AXIS_ENDS, ENTITY_COLOR, ENTITY_LABEL } from '@/constants/dimensions';
import { ErrorBoundary } from '../ErrorBoundary';

interface CubeVisualizationProps {
    entities: EntityState[];
    height?: number;
}

const MarkerMesh: React.FC<{ kind: EntityKind; position: Position }> = ({ kind, position }) => {
    const geometry = useMemo(() => {
        switch (kind) {
            case 'person':
                return new THREE.SphereGeometry(0.1, 32, 32);
            case 'business':
                return new THREE.BoxGeometry(0.18, 0.18, 0.18);
            case 'society':
                return new THREE.ConeGeometry(0.11, 0.22, 32);
            default:
                return new THREE.SphereGeometry(0.1, 32, 32);
        }
    }, [kind]);

    return (
        <mesh position={[position.x, position.y, position.z]} geometry={geometry}>
            <meshStandardMaterial color={ENTITY_COLOR[kind]} metalness={0.1} roughness={0.5} />
        </mesh>
    );
};

// A fit line between two markers — makes the gap literal. drei's <Line> rebuilds
// its geometry when points change (a raw <bufferAttribute array> swap doesn't).
const FitLine: React.FC<{ a: Position; b: Position }> = ({ a, b }) => (
    <Line
        points={[
            [a.x, a.y, a.z],
            [b.x, b.y, b.z],
        ]}
        color="#9a9a8f"
        lineWidth={1.5}
        transparent
        opacity={0.85}
    />
);

const AxisEndLabel: React.FC<{ position: [number, number, number]; text: string }> = ({
    position,
    text,
}) => (
    <Html
        position={position}
        center
        style={{
            background: 'rgba(247,247,244,0.95)',
            border: '1px solid #e0e0d9',
            padding: '1px 6px',
            borderRadius: '2px',
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            color: '#52524b',
            fontWeight: 500,
        }}
    >
        {text}
    </Html>
);

const Scene: React.FC<{ entities: EntityState[] }> = ({ entities }) => {
    const { camera, gl } = useThree();

    useEffect(() => {
        camera.position.set(3, 3, 3);
        camera.lookAt(0, 0, 0);
        gl.setClearColor('#ffffff', 1);
    }, [camera, gl]);

    const [boxGeo, edges, transMat, lineMat] = useMemo(() => {
        const geo = new THREE.BoxGeometry(2, 2, 2);
        const e = new THREE.EdgesGeometry(geo);
        const t = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
        const l = new THREE.LineBasicMaterial({ color: '#c6c6bc' });
        return [geo, e, t, l];
    }, []);

    const axisLabels: Array<{ position: [number, number, number]; text: string }> = [
        { position: [1.45, 0, 0], text: AXIS_ENDS.x.pos },
        { position: [-1.45, 0, 0], text: AXIS_ENDS.x.neg },
        { position: [0, 1.4, 0], text: AXIS_ENDS.y.pos },
        { position: [0, -1.4, 0], text: AXIS_ENDS.y.neg },
        { position: [0, 0, 1.45], text: AXIS_ENDS.z.pos },
        { position: [0, 0, -1.45], text: AXIS_ENDS.z.neg },
    ];

    // all pairwise fit lines among active entities
    const pairs: Array<[EntityState, EntityState]> = [];
    for (let i = 0; i < entities.length; i++) {
        for (let j = i + 1; j < entities.length; j++) {
            pairs.push([entities[i], entities[j]]);
        }
    }

    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <mesh>
                <primitive object={boxGeo} attach="geometry" />
                <primitive object={transMat} attach="material" />
            </mesh>
            <lineSegments>
                <primitive object={edges} attach="geometry" />
                <primitive object={lineMat} attach="material" />
            </lineSegments>

            {axisLabels.map((l) => (
                <AxisEndLabel key={l.text} position={l.position} text={l.text} />
            ))}

            {pairs.map(([a, b], i) => (
                <FitLine key={i} a={a.position} b={b.position} />
            ))}

            {entities.map((e) => (
                <MarkerMesh key={e.kind} kind={e.kind} position={e.position} />
            ))}

            <OrbitControls
                enablePan={false}
                enableZoom
                maxDistance={10}
                minDistance={2}
                enableDamping
                dampingFactor={0.05}
                makeDefault
            />
        </>
    );
};

export const CubeVisualization: React.FC<CubeVisualizationProps> = ({ entities, height = 520 }) => {
    return (
        <div
            className="relative w-full overflow-hidden rounded-lg border border-stone-200 bg-white"
            style={{ height }}
        >
            <ErrorBoundary
                fallback={
                    <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-stone-500">
                        The 3D view couldn't load on this device — the sliders and readings
                        still work.
                    </div>
                }
            >
                <Canvas
                    gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
                    camera={{ fov: 60, near: 0.1, far: 1000, position: [3, 3, 3] }}
                    style={{ background: 'white' }}
                >
                    <Scene entities={entities} />
                </Canvas>
            </ErrorBoundary>

            {/* legend */}
            <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-stone-500">
                {entities.map((e) => (
                    <span key={e.kind} className="flex items-center gap-1.5">
                        <span
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{ background: ENTITY_COLOR[e.kind] }}
                        />
                        {ENTITY_LABEL[e.kind]}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CubeVisualization;
