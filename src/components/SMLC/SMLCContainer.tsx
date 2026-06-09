import React, { useState } from 'react';
import { CubeVisualization } from './CubeVisualization';
import { ControlPanel } from './ControlPanel';
import { PositionInfoDisplay } from './PositionInfoDisplay';
import { FitDisplay } from './FitDisplay';
import { Stack, Position, EntityState, activeEntities } from './types';
import { computeFit, similarityPct } from './fit';
import { EntityKind, ENTITY_LABEL } from '@/constants/dimensions';

type Mode = 'explore' | 'compare';

const v = (x: number, y: number, z: number): Position => ({ x, y, z });

// Build a stack; business/society are active only if a position is given.
const mk = (person: Position, business?: Position, society?: Position): Stack => ({
    person: { kind: 'person', position: person, active: true },
    business: { kind: 'business', position: business ?? v(0, 0, 0), active: !!business },
    society: { kind: 'society', position: society ?? v(0, 0, 0), active: !!society },
});

// Mirror the hand-placed positions in data/positionMapping.ts EXAMPLES.
const SINA = v(0.5, 1, 0.5);
const FINLAND = v(0.5, 0.5, 0);
const IRAN = v(-0.5, -1, -1);

interface Preset {
    label: string;
    sub: string;
    mode: Mode;
    a: Stack;
    b?: Stack;
}

const presets: Preset[] = [
    {
        label: 'An Iranian founder in Finland',
        sub: 'one situation · person, business, society',
        mode: 'explore',
        a: mk(SINA, v(1, 0, 1), FINLAND),
    },
    {
        label: 'Same founder: Iran vs Finland',
        sub: 'compare · watch the fit change',
        mode: 'compare',
        a: mk(SINA, undefined, FINLAND),
        b: mk(SINA, undefined, IRAN),
    },
    {
        label: 'Two invented situations',
        sub: 'compare · pure coordinates, make them yours',
        mode: 'compare',
        a: mk(v(1, 1, 1), undefined, v(1, 0, 1)),
        b: mk(v(1, 0, 0), undefined, v(0, 1, 1)),
    },
];

// Pick the headline pair of a stack: person↔society if both present, else first pair.
const headlinePair = (stack: Stack): [EntityState, EntityState] | null => {
    const act = activeEntities(stack);
    if (stack.person.active && stack.society.active) return [stack.person, stack.society];
    if (act.length >= 2) return [act[0], act[1]];
    return null;
};

