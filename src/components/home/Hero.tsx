import sinaPhoto from '@/assets/sina-photo.jpg';

const Hero = () => {
    return (
        <section className="relative overflow-hidden border-b border-stone-200 bg-stone-50">
            {/* technical column grid — hairlines, not glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,18,0.045)_1px,transparent_1px)] bg-[size:96px_100%]"
            />

            <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-36">
                <div className="lg:col-span-7 lg:pt-4">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
                        Sina Ghazi · Lahti, Finland{' '}
                        <span className="text-accent-600">[ 0.5 · 1.0 · 0.5 ]</span>
                    </p>
                    <h1 className="mt-8 font-display text-5xl font-medium leading-[0.98] tracking-tight text-stone-900 sm:text-7xl">
                        I help people understand each&nbsp;other —
                        <span className="text-accent-600">
                            {' '}
                            and I build the systems that depend on it.
                        </span>
                    </h1>
                    <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
                        Twenty years across banking, payments, and AI taught me the same lesson
                        my move from Iran to Finland did: almost everything that breaks, breaks
                        where understanding breaks.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <a
                            href="#story"
                            className="border border-stone-900 bg-stone-900 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-stone-50 transition hover:border-accent-600 hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                        >
                            Read the story
                        </a>
                        <a
                            href="#tyo"
                            className="font-mono text-xs uppercase tracking-[0.15em] text-stone-900 underline decoration-stone-300 underline-offset-8 transition hover:text-accent-600 hover:decoration-accent-600"
                        >
                            See what I built <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <figure className="relative mx-auto max-w-sm">
                        {/* solid cobalt offset block — flat, no blur */}
                        <div
                            aria-hidden="true"
                            className="absolute -bottom-3 -right-3 -z-10 h-full w-full bg-accent-600"
                        />
                        <img
                            src={sinaPhoto}
                            alt="Sina Ghazi"
                            className="aspect-square w-full border border-stone-900 object-cover grayscale transition duration-500 hover:grayscale-0"
                            width={1182}
                            height={1182}
                        />
                        <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
                            <span>fig. 01 — the person</span>
                            <span>x 0.5 / y 1.0 / z 0.5</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;
