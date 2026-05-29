import sinaPhoto from '@/assets/sina-photo.jpg';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-stone-50">
            {/* soft warm wash, low-key — quiet, not loud */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 right-0 -z-10 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-accent-100 to-transparent opacity-60 blur-3xl"
            />

            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-40">
                <div className="lg:col-span-7 lg:pt-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-700">
                        Sina Ghazi · Lahti, Finland
                    </p>
                    <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-stone-900 sm:text-6xl">
                        I help people understand each other —
                        <span className="text-accent-600"> and I build the systems that depend on it.</span>
                    </h1>
                    <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
                        Twenty years across banking, payments, and AI taught me the same lesson
                        my move from Iran to Finland did: almost everything that breaks, breaks
                        where understanding breaks.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <a
                            href="#story"
                            className="rounded-md bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                        >
                            Read the story
                        </a>
                        <a
                            href="#tyo"
                            className="text-sm font-semibold leading-6 text-stone-900 transition hover:text-accent-600"
                        >
                            See what I built <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative mx-auto max-w-sm">
                        <div
                            aria-hidden="true"
                            className="absolute -inset-3 -z-10 rounded-2xl bg-accent-100/70"
                        />
                        <img
                            src={sinaPhoto}
                            alt="Sina Ghazi"
                            className="aspect-square w-full rounded-2xl object-cover shadow-xl ring-1 ring-stone-900/5"
                            width={1182}
                            height={1182}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
