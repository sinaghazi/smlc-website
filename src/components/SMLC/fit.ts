// The fit engine. Because a person, a business and a society now live in the SAME
// three-dimensional space, we can literally subtract one from another and read the
// "fit" (alignment) or "friction" (distance) between them.
import { EntityKind, DimensionKey, DIMENSIONS, POLES } from '../../constants/dimensions';
import { Position } from './types';

export interface AxisFit {
    dimension: string;
    key: DimensionKey;
    /** absolute gap on this axis, 0..2 */
    gap: number;
    aPole: string;
    bPole: string;
    aValue: number;
    bValue: number;
}

export interface Fit {
    /** Euclidean distance, 0..sqrt(12) */
    friction: number;
    /** 0..1, where 1 = perfectly aligned */
    similarity: number;
    axes: AxisFit[];
    headline: string;
}

const MAX_FRICTION = Math.sqrt(12);

const poleWord = (kind: EntityKind, key: DimensionKey, v: number): string => {
    if (v > 0) return POLES[kind][key].pos;
    if (v < 0) return POLES[kind][key].neg;
    return 'balanced';
};

const intensity = (v: number): string => {
    const a = Math.abs(v);
    if (a === 1) return 'strongly ';
    if (a > 0) return 'somewhat ';
    return '';
};

const phrase = (kind: EntityKind, key: DimensionKey, v: number): string =>
    v === 0 ? 'balanced' : `${intensity(v)}${poleWord(kind, key, v).toLowerCase()}`;

export function computeFit(
    aKind: EntityKind,
    a: Position,
    bKind: EntityKind,
    b: Position,
    aName = 'the first',
    bName = 'the second',
): Fit {
    const axes: AxisFit[] = DIMENSIONS.map((d) => {
        const k = d.key;
        const av = a[k as keyof Position];
        const bv = b[k as keyof Position];
        return {
            dimension: d.name,
            key: k,
            gap: Math.abs(av - bv),
            aPole: poleWord(aKind, k, av),
            bPole: poleWord(bKind, k, bv),
            aValue: av,
            bValue: bv,
        };
    }).sort((x, y) => y.gap - x.gap);

    const friction = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    const similarity = 1 - friction / MAX_FRICTION;

    const widest = axes[0];
    const closest = axes[axes.length - 1];

    let headline: string;
    if (friction === 0) {
        headline = `${cap(aName)} and ${bName} sit in exactly the same place — no friction to bridge.`;
    } else {
        headline = `Furthest apart on ${widest.dimension}: ${aName} is ${phrase(aKind, widest.key, widest.aValue)}, ${bName} is ${phrase(bKind, widest.key, widest.bValue)}.`;
        if (closest.gap === 0) {
            headline += ` They're aligned on ${closest.dimension}.`;
        }
    }

    return { friction, similarity, axes, headline };
}

export const similarityPct = (similarity: number): number => Math.round(similarity * 100);

const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);
