import React from 'react';
import { Mail, Phone, Globe, Linkedin, ArrowUpRight, Calendar } from 'lucide-react';
import sinaImage from '@/assets/sina-photo.jpg';
import Seo from '../seo/Seo';

const ContactPage: React.FC = () => {
    const contactInfo = [
        {
            icon: Calendar,
            label: 'Book a meeting',
            value: 'Pick a date & time',
            href: 'https://calendly.com/sinaghazi/online-meeting',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'sina@innovategy.fi',
            href: 'mailto:sina@innovategy.fi',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+358 41 317 5455',
            href: 'tel:+358413175455',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'in/sinaghazi',
            href: 'https://www.linkedin.com/in/sinaghazi/',
        },
    ];

    return (
        <div className="bg-white">
            <Seo
                title="Contact — let's figure out what's worth building | Sina Ghazi"
                description="Get in touch with Sina Ghazi, AI systems architect in Lahti, Finland. Try työ, scope a project, or book a meeting — I read every message myself and usually reply within a few hours."
                path="/contact"
            />
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 lg:px-8">
                {/* Hero */}
                <div className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
                        Get in touch
                    </p>
                    <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
                        Let's figure out what's worth building.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-stone-700">
                        Whether you want to try työ, scope a project, or just compare notes on
                        understanding difference — I read every message myself, and I usually reply
                        within a few hours.
                    </p>
                </div>

                <div className="mt-16 grid gap-12 lg:grid-cols-2">
                    {/* Left — who I am + the businesses */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
                            <div className="flex items-center gap-5">
                                <img
                                    src={sinaImage}
                                    alt="Sina Ghazi"
                                    className="h-20 w-20 rounded-full object-cover ring-1 ring-stone-900/5"
                                />
                                <div>
                                    <h2 className="font-display text-2xl font-medium text-stone-900">
                                        Sina Ghazi
                                    </h2>
                                    <p className="font-medium text-accent-700">
                                        AI systems architect · Lahti, Finland
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-stone-600">
                                I help founders and teams understand what's actually worth building —
                                and then build it. Twenty years across banking, payments, and AI,
                                delivered independently with a 100% track record. Most of that work
                                now runs through two things.
                            </p>
                        </div>

                        <a
                            href="https://tyo.vaivatta.fi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-2xl border border-stone-200 p-6 transition hover:border-accent-300 hover:bg-accent-50/40"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-display text-xl font-medium text-stone-900">työ</h3>
                                <ArrowUpRight className="h-5 w-5 text-stone-400 transition group-hover:text-accent-600" />
                            </div>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                An AI communication hub for Finnish teams — every message in one place,
                                a framed reply drafted, a human always approving. Free to start.
                            </p>
                        </a>

                        <a
                            href="https://www.innovategy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-2xl border border-stone-200 p-6 transition hover:border-accent-300 hover:bg-accent-50/40"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-display text-xl font-medium text-stone-900">
                                    Innovategy Oy
                                </h3>
                                <ArrowUpRight className="h-5 w-5 text-stone-400 transition group-hover:text-accent-600" />
                            </div>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                System clarity and direction. I step into unclear situations to figure
                                out what matters, what to stop, and how the pieces fit — often in a
                                3–5 day Clarity Sprint.
                            </p>
                        </a>
                    </div>

                    {/* Right — contact methods */}
                    <div>
                        <div className="rounded-2xl border border-stone-200 p-8">
                            <h3 className="font-display text-xl font-medium text-stone-900">
                                Reach me directly
                            </h3>
                            <div className="mt-6 space-y-4">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-4 rounded-xl p-3 text-stone-700 transition hover:bg-stone-50"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                                            <info.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-stone-500">{info.label}</p>
                                            <p className="font-medium text-stone-900">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                                <a
                                    href="https://www.innovategy.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-xl p-3 text-stone-700 transition hover:bg-stone-50"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                                        <Globe className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-stone-500">Website</p>
                                        <p className="font-medium text-stone-900">innovategy.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl bg-stone-950 p-8 text-stone-100">
                            <h3 className="font-display text-xl font-medium">
                                Prefer to just try the product?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-stone-300">
                                työ is ready in about a minute, with a free tier and no installation.
                            </p>
                            <a
                                href="https://tyo.vaivatta.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-2 bg-signal-400 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-950 transition hover:bg-signal-300"
                            >
                                Try työ <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
