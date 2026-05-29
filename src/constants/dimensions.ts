// The SMLC's three shared dimensions. The whole point of the rebuild: a person,
// a business, and a society are all measured on the SAME three axes, so we can
// subtract one from another and read the "fit" (or friction) between them.
//
// Sign convention (locked): + = the self-directed / analytical / bold cluster.
//   x = Agency, y = Mode, z = Orientation.

import { AxisType } from '../types/axis.types';

export type DimensionKey = 'x' | 'y' | 'z';
export type EntityKind = 'person' | 'business' | 'society';

export interface Dimension {
    key: DimensionKey;
    name: string;
}

export const DIMENSIONS: Dimension[] = [
    { key: 'x', name: 'Agency' },
    { key: 'y', name: 'Mode' },
    { key: 'z', name: 'Orientation' },
];

export interface Pole {
    neg: string;
    pos: string;
}

// Level-appropriate pole words for each entity kind. Same axis, different surface.
export const POLES: Record<EntityKind, Record<DimensionKey, Pole>> = {
    person: {
        x: { neg: 'Collaborative', pos: 'Self-directed' },
        y: { neg: 'Intuitive', pos: 'Analytical' },
        z: { neg: 'Cautious', pos: 'Bold' },
    },
    business: {
        x: { neg: 'Hierarchical', pos: 'Flat' },
        y: { neg: 'Relationship-led', pos: 'Process-led' },
        z: { neg: 'Structured', pos: 'Flexible' },
    },
    society: {
        x: { neg: 'Collectivist', pos: 'Individualist' },
        y: { neg: 'Loose', pos: 'Tight' },
        z: { neg: 'Traditional · Local', pos: 'Progressive · Global' },
    },
};

// Generic, cross-level glosses for the 3D cube's axis ends (where person, business
// and society can all appear at once, so we can't use kind-specific words).
export const AXIS_ENDS: Record<DimensionKey, Pole & { name: string }> = {
    x: { name: 'Agency', neg: 'Collective', pos: 'Individual' },
    y: { name: 'Mode', neg: 'Relational', pos: 'Rule-based' },
    z: { name: 'Orientation', neg: 'Stability', pos: 'Change' },
};

export const entityOf = (axisType: AxisType): EntityKind => {
    switch (axisType) {
        case AxisType.PERSONAL:
            return 'person';
        case AxisType.ORGANIZATIONAL:
            return 'business';
        case AxisType.SOCIETAL:
            return 'society';
        default:
            return 'person';
    }
};

export const ENTITY_LABEL: Record<EntityKind, string> = {
    person: 'Person',
    business: 'Business',
    society: 'Society',
};

// Branded marker colors, by entity kind (distinct, readable together).
export const ENTITY_COLOR: Record<EntityKind, string> = {
    person: '#dd6234', // accent orange
    business: '#0d9488', // teal
    society: '#8b5cf6', // violet
};
