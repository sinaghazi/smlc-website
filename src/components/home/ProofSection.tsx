import { Link } from 'react-router-dom';
import { testimonials, proofStats, domains } from '@/data/testimonials';

const featured = testimonials.filter((t) => t.featured);

const ProofSection = () => {
    return (
        <section className="bg-stone-900 py-24 text-stone-100 sm:py-32">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-300">
                    The proof
                </p>
                <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                    Understanding fast is a skill people pay for.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                    Twenty years in domains where getting it wrong is expensive — banking,
                    payments, brokerage, identity. The trait clients name most often isn't
                    "technical." It's <span className="font-medium text-white">clear communicator</span>.
                </p>

                {/* stats */}
                <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-white/10 py-10 sm:grid-cols-4">
                    {proofStats.map((s) => (
                        <div key={s.label}>
                            <dt className="font-display text-3xl font-medium text-white sm:text-4xl">
                                {s.value}
                            </dt>
                            <dd className="mt-2 text-sm leading-6 text-stone-400">{s.label}</dd>
                        </div>
                    ))}
                </dl>

                {/* domains */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {domains.map((d) => (
                        <span
                            key={d}
                            className="rounded-full border border-white/15 px-3 py-1 text-xs text-stone-300"
                        >
                            {d}
                        </span>
                    ))}
                </div>

                {/* featured testimonials */}
                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {featured.map((t) => (
                        <figure
                            key={t.attribution}
                            className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
                        >
                            <span className="mb-3 inline-flex w-fit rounded-full bg-accent-500/15 px-2.5 py-0.5 text-xs font-medium text-accent-200">
                                {t.proves}
                            </span>
                            <blockquote className="flex-auto text-[15px] leading-7 text-stone-200">
                                "{t.quote}"
                            </blockquote>
                            <figcaption className="mt-4 text-sm text-stone-400">
                                {t.attribution}
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="/work"
                        className="text-sm font-semibold leading-6 text-accent-300 transition hover:text-accent-200"
                    >
                        See selected work & more testimonials <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProofSection;
