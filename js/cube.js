// cube.js

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

let data;
let scene, camera, renderer, cube;
let primaryDot, comparisonDot;

document.addEventListener("DOMContentLoaded", function () {
    // UI elements
    const primaryControls = {
        x: document.getElementById('xRange'),
        y: document.getElementById('yRange'),
        z: document.getElementById('zRange')
    };

    const comparisonControls = {
        x: document.getElementById('xRangeComparison'),
        y: document.getElementById('yRangeComparison'),
        z: document.getElementById('zRangeComparison')
    };

    const descriptionBox = document.getElementById('descriptionBox');
    const comparisonDescriptionBox = document.getElementById('comparisonDescriptionBox');
    const selectionButtons = document.querySelectorAll('.selection-btn');
    const xLabel = document.getElementById('xLabel');
    const yLabel = document.getElementById('yLabel');
    const zLabel = document.getElementById('zLabel');

    // Current state
    let currentSelection = 'individual';
    let currentPositions = {
        primary: { x: 3, y: 3, z: 3 },
        comparison: { x: 3, y: 3, z: 3 }
    };

    // Load the JSON data
    fetch('data/smlc_data.json')
        .then(response => response.json())
        .then(jsonData => {
            try {
                validateDataStructure(jsonData);
                data = jsonData;
                init();
                updateDotPositions();
            } catch (error) {
                console.error('Invalid data structure:', error);
                descriptionBox.innerHTML = `
                    <div class="text-red-500">
                        Error: The data structure is invalid. Please check the console for details.
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
            descriptionBox.innerHTML = `
                <div class="text-red-500">
                    Error: Could not load the data. Please check your internet connection and try again.
                </div>
            `;
        });

    function init() {
        initializeScene();
        initializeControls();
        animate();
    }

    function initializeScene() {
        // Scene setup
        scene = new THREE.Scene();
        const width = document.getElementById('cube-container').clientWidth;
        const height = document.getElementById('cube-container').clientHeight;
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(300, 300, 300);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Renderer setup
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        document.getElementById('cube-container').appendChild(renderer.domElement);

        // Create cube
        const geometry = new THREE.BoxGeometry(200, 200, 200);
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x333333 });
        cube = new THREE.LineSegments(edges, lineMaterial);
        scene.add(cube);

        // Create primary dot (orange)
        const primaryGeometry = new THREE.SphereGeometry(5, 32, 32);
        const primaryMaterial = new THREE.MeshBasicMaterial({ color: 0xff3300 });
        primaryDot = new THREE.Mesh(primaryGeometry, primaryMaterial);
        scene.add(primaryDot);

        // Create comparison dot (blue)
        const comparisonGeometry = new THREE.SphereGeometry(5, 32, 32);
        const comparisonMaterial = new THREE.MeshBasicMaterial({ color: 0x0066cc });
        comparisonDot = new THREE.Mesh(comparisonGeometry, comparisonMaterial);
        scene.add(comparisonDot);

        // Add axes and lighting
        addAxes();
        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    }

    function updateDotPositions() {
        // Update primary dot
        const primaryX = (currentPositions.primary.x - 3) * 50;
        const primaryY = (currentPositions.primary.y - 3) * 50;
        const primaryZ = (currentPositions.primary.z - 3) * 50;
        primaryDot.position.set(primaryX, primaryY, primaryZ);

        // Update comparison dot
        const comparisonX = (currentPositions.comparison.x - 3) * 50;
        const comparisonY = (currentPositions.comparison.y - 3) * 50;
        const comparisonZ = (currentPositions.comparison.z - 3) * 50;
        comparisonDot.position.set(comparisonX, comparisonY, comparisonZ);

        updateDescriptions();
    }

    function generateDescriptionHTML(levelData, position, title, colorClass) {
        const xValue = levelData.axes.X.values[position.x - 1];
        const yValue = levelData.axes.Y.values[position.y - 1];
        const zValue = levelData.axes.Z.values[position.z - 1];

        return `
            <div class="space-y-4">
                <div class="font-bold text-lg ${colorClass}">${title}</div>
                <ul class="list-disc list-inside space-y-2">
                    <li>${levelData.axes.X.label}: ${xValue}</li>
                    <li>${levelData.axes.Y.label}: ${yValue}</li>
                    <li>${levelData.axes.Z.label}: ${zValue}</li>
                </ul>
            </div>
        `;
    }

    function generateComparisonAnalysis(levelData, primary, comparison) {
        const distance = Math.sqrt(
            Math.pow(primary.x - comparison.x, 2) +
            Math.pow(primary.y - comparison.y, 2) +
            Math.pow(primary.z - comparison.z, 2)
        );

        return `
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 class="font-bold text-lg mb-4">Comparison Analysis</h3>
                <div class="space-y-2">
                    <p>Distance between points: ${distance.toFixed(2)} units</p>
                    <p>Key differences:</p>
                    <ul class="list-disc list-inside ml-4">
                        ${generateDifferencesList(levelData, primary, comparison)}
                    </ul>
                </div>
            </div>
        `;
    }

    function generateDifferencesList(levelData, primary, comparison) {
        const differences = [];
        const axes = ['X', 'Y', 'Z'];

        axes.forEach(axis => {
            const primaryValue = levelData.axes[axis].values[primary[axis.toLowerCase()] - 1];
            const comparisonValue = levelData.axes[axis].values[comparison[axis.toLowerCase()] - 1];

            if (primaryValue !== comparisonValue) {
                differences.push(`
                    <li>${levelData.axes[axis].label}: 
                        <span class="text-primary">${primaryValue}</span> vs 
                        <span class="text-blue-600">${comparisonValue}</span>
                    </li>
                `);
            }
        });

        return differences.join('');
    }

    function updateDescriptions() {
        if (!data || !data.levels || !data.levels[currentSelection]) return;

        const levelData = data.levels[currentSelection];

        // Update primary description
        descriptionBox.innerHTML = generateDescriptionHTML(
            levelData,
            currentPositions.primary,
            'Primary Position',
            'text-primary'
        );

        // Update comparison description
        comparisonDescriptionBox.innerHTML = generateDescriptionHTML(
            levelData,
            currentPositions.comparison,
            'Comparison Position',
            'text-blue-600'
        );

        // Add comparison analysis
        document.getElementById('comparisonAnalysis').innerHTML =
            generateComparisonAnalysis(levelData, currentPositions.primary, currentPositions.comparison);
    }

    function initializeControls() {
        // Primary controls
        Object.keys(primaryControls).forEach(axis => {
            primaryControls[axis].addEventListener('input', (e) => {
                currentPositions.primary[axis] = parseInt(e.target.value);
                updateDotPositions();
            });
        });

        // Comparison controls
        Object.keys(comparisonControls).forEach(axis => {
            comparisonControls[axis].addEventListener('input', (e) => {
                currentPositions.comparison[axis] = parseInt(e.target.value);
                updateDotPositions();
            });
        });

        // Selection buttons
        selectionButtons.forEach(button => {
            button.addEventListener('click', function() {
                updateSelectionButton(this);
                currentSelection = this.getAttribute('data-type');
                updateAxisLabels(currentSelection);
                resetSliders();
                updateDotPositions();
            });
        });

        updateAxisLabels(currentSelection);
    }

    // Helper functions
    function addAxes() {
        const axesLength = 150;
        const axesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

        ['x', 'y', 'z'].forEach(axis => {
            const points = [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(
                    axis === 'x' ? axesLength : 0,
                    axis === 'y' ? axesLength : 0,
                    axis === 'z' ? axesLength : 0
                )
            ];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const axisLine = new THREE.Line(geometry, axesMaterial);
            scene.add(axisLine);
        });

        addAxisLabels(axesLength);
    }

    function addAxisLabels(axesLength) {
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
            ['X', 'Y', 'Z'].forEach((label, index) => {
                const position = [
                    index === 0 ? axesLength + 10 : 0,
                    index === 1 ? axesLength + 10 : 0,
                    index === 2 ? axesLength + 10 : 0
                ];
                const text = createTextLabel(label, font, ...position);
                scene.add(text);
            });
        });
    }

    function createTextLabel(text, font, x, y, z) {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 10,
            height: 1
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const mesh = new THREE.Mesh(textGeometry, textMaterial);
        mesh.position.set(x, y, z);
        return mesh;
    }

    function updateSelectionButton(selectedButton) {
        selectionButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-[#333333]', 'text-white');
            btn.classList.add('bg-white', 'text-[#333333]', 'border', 'border-[#333333]');
        });
        selectedButton.classList.add('active', 'bg-[#333333]', 'text-white');
        selectedButton.classList.remove('bg-white', 'text-[#333333]', 'border', 'border-[#333333]');
    }

    function updateAxisLabels(selection) {
        if (!data) return;
        const levelData = data.levels[selection];
        xLabel.textContent = levelData.axes.X.label;
        yLabel.textContent = levelData.axes.Y.label;
        zLabel.textContent = levelData.axes.Z.label;
    }

    function resetSliders() {
        Object.keys(primaryControls).forEach(axis => {
            primaryControls[axis].value = 3;
            currentPositions.primary[axis] = 3;
        });
        Object.keys(comparisonControls).forEach(axis => {
            comparisonControls[axis].value = 3;
            currentPositions.comparison[axis] = 3;
        });
        updateDotPositions();
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    function validateDataStructure(data) {
        if (!data || !data.levels) {
            throw new Error('Invalid data structure: missing levels');
        }

        const requiredLevels = ['individual', 'organization', 'society'];
        const requiredAxes = ['X', 'Y', 'Z'];

        requiredLevels.forEach(level => {
            if (!data.levels[level]) {
                throw new Error(`Missing required level: ${level}`);
            }
            if (!data.levels[level].axes) {
                throw new Error(`Missing axes for level: ${level}`);
            }
            requiredAxes.forEach(axis => {
                if (!data.levels[level].axes[axis]) {
                    throw new Error(`Missing ${axis} axis for level: ${level}`);
                }
                if (!Array.isArray(data.levels[level].axes[axis].values)) {
                    throw new Error(`Invalid values for ${level}.${axis}`);
                }
            });
        });

        return true;
    }
});
