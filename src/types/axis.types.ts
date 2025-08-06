// src/types/axis.types.ts
export enum AxisType {
    PERSONAL = 'Person',
    ORGANIZATIONAL = 'Business',
    SOCIETAL = 'Country'
}

// Constants for each axis level
export const AXIS_LABELS = {
    [AxisType.PERSONAL]: {
        x: 'Self-Focus vs. Others-Focus',
        y: 'Analytical vs. Intuitive',
        z: 'Cautious vs. Bold'
    },
    [AxisType.ORGANIZATIONAL]: {
        x: 'Directive vs. Collaborative',
        y: 'Task-Focused vs. People-Focused',
        z: 'Structured vs. Flexible'
    },
    [AxisType.SOCIETAL]: {
        x: 'Individual Rights vs. Collective Good',
        y: 'Traditional vs. Progressive',
        z: 'Local vs. Global Perspective'
    }
};

export type PositionType = 'personal' | 'business' | 'country';

export const mapAxisTypeToPositionType = (axisType: AxisType): PositionType => {
    switch (axisType) {
        case AxisType.PERSONAL:
            return 'personal';
        case AxisType.ORGANIZATIONAL:
            return 'business';
        case AxisType.SOCIETAL:
            return 'country';
        default:
            return 'personal';
    }
};
