// constants/cube.constants.ts
import { CubeDimension } from '../types/cube.types';

export const CUBE_DIMENSIONS: CubeDimension = {
    personal: {
        axes: [
            { name: 'x', min: -1, max: 1, label: 'Self-Focus vs. Others-Focus' },
            { name: 'y', min: -1, max: 1, label: 'Analytical vs. Intuitive' },
            { name: 'z', min: -1, max: 1, label: 'Cautious vs. Bold' }
        ]
    },
    organizational: {
        axes: [
            { name: 'x', min: -1, max: 1, label: 'Directive vs. Collaborative' },
            { name: 'y', min: -1, max: 1, label: 'Task-Focused vs. People-Focused' },
            { name: 'z', min: -1, max: 1, label: 'Structured vs. Flexible' }
        ]
    },
    societal: {
        axes: [
            { name: 'x', min: -1, max: 1, label: 'Individual Rights vs. Collective Good' },
            { name: 'y', min: -1, max: 1, label: 'Traditional vs. Progressive' },
            { name: 'z', min: -1, max: 1, label: 'Local vs. Global Perspective' }
        ]
    }
};
