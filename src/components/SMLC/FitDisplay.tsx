// src/components/SMLC/FitDisplay.tsx — pairwise fit readings for a stack.
import React from 'react';
import { EntityState } from './types';
import { computeFit, similarityPct, Fit } from './fit';
import { ENTITY_LABEL, ENTITY_COLOR } from '@/constants/dimensions';

interface FitCardProps {
    a: EntityState;
    b: EntityState;
}

const FitCard: React.FC<FitCardProps> = ({ a, b }) => {
    const aName = `the ${ENTITY_LABEL[a.kind].toLowerCase()}`;
    const bName = `the ${ENTITY_LABEL[b.kind].toLowerCase()}`;
    const fit: Fit = computeFit(a.kind, a.position, b.kind, b.position, aName, bName);

    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <h4 className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-medium text-stone-900">
                    <span className="inline-flex items-center gap-1">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: ENTITY_COLOR[a.kind] }} />
                        {ENTITY_LABEL[a.kind]}
                    </span>
                    <span className="text-stone-300">↔</span>
                    <span className="inline-flex items-center gap-1">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: ENTITY_COLOR[b.kind] }} />
                        {ENTITY_LABEL[b.kind]}
                    </span>
                </h4>
                <div className="shrink-0 text-right leading-none">
                    <div className="font-display text-2xl font-medium text-stone-900">
                        {similarityPct(fit.similarity)}%
                    </div>
                    <div className="mt-0.5 text-xs text-stone-400">aligned</div>
                </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-stone-700">{fit.headline}</p>

            <dl className="mt-4 space-y-3">
                {fit.axes.map((ax) => (
                    <div key={ax.dimension}>
                        <div className="flex items-center justify-between text-xs">
                            <dt className="font-medium text-stone-700">{ax.dimension}</dt>
                            <dd className="text-stone-400">
                                {ax.gap === 0 ? 'aligned' : `gap ${ax.gap.toFixed(1)}`}
                            </dd>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                            <div
                                className="h-full rounded-full bg-stone-400"
                                style={{ width: `${(ax.gap / 2) * 100}%` }}
                            />
                        </div>
                        <div className="mt-1 flex items-center justify-between text-xs">
                            <span style={{ color: ENTITY_COLOR[a.kind] }}>{ax.aPole}</span>
                            <span style={{ color: ENTITY_COLOR[b.kind] }}>{ax.bPole}</span>
                        </div>
                    </div>
                ))}
            </dl>
        </div>
    );
};

interface FitDisplayProps {
    entities: EntityState[];
}

export const FitDisplay: React.FC<FitDisplayProps> = ({ entities }) => {
    const pairs: Array<[EntityState, EntityState]> = [];
    for (let i = 0; i < entities.length; i++) {
        for (let j = i + 1; j < entities.length; j++) {
            pairs.push([entities[i], entities[j]]);
        }
    }

    if (pairs.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-5 text-sm text-stone-500">
                Add a business or society to read the fit between two minds.
            </div>
        );
    }

    // Size the grid to the number of pairs so a single card doesn't get squeezed
    // into a third of the row (Compare mode has one pair per stack).
    const cols =
        pairs.length >= 3
            ? 'sm:grid-cols-2 lg:grid-cols-3'
            : pairs.length === 2
              ? 'sm:grid-cols-2'
              : '';

    return (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
            {pairs.map(([a, b]) => (
                <FitCard key={`${a.kind}-${b.kind}`} a={a} b={b} />
            ))}
        </div>
    );
};

export default FitDisplay;
