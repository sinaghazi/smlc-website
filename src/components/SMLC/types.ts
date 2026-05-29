// src/components/SMLC/types.ts
import { EntityKind } from '@/constants/dimensions';

export interface Position {
    x: number;
    y: number;
    z: number;
}

// A single entity (person / business / society) positioned in the shared space.
export interface EntityState {
    kind: EntityKind;
    position: Position;
    active: boolean;
}

// A "situation": a person, optionally nested in a business and a society.
export interface Stack {
    person: EntityState;
    business: EntityState;
    society: EntityState;
}

export const ENTITY_ORDER: EntityKind[] = ['person', 'business', 'society'];

export const activeEntities = (stack: Stack): EntityState[] =>
    ENTITY_ORDER.map((k) => stack[k]).filter((e) => e.active);
