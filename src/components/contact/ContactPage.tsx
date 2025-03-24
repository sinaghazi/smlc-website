import React from 'react';
import {Mail, Phone, Globe, Linkedin, Instagram, ArrowUpRight, Calendar} from 'lucide-react';
import sinaImage from '@/assets/sina-photo.jpg';
import {Link} from "react-router-dom"; // Make sure to add an image

const ContactPage: React.FC = () => {
    const contactInfo = [
        {
            icon: Calendar,
            label: 'Book a meeting',
            value: 'Select data & time',
            href: 'https://calendly.com/sinaghazi'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@innovategy.fi',
            href: 'mailto:info@innovategy.fi'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+358 41 317 5455',
            href: 'tel:+358413175455'
        },
        {
            icon: Globe,
            label: 'Website',
            value: 'innovategy.fi',
            href: 'https://innovategy.fi'
        }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/innovategy/'
        },
        {
            icon: Instagram,
            label: 'Instagram',
            href: 'https://www.instagram.com/innovategy/'
        }
    ];

    return (
        <div className="min-h-screen bg-kokoomus-beige py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sourceSerif">
                        For getting started on a transformative journey!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - About */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <div className="flex items-center gap-6 mb-6">
                                    <img
                                        src={sinaImage}
                                        alt="Sina Ghazi"
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="text-2xl font-barlow italic uppercase font-bold text-kokoomus-navy">Sina Ghazi</h2>
                                        <p className="text-kokoomus-blue font-barlowSemi uppercase">Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 font-sourceSerif">
                                    A visionary leader and the creator of SMLC (Sina's Multidimensional Leadership Cube),
                                    Sina brings a unique perspective to leadership and organizational development. With extensive
                                    experience in cross-cultural environments, he developed SMLC to help leaders navigate the
                                    complexities of modern organizations.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">About INNOVATEGY</h3>
                                <p className="text-gray-600 mb-6 font-sourceSerif">
                                    <Link target="_blank" to={"https://www.asiakastieto.fi/yritykset/fi/innovategy-oy/32812652/taloustiedot"} className="text-kokoomus-blue hover:text-kokoomus-navy">Innovategy Oy (Y-tunnus: 3281265-2)</Link> is a company from Lahti, Finland and specializes in leadership development and
                                    meaningful organizational transformation. We help organizations embrace differences and build more
                                    inclusive teams with a special focus on preparing leaders for ethical innovation post <Link target="_blank" to={"https://en.wikipedia.org/wiki/Artificial_general_intelligence"} className="text-kokoomus-blue hover:text-kokoomus-navy">Artificial general intelligence (AGI)</Link> era.
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-gray-600 hover:text-kokoomus-blue transition-colors"
                                        >
                                            <link.icon className="h-5 w-5" />
                                            <span className="font-barlowSemi uppercase">{link.label}</span>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info) => (
                                        <a
                                            key={info.label}
                                            href={info.href}
                                            className="flex items-center gap-4 text-gray-600 hover:text-kokoomus-blue transition-colors"
                                        >
                                            <div className="w-12 h-12 bg-kokoomus-lightBlue rounded-full flex items-center justify-center">
                                                <info.icon className="h-6 w-6 text-kokoomus-blue" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-barlowSemi uppercase text-gray-500">{info.label}</p>
                                                <p className="font-sourceSerif">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-r from-kokoomus-lightBlue to-kokoomus-beige rounded-2xl p-8">
                    <h3 className="text-2xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">
                        Ready to Transform Your Leadership?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-sourceSerif">
                        Get in touch to learn how INNOVATEGY can help your organization embrace differences
                        and achieve better results through multidimensional understanding.
                    </p>
                    <a
                        href="https://calendly.com/sinaghazi"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-kokoomus-blue text-white rounded-lg hover:bg-kokoomus-navy transition-colors font-barlowSemi uppercase"
                    >
                        Book a meeting
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
