import React from 'react';
import { Stack, Position, ENTITY_ORDER } from './types';
import {
    EntityKind,
    DIMENSIONS,
    POLES,
    ENTITY_LABEL,
    ENTITY_COLOR,
} from '@/constants/dimensions';

interface ControlPanelProps {
    stack: Stack;
    onPositionChange: (kind: EntityKind, position: Position) => void;
    onToggle: (kind: EntityKind) => void;
    /** person is the anchor of a stack and can't be removed */
    title?: string;
}

const EntityControls: React.FC<{
    kind: EntityKind;
    position: Position;
    onPositionChange: (kind: EntityKind, position: Position) => void;
}> = ({ kind, position, onPositionChange }) => (
    <div className="space-y-3">
        {DIMENSIONS.map((dim) => {
            const pole = POLES[kind][dim.key];
            const value = position[dim.key as keyof Position];
            return (
                <div key={dim.key}>
                    <div className="flex items-center justify-between text-xs text-stone-500">
                        <span>{pole.neg}</span>
                        <span className="font-medium text-stone-700">{dim.name}</span>
                        <span>{pole.pos}</span>
                    </div>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.5"
                        value={value}
                        onChange={(e) =>
                            onPositionChange(kind, { ...position, [dim.key]: parseFloat(e.target.value) })
                        }
                        className="mt-1 w-full"
                        style={{ accentColor: ENTITY_COLOR[kind] }}
                    />
                </div>
            );
        })}
    </div>
);

export const ControlPanel: React.FC<ControlPanelProps> = ({
    stack,
    onPositionChange,
    onToggle,
    title,
}) => {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            {title && (
                <h3 className="mb-4 font-display text-lg font-medium text-stone-900">{title}</h3>
            )}
            <div className="space-y-5">
                {ENTITY_ORDER.map((kind) => {
                    const entity = stack[kind];
                    const isAnchor = kind === 'person';
                    return (
                        <div key={kind} className="rounded-xl border border-stone-200 p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="inline-block h-3 w-3 rounded-full"
                                        style={{ background: ENTITY_COLOR[kind] }}
                                    />
                                    <span className="font-medium text-stone-900">
                                        {ENTITY_LABEL[kind]}
                                    </span>
                                </div>
                                {!isAnchor && (
                                    <button
                                        onClick={() => onToggle(kind)}
                                        className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                                            entity.active
                                                ? 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                                : 'border border-accent-600 text-accent-700 hover:bg-accent-50'
                                        }`}
                                    >
                                        {entity.active ? 'Remove' : 'Add +'}
                                    </button>
                                )}
                            </div>
                            {entity.active && (
                                <div className="mt-4">
                                    <EntityControls
                                        kind={kind}
                                        position={entity.position}
                                        onPositionChange={onPositionChange}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ControlPanel;
