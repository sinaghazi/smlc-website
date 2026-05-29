import { Link } from 'react-router-dom';
import SMLCContainer from '../SMLC/SMLCContainer';

// The "two minds" contrasts — distilled from my "One World, Two Minds" framework.
const contrasts: Array<{ a: string; b: string }> = [
    { a: 'Individual initiative', b: 'Finding your place in the whole' },
    { a: 'Linear & evolutionary', b: 'Circular & repetitive' },
    { a: 'Rational & analytic', b: 'Emotional & holistic' },
    { a: 'Straightforward & direct', b: 'Indirect & circuitous' },
    { a: 'Plan ahead, set goals', b: 'Now is the right time — do it' },
    { a: 'Personal choice', b: 'Communal consensus' },
];

const failureModes = [
    {
        title: "You don't understand",
        body: 'The point never lands — too difficult, too abstract, or buried.',
    },
    {
        title: 'You misunderstand',
        body: 'You grasp some of it, but read it differently than it was meant.',
    },
    {
        title: 'It lands differently',
        body: 'What arrives is not the thing the other person was trying to say.',
    },
];

const IdeaSection = () => {
    return (
        <section id="idea" className="bg-stone-50 py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-700">
                    One world, two minds
                </p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-stone-900 sm:text-4xl">
                    We share one world, but we don't share one mind.
                </h2>
                <p className="mt-6 text-lg leading-8 text-stone-700">
                    People carry different defaults for how to think, decide, and communicate.
                    Neither side is wrong — they're just different operating systems running on
                    the same hardware.
                </p>

                {/* the two-minds contrasts */}
                <dl className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
                    {contrasts.map(({ a, b }) => (
                        <div
                            key={a}
                            className="grid grid-cols-2 items-center gap-4 py-3 text-sm sm:text-base"
                        >
                            <dt className="text-right font-medium text-stone-900">{a}</dt>
                            <dd className="border-l border-stone-200 pl-4 text-stone-600">{b}</dd>
                        </div>
                    ))}
                </dl>

                <p className="mt-12 text-lg leading-8 text-stone-700">
                    When two minds meet, understanding fails in three ways:
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                    {failureModes.map((m, i) => (
                        <div
                            key={m.title}
                            className="rounded-xl border border-stone-200 bg-white p-5"
                        >
                            <div className="font-display text-3xl font-medium text-accent-300">
                                {i + 1}
                            </div>
                            <h3 className="mt-2 font-semibold text-stone-900">{m.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-stone-600">{m.body}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-12 font-display text-2xl font-medium leading-snug text-stone-900 sm:text-3xl">
                    The fix is rarely blunter communication. It's better framing.
                </p>
                <p className="mt-6 text-lg leading-8 text-stone-700">
                    A little more context, in the right order, does more than a sharper opinion.
                    To make that practical, I built a way to map a person, a business, and a
                    society on the same three dimensions — so you can place someone <em>inside</em>{' '}
                    their context and read the fit. I call it the{' '}
                    <span className="font-medium text-stone-900">SMLC</span>. Try a preset, or drop the
                    same person into two different worlds and watch the friction change.
                </p>
            </div>

            {/* the interactive cube — the artifact */}
            <div className="mt-12" id="explore">
                <SMLCContainer />
            </div>

            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <Link
                    to="/explanation"
                    className="text-sm font-semibold leading-6 text-accent-700 transition hover:text-accent-600"
                >
                    Go deeper on the SMLC framework <span aria-hidden="true">→</span>
                </Link>
            </div>
        </section>
    );
};

export default IdeaSection;
