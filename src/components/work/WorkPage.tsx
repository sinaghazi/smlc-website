import { testimonials, proofStats, domains } from '@/data/testimonials';

interface Engagement {
    name: string;
    kind: string;
    body: string;
    href?: string;
}

const engagements: Engagement[] = [
    {
        name: 'työ',
        kind: 'Product · founder',
        body: 'AI communication hub: pulls messages from customers, colleagues, and partners into one place, drafts a framed reply, and keeps a human in the loop. Built in Finland.',
        href: 'https://tyo.vaivatta.fi',
    },
    {
        name: 'TELOS',
        kind: 'AI-native platform',
        body: 'Structured synthesis, decision support, and report generation — with reliability, observability, and controlled AI behavior as first-class concerns.',
    },
    {
        name: 'referensipalvelu.fi',
        kind: 'B2B platform',
        body: 'Verification and reference-intelligence platform balancing automation with traceability and data-quality constraints.',
    },
    {
        name: 'Brontie.ie',
        kind: 'Payments',
        body: 'End-to-end design and delivery of a customer-facing digital payment platform, including AI-assisted development workflows and production stabilization.',
    },
    {
        name: 'Boursam (NICI Brokerage)',
        kind: 'Regulated brokerage',
        body: 'Production-grade online stock-brokerage platform — Java/Spring Boot microservices, deterministic transaction flows, OAuth2 identity, ETL data warehouse, strong auditability.',
    },
    {
        name: '3S Swiss Solar Solutions',
        kind: 'Transformation & PMO',
        body: 'Set up and aligned the PMO, IT department, and software/data teams; led delivery of transformation and growth programs.',
    },
];

const WorkPage = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 lg:px-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-700">
                    Selected work
                </p>
                <h1 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
                    Systems where getting it wrong is expensive.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                    A selection from 32 engagements as an independent architect, at a 100% job
                    success score — banking, payments, brokerage, identity, and AI.
                </p>

                {/* stats */}
                <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-stone-200 py-10 sm:grid-cols-4">
                    {proofStats.map((s) => (
                        <div key={s.label}>
                            <dt className="font-display text-3xl font-medium text-stone-900 sm:text-4xl">
                                {s.value}
                            </dt>
                            <dd className="mt-2 text-sm leading-6 text-stone-500">{s.label}</dd>
                        </div>
                    ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                    {domains.map((d) => (
                        <span
                            key={d}
                            className="rounded-full border border-stone-300 px-3 py-1 text-xs text-stone-600"
                        >
                            {d}
                        </span>
                    ))}
                </div>

                {/* engagements */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2">
                    {engagements.map((e) => (
                        <div
                            key={e.name}
                            className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-6"
                        >
                            <div className="text-xs font-medium uppercase tracking-wider text-accent-700">
                                {e.kind}
                            </div>
                            <h2 className="mt-2 font-display text-xl font-medium text-stone-900">
                                {e.href ? (
                                    <a
                                        href={e.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition hover:text-accent-600"
                                    >
                                        {e.name} <span aria-hidden="true">↗</span>
                                    </a>
                                ) : (
                                    e.name
                                )}
                            </h2>
                            <p className="mt-3 flex-auto text-stone-600">{e.body}</p>
                        </div>
                    ))}
                </div>

                {/* full testimonial wall */}
                <div className="mt-20">
                    <h2 className="font-display text-2xl font-medium text-stone-900">
                        What clients say
                    </h2>
                    <p className="mt-2 text-stone-600">
                        Verbatim from Upwork, where I'm Expert-Vetted with 100% job success.
                    </p>
                    <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
                        {testimonials.map((t) => (
                            <figure
                                key={t.attribution + t.quote.slice(0, 12)}
                                className="break-inside-avoid rounded-2xl border border-stone-200 p-6"
                            >
                                <blockquote className="text-[15px] leading-7 text-stone-700">
                                    "{t.quote}"
                                </blockquote>
                                <figcaption className="mt-4 text-sm text-stone-500">
                                    {t.attribution}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3">
                    <a
                        href="https://www.innovategy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500"
                    >
                        Work with me <span aria-hidden="true">→</span>
                    </a>
                    <a
                        href="https://tyo.vaivatta.fi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-stone-900 transition hover:text-accent-600"
                    >
                        Try työ <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
