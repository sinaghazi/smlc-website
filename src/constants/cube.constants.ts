// constants/cube.constants.ts
import { CubeDimension } from '../types/cube.types';

export const CUBE_DIMENSIONS: CubeDimension = {
    personal: {
        axes: [
            { name: 'x', min: -1, max: 1, label: 'Individual vs. Collective Focus' },
            { name: 'y', min: -1, max: 1, label: 'Emotional vs. Rational Decision-Making' },
            { name: 'z', min: -1, max: 1, label: 'Risk-Taking vs. Risk-Averse' }
        ]
    },
    organizational: {
        axes: [
            { name: 'x', min: -1, max: 1, label: 'Hierarchical vs. Flat' },
            { name: 'y', min: -1, max: 1, label: 'Task-Oriented vs. People-Oriented' },
            { name: 'z', min: -1, max: 1, label: 'Process-Driven vs. Innovation-Driven' }
        ]
    },
    societal: {
        axes: [
            { name: 'x', min: -1, max: 1, label: 'Collectivism vs. Free Markets' },
            { name: 'y', min: -1, max: 1, label: 'Human-Centric vs. System-Centric' },
            { name: 'z', min: -1, max: 1, label: 'Data-Driven vs. Intuition-Driven' }
        ]
    }
};
