// src/types/axis.types.ts
// AxisType now denotes the *entity kind* (person / business / society), not a
// separate axis system. All three share the dimensions defined in
// constants/dimensions.ts; pole labels live in POLES there.
export enum AxisType {
    PERSONAL = 'Person',
    ORGANIZATIONAL = 'Business',
    SOCIETAL = 'Society'
}

export type PositionType = 'person' | 'business' | 'society';

export const mapAxisTypeToPositionType = (axisType: AxisType): PositionType => {
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
