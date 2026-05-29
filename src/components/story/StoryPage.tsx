import { Link } from 'react-router-dom';

interface Milestone {
    period: string;
    role: string;
    org: string;
    note: string;
}

// Distilled from my career history — the throughline is correctness-sensitive systems.
const milestones: Milestone[] = [
    {
        period: '2019 — now',
        role: 'Founder & Principal Architect',
        org: 'Innovategy Oy (Vaivatta Digipalvelut)',
        note: 'Independent architecture practice for founders across Finland, the US, and Europe. AI-assisted delivery with guardrails, evaluation loops, and deterministic workflows. Builder of työ.',
    },
    {
        period: '2022 — 2026',
        role: 'Board Member, Director of Finance',
        org: 'PMI Finland Chapter',
        note: 'Advancing technology use and agile practice through governance and mentorship.',
    },
    {
        period: '2016 — 2018',
        role: 'Chief Information Officer',
        org: 'NICI Brokerage',
        note: 'Owned the architecture and delivery of Boursam, a regulated online stock-brokerage platform — deterministic transaction flows, OAuth2 identity, strong auditability.',
    },
    {
        period: '2015 — 2016',
        role: 'Manager, Customer-Centric Solutions',
        org: 'DOTIN (FANAP Holding)',
        note: 'Led an API banking platform and customer-data analytics for credit scoring, loyalty, and KYC across nine financial institutions.',
    },
    {
        period: '2008 — 2014',
        role: 'Architect & Technical Director',
        org: 'Jacquard Systems · Valoran · contract',
        note: 'Core banking (Temenos T24), a match-on-card biometric payment reference (EMV, EFT switch), payment reconciliation for Visa member-bank flows, and a 20-person studio delivering 50+ projects.',
    },
];

const StoryPage = () => {
    return (
        <div className="bg-white">
            <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28 lg:px-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-700">
                    The story
                </p>
                <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
                    From Iran to Finland — two ways of building a life
                </h1>

                <div className="mt-10 space-y-6 text-lg leading-8 text-stone-700">
                    <h2 className="font-display text-2xl font-medium text-stone-900">
                        What I spend my energy on
                    </h2>
                    <p>
                        The biggest difference is where the energy goes. In Iran, a huge part of being
                        an entrepreneur is working around obstacles — war, sanctions, a currency that
                        loses value fast, informal networks, opaque rules. You become resourceful very
                        quickly, but a lot of that resourcefulness goes into just keeping things running.
                    </p>
                    <p>
                        In Finland, the system actually works. You register your company in a day, you
                        have a real bank account, payments clear, taxes are predictable. That same energy
                        can go straight into the actual work — building something, serving clients. This
                        shift alone changes how you think about your time, and even about ambition.
                    </p>

                    <h2 className="pt-4 font-display text-2xl font-medium text-stone-900">
                        Trust is built slowly
                    </h2>
                    <p>
                        The main thing that stands out for me is that trust here is built slowly, through
                        what you do, not what you claim. In many places I've lived, you have to advocate
                        hard for yourself, push, talk yourself up. Here, that works against you.{' '}
                        <span className="font-medium text-stone-900">
                            Quiet competence carries more weight than confidence.
                        </span>
                    </p>
                    <p>
                        The mechanics are easier — setting up legally, banking, working across borders,
                        getting paid. No fixers, no one you need to know. The harder side is human.
                        Networks form slowly. Selling yourself loudly doesn't land, and sometimes it
                        actively hurts you. If you come from a culture where you have to constantly assert
                        your value, you have to unlearn that — and that's not a small thing.
                    </p>

                    <h2 className="pt-4 font-display text-2xl font-medium text-stone-900">
                        Why it suits me
                    </h2>
                    <p>
                        For me personally, it suits how I want to work. I care a lot about doing things
                        well — about craft, about being patient, about letting the work speak. In some
                        cultures that approach is almost invisible; you have to be loud to be seen. Here it
                        works. Clients come back because of what I delivered, not because I performed well
                        in a meeting. There's a kind of dignity in that.
                    </p>
                    <p>
                        If I had to compress all of it into one thing: in Iran, you survive through
                        relationships and improvisation. In Finland, you build through structure and
                        patience. You're treated as a citizen — by the tax office, by the banks, by other
                        businesses — not as someone who has to prove they deserve to be in the room.
                        Finland also forces you to clarify what you actually offer, because no one will
                        overlook a vague pitch out of politeness. It makes you sharper, even if the pace is
                        slower.
                    </p>
                </div>

                {/* career timeline */}
                <div className="mt-16 border-t border-stone-200 pt-12">
                    <h2 className="font-display text-2xl font-medium text-stone-900">
                        Twenty years, mostly where correctness matters
                    </h2>
                    <ol className="mt-8 space-y-8">
                        {milestones.map((m) => (
                            <li key={m.period} className="grid gap-2 sm:grid-cols-4 sm:gap-6">
                                <div className="text-sm font-medium text-accent-700 sm:text-right">
                                    {m.period}
                                </div>
                                <div className="sm:col-span-3">
                                    <div className="font-semibold text-stone-900">{m.role}</div>
                                    <div className="text-sm text-stone-500">{m.org}</div>
                                    <p className="mt-1 text-stone-600">{m.note}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3">
                    <Link
                        to="/work"
                        className="text-sm font-semibold text-accent-700 transition hover:text-accent-600"
                    >
                        See the work <span aria-hidden="true">→</span>
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/sinaghazi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-stone-700 transition hover:text-accent-600"
                    >
                        Connect on LinkedIn <span aria-hidden="true">→</span>
                    </a>
                </div>
            </article>
        </div>
    );
};

export default StoryPage;
