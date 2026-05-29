import { Link } from 'react-router-dom';

const StorySection = () => {
    return (
        <section id="story" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-700">
                    Two countries, two minds
                </p>

                <div className="mt-8 space-y-6 text-lg leading-8 text-stone-700">
                    <p className="font-display text-2xl font-medium leading-snug text-stone-900 sm:text-3xl">
                        In Iran, you survive through relationships and improvisation.
                        In Finland, you build through structure and patience.
                    </p>
                    <p>
                        I grew up where a huge part of being an entrepreneur was working around
                        obstacles — sanctions, a currency that lost value fast, opaque rules. You
                        become resourceful quickly, but most of that resourcefulness goes into just
                        keeping things running.
                    </p>
                    <p>
                        Finland was a different operating system. The mechanics just work — you
                        register a company in a day, payments clear, taxes are predictable — so the
                        same energy can go straight into the actual work. But the human side runs the
                        other way:{' '}
                        <span className="font-medium text-stone-900">
                            quiet competence carries more weight than confidence.
                        </span>{' '}
                        Selling yourself loudly doesn't land here; sometimes it actively hurts you.
                    </p>
                    <p>
                        I had to unlearn a whole way of being seen. And it turned out to suit me.
                        I care about craft, about being patient, about letting the work speak. Clients
                        come back because of what I delivered — not because I performed well in a
                        meeting. There's a kind of dignity in that.
                    </p>
                    <p>
                        Crossing between those two minds — learning to read what a different culture
                        actually means, not just what it says — became the thing I'm best at. It's the
                        same skill whether the gap is between two countries, two teams, or a founder
                        and the system they're trying to build.
                    </p>
                </div>

                <div className="mt-10">
                    <Link
                        to="/story"
                        className="text-sm font-semibold leading-6 text-accent-700 transition hover:text-accent-600"
                    >
                        Read the full story <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
