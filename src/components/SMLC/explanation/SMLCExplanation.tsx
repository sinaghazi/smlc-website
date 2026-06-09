import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { DIMENSIONS, POLES, ENTITY_LABEL, EntityKind } from '@/constants/dimensions';
import SMLCContainer from '../SMLCContainer';
import Seo from '../../seo/Seo';

const KINDS: EntityKind[] = ['person', 'business', 'society'];

const dimensionIntro: Record<string, string> = {
    Agency: 'Where action comes from — the self, or the group.',
    Mode: 'How you process and relate — by rule and analysis, or by relationship and intuition.',
    Orientation: 'Your stance toward risk and change — preserve and steady, or push and expand.',
};

const applications = [
    {
        title: 'Reading a founder vs. their team',
        body: 'A bold, self-directed founder and a steady, relationship-led team aren’t in conflict — they sit at different coordinates. The gap is the thing to manage.',
    },
    {
        title: 'Landing in a new culture',
        body: 'Drop the same person into two societies and their fit changes. That’s the whole immigrant experience — and exactly the Iran→Finland story behind this site.',
    },
    {
        title: 'Why a message misfires',
        body: 'Most breakdowns aren’t about facts — they’re a mismatch in defaults. Seeing the other position makes the re-frame obvious. (It’s the idea behind työ.)',
    },
];

export const SMLCExplanation: React.FC = () => {
    return (
        <div className="bg-white">
            <Seo
                title="The SMLC — one world, two minds, mapped | Sina Ghazi"
                description="The Sina Multidimensional Leadership Cube measures a person, a business, and a society on the same three dimensions — so you can read the fit, or the friction, between someone and their context."
                path="/explanation"
                ogType="article"
            />
            {/* Hero */}
            <div className="mx-auto max-w-3xl px-6 pt-20 sm:pt-28 lg:px-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
                    The SMLC
                </p>
                <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
                    One world, two minds — mapped.
                </h1>
                <p className="mt-6 text-lg leading-8 text-stone-700">
                    The Sina Multidimensional Leadership Cube measures a person, a business, and a
                    society on the <em>same</em> three dimensions. That's the trick: when they share
                    one coordinate system, you can put a person <em>inside</em> their context and
                    read the distance between them — the <strong>fit</strong>, or the friction.
                </p>
            </div>

            {/* The three shared dimensions */}
            <div className="mx-auto mt-14 max-w-5xl px-6 lg:px-8">
                <h2 className="font-display text-2xl font-medium text-stone-900 sm:text-3xl">
                    Three dimensions, one space
                </h2>
                <div className="mt-8 overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-stone-200 text-left">
                                <th className="py-3 pr-4 font-medium text-stone-500">Dimension</th>
                                {KINDS.map((k) => (
                                    <th key={k} className="px-4 py-3 font-medium text-stone-900">
                                        {ENTITY_LABEL[k]}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {DIMENSIONS.map((dim) => (
                                <tr key={dim.key} className="border-b border-stone-100 align-top">
                                    <td className="py-4 pr-4">
                                        <div className="font-display text-lg font-medium text-stone-900">
                                            {dim.name}
                                        </div>
                                        <div className="mt-1 text-xs leading-5 text-stone-500">
                                            {dimensionIntro[dim.name]}
                                        </div>
                                    </td>
                                    {KINDS.map((k) => {
                                        const pole = POLES[k][dim.key];
                                        return (
                                            <td key={k} className="px-4 py-4 text-stone-700">
                                                {pole.neg}{' '}
                                                <span className="text-stone-300">⇄</span> {pole.pos}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Interactive cube */}
            <div className="mx-auto mt-16 max-w-3xl px-6 lg:px-8">
                <h2 className="font-display text-2xl font-medium text-stone-900 sm:text-3xl">
                    Try it
                </h2>
                <p className="mt-3 text-stone-700">
                    Place a person inside a business and a society and read the three pairwise fits —
                    or switch to <span className="font-medium">Compare</span> and drop the same person
                    into two different worlds to watch their fit change.
                </p>
            </div>
            <SMLCContainer />

            {/* Why fit */}
            <div className="mx-auto mt-12 max-w-3xl px-6 lg:px-8">
                <h2 className="font-display text-2xl font-medium text-stone-900 sm:text-3xl">
                    Fit is just subtraction
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-700">
                    Because the person and the society live in the same space,{' '}
                    <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">person − society</code>{' '}
                    is a real vector. Its length is how hard you're swimming against your context; its
                    direction tells you <em>where</em>. A self-directed individual barely notices an
                    individualist society and rubs hard against a collectivist one — same person, two
                    frictions. That gap is what understanding has to cross, and what framing bridges.
                </p>
            </div>

            {/* Honesty note */}
            <div className="mx-auto mt-10 max-w-3xl px-6 lg:px-8">
                <div className="rounded-2xl bg-stone-950 p-8 text-stone-100">
                    <h3 className="font-display text-xl font-medium text-signal-400">
                        A note on honesty
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-300">
                        The axes map onto validated constructs — Hofstede's individualism–collectivism
                        (which holds at both the personal and national level), Kahneman's
                        dual-process theory, Higgins' regulatory focus, and Trompenaars'
                        universalism–particularism (rule-based vs relationship-based trust).
                        Two honest caveats: the three dimensions are treated as independent, though in
                        reality they can correlate — so read distance as a guide, not a measurement.
                        And a society's position is its <em>prevailing default</em>, not a claim about
                        any individual in it; the interesting number is precisely how far a person
                        deviates from that default.
                    </p>
                </div>
            </div>

            {/* Applications */}
            <div className="mx-auto mt-16 max-w-5xl px-6 lg:px-8">
                <h2 className="font-display text-2xl font-medium text-stone-900 sm:text-3xl">
                    Where I actually use it
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    {applications.map((a) => (
                        <div key={a.title} className="rounded-2xl border border-stone-200 p-6">
                            <h3 className="font-semibold text-stone-900">{a.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-stone-600">{a.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mx-auto my-20 max-w-3xl px-6 lg:px-8">
                <div className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="font-display text-xl font-medium text-stone-900">
                            Difference is the whole job.
                        </h2>
                        <p className="mt-1 text-sm text-stone-600">
                            I built a product around bridging it.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://tyo.vaivatta.fi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-accent-600 bg-accent-600 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-white transition hover:border-stone-900 hover:bg-stone-900"
                        >
                            Try työ <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <Link
                            to="/work"
                            className="inline-flex items-center px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-900 underline decoration-stone-300 underline-offset-8 transition hover:text-accent-600 hover:decoration-accent-600"
                        >
                            See the work →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SMLCExplanation;
