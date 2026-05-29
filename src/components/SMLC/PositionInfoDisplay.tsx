// src/components/SMLC/PositionInfoDisplay.tsx — the per-entity insight card.
import React from 'react';
import { EntityState } from './types';
import { getPositionInsight } from '../../data/positionMapping';
import { ENTITY_LABEL, ENTITY_COLOR } from '@/constants/dimensions';

interface PositionInfoDisplayProps {
    entity: EntityState;
}

export const PositionInfoDisplay: React.FC<PositionInfoDisplayProps> = ({ entity }) => {
    const { profile, exact, nearest } = getPositionInsight(entity.kind, entity.position);

    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
                <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ background: ENTITY_COLOR[entity.kind] }}
                />
                <h4 className="font-medium text-stone-900">{ENTITY_LABEL[entity.kind]}</h4>
            </div>

            <p className="mt-2 font-display text-lg font-medium text-stone-900">{profile.label}</p>

            {/* magnitude-aware per-axis read */}
            <ul className="mt-3 space-y-1.5">
                {profile.phrases.map((ph) => (
                    <li key={ph.dimension} className="flex items-baseline justify-between text-sm">
                        <span className="text-stone-500">{ph.dimension}</span>
                        <span className="text-stone-800">{ph.text}</span>
                    </li>
                ))}
            </ul>

            {/* real-world anchor */}
            <div className="mt-4 border-t border-stone-100 pt-3 text-sm">
                {exact ? (
                    <p className="text-stone-700">
                        <span className="font-medium text-stone-900">Example:</span> {exact.name}
                        {exact.note ? ` — ${exact.note}` : ''}. {exact.blurb}
                    </p>
                ) : nearest ? (
                    <p className="text-stone-600">
                        <span className="font-medium text-stone-800">Closest real {ENTITY_LABEL[entity.kind].toLowerCase()}:</span>{' '}
                        {nearest.example.name}
                        {nearest.example.note ? ` (${nearest.example.note})` : ''} —{' '}
                        <span className="text-stone-500">{Math.round(nearest.similarity * 100)}% similar</span>
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default PositionInfoDisplay;
