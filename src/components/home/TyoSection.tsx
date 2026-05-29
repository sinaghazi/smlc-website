const TyoSection = () => {
    return (
        <section id="tyo" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-700">
                    So I built työ
                </p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-stone-900 sm:text-4xl">
                    Most work doesn't break on the work. It breaks in the messages around it.
                </h2>
                <p className="mt-6 text-lg leading-8 text-stone-700">
                    The thing misheard, the email half-read, the request never framed clearly.
                    So I built <span className="font-medium text-stone-900">työ</span> — it pulls
                    every message from customers, colleagues, and partners into one place, drafts a
                    well-framed reply, and waits for a human to approve it before anything goes out.
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-700">
                    Built for Finnish teams and small businesses who'd rather get it right than get
                    it loud. Servers in Finland. Ready in about a minute.
                </p>

                {/* primary funnel: työ. secondary: work with me. */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="https://tyo.vaivatta.fi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                    >
                        Try työ — free to start
                        <span aria-hidden="true">→</span>
                    </a>
                    <a
                        href="https://www.innovategy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold leading-6 text-stone-900 transition hover:text-accent-600"
                    >
                        Or work with me directly <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TyoSection;
