// src/types/axis.types.ts
export enum AxisType {
    PERSONAL = 'Person',
    ORGANIZATIONAL = 'Business',
    SOCIETAL = 'Country'
}

// Constants for each axis level
export const AXIS_LABELS = {
    [AxisType.PERSONAL]: {
        x: 'Individual vs. Collective Focus',
        y: 'Emotional vs. Rational Decision-Making',
        z: 'Risk-Taking vs. Risk-Averse'
    },
    [AxisType.ORGANIZATIONAL]: {
        x: 'Hierarchical vs. Flat',
        y: 'Task-Oriented vs. People-Oriented',
        z: 'Process-Driven vs. Innovation-Driven'
    },
    [AxisType.SOCIETAL]: {
        x: 'Collectivism vs. Free Markets',
        y: 'Human-Centric vs. System-Centric',
        z: 'Data-Driven vs. Intuition-Driven'
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