const SMLCContainer: React.FC = () => {
    const [mode, setMode] = useState<Mode>('explore');
    const [stackA, setStackA] = useState<Stack>(mk(SINA, undefined, FINLAND));
    const [stackB, setStackB] = useState<Stack>(mk(SINA, undefined, IRAN));

    const updateStack = (which: 'A' | 'B') => {
        const setter = which === 'A' ? setStackA : setStackB;
        return {
            onPositionChange: (kind: EntityKind, position: Position) =>
                setter((prev) => ({ ...prev, [kind]: { ...prev[kind], position } })),
            onToggle: (kind: EntityKind) =>
                setter((prev) => ({ ...prev, [kind]: { ...prev[kind], active: !prev[kind].active } })),
        };
    };

    const applyPreset = (preset: Preset) => {
        setMode(preset.mode);
        setStackA(preset.a);
        if (preset.b) setStackB(preset.b);
    };

    const renderStack = (stack: Stack, which: 'A' | 'B', cubeHeight: number) => {
        const handlers = updateStack(which);
        const active = activeEntities(stack);
        return (
            <div className="space-y-6">
                <CubeVisualization entities={active} height={cubeHeight} />
                <ControlPanel
                    stack={stack}
                    onPositionChange={handlers.onPositionChange}
                    onToggle={handlers.onToggle}
                />
            </div>
        );
    };

    return (
        <div className="bg-transparent py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Mode toggle */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex border border-stone-300 bg-white p-1">
                        {(['explore', 'compare'] as Mode[]).map((m) => (
                            <button
                                key={m}
                                onClick={() => setMode(m)}
                                className={`px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition ${
                                    mode === m
                                        ? 'bg-stone-900 text-stone-50'
                                        : 'text-stone-600 hover:text-stone-900'
                                }`}
                            >
                                {m === 'explore' ? 'Explore one situation' : 'Compare two'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Presets */}
                <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500">
                        Try a starting point
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                        {presets.map((preset) => (
                            <button
                                key={preset.label}
                                onClick={() => applyPreset(preset)}
                                className="group border border-stone-300 bg-white px-4 py-2.5 text-left transition hover:border-accent-600"
                            >
                                <span className="block text-sm font-semibold text-stone-900 group-hover:text-accent-600">
                                    {preset.label}
                                </span>
                                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-stone-500">
                                    {preset.sub}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {mode === 'explore' ? (
                    <div className="mt-8 space-y-8">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="lg:order-2">
                                <CubeVisualization entities={activeEntities(stackA)} height={520} />
                            </div>
                            <div className="lg:order-1">
                                <ControlPanel
                                    stack={stackA}
                                    onPositionChange={updateStack('A').onPositionChange}
                                    onToggle={updateStack('A').onToggle}
                                />
                            </div>
                        </div>

                        {/* entity cards */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {activeEntities(stackA).map((e) => (
                                <PositionInfoDisplay key={e.kind} entity={e} />
                            ))}
                        </div>

                        {/* fit between them */}
                        <div>
                            <h3 className="mb-4 font-display text-xl font-medium text-stone-900">
                                Reading the fit
                            </h3>
                            <FitDisplay entities={activeEntities(stackA)} />
                        </div>
                    </div>
                ) : (
                    <div className="mt-8 space-y-8">
                        <CompareSummary stackA={stackA} stackB={stackB} />
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div>
                                <h3 className="mb-4 font-display text-lg font-medium text-stone-900">
                                    Situation A
                                </h3>
                                {renderStack(stackA, 'A', 380)}
                                <div className="mt-6">
                                    <FitDisplay entities={activeEntities(stackA)} />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-4 font-display text-lg font-medium text-stone-900">
                                    Situation B
                                </h3>
                                {renderStack(stackB, 'B', 380)}
                                <div className="mt-6">
                                    <FitDisplay entities={activeEntities(stackB)} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const CompareSummary: React.FC<{ stackA: Stack; stackB: Stack }> = ({ stackA, stackB }) => {
    const pa = headlinePair(stackA);
    const pb = headlinePair(stackB);
    if (!pa || !pb) return null;

    const fa = computeFit(pa[0].kind, pa[0].position, pa[1].kind, pa[1].position);
    const fb = computeFit(pb[0].kind, pb[0].position, pb[1].kind, pb[1].position);

    const pairLabel = (pair: [EntityState, EntityState]) =>
        `${ENTITY_LABEL[pair[0].kind]} ↔ ${ENTITY_LABEL[pair[1].kind]}`;

    const moreAligned = fa.similarity >= fb.similarity ? 'A' : 'B';

    return (
        <div className="rounded-2xl bg-stone-950 p-6 text-stone-100">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        Situation A · {pairLabel(pa)}
                    </p>
                    <p className="mt-1 font-display text-3xl font-medium text-signal-400">
                        {similarityPct(fa.similarity)}% aligned
                    </p>
                    <p className="font-mono text-xs text-stone-400">
                        friction {fa.friction.toFixed(2)}
                    </p>
                </div>
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        Situation B · {pairLabel(pb)}
                    </p>
                    <p className="mt-1 font-display text-3xl font-medium text-signal-400">
                        {similarityPct(fb.similarity)}% aligned
                    </p>
                    <p className="font-mono text-xs text-stone-400">
                        friction {fb.friction.toFixed(2)}
                    </p>
                </div>
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm text-stone-300">
                Same building blocks, different fit. Situation {moreAligned} is the easier one to
                stand in — the other asks the person to bridge more difference.
            </p>
        </div>
    );
};

export default SMLCContainer;
