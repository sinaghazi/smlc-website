// src/constants/materials.ts
import * as THREE from 'three';

export const createMaterials = () => ({
    transparent: new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false
    }),

    line: new THREE.LineBasicMaterial({
        color: '#666666',
        linewidth: 1
    }),

    text: new THREE.MeshBasicMaterial({
        color: 'black',
        depthWrite: false
    })
});
