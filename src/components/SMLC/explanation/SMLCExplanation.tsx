import React, { useState } from 'react';

import {
    Book,
    Building2,
    Globe,
    Users,
    Brain,
    Lightbulb,
    LucideIcon,
    Target,
    ArrowRight,
    CheckCircle2,
    FileText,
    BarChart3,  // Add this
    Play       // Add this
} from 'lucide-react';
import { HackathonResults } from '../HackathonResults';
import {Link} from "react-router-dom";

interface ExplanationCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

// Add these new interfaces after your existing interfaces
interface ApplicationCardProps {
    title: string;
    description: string;
    examples: string[];
    icon: LucideIcon;
    category: string;
}

interface Resource {
    title: string;
    author?: string;
    description: string;
    link?: string;
    type: 'book' | 'article' | 'paper';
}

interface ResourceCategory {
    title: string;
    description: string;
    resources: Resource[];
}

const resourceCategories: ResourceCategory[] = [
    {
        title: "Leadership and Systems Thinking",
        description: "Foundation texts on organizational learning and systems thinking",
        resources: [
            {
                title: "The Fifth Discipline",
                author: "Peter Senge",
                description: "Explores systems thinking as a core discipline for organizational success",
                type: "book",
                link: "https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254"
            },
            {
                title: "Team of Teams",
                author: "General Stanley McChrystal",
                description: "Focuses on adaptability and breaking hierarchical silos",
                type: "book",
                link: "https://www.amazon.com/Team-Teams-Rules-Engagement-Complex/dp/1591847486"
            },
            {
                title: "A Leader's Framework for Decision Making",
                author: "David J. Snowden and Mary E. Boone",
                description: "Harvard Business Review article introducing the Cynefin framework",
                type: "article",
                link: "https://hbr.org/2007/11/a-leaders-framework-for-decision-making"
            }
        ]
    },
    {
        title: "Cultural and Emotional Intelligence",
        description: "Resources on cultural dimensions and emotional intelligence in leadership",
        resources: [
            {
                title: "Cultures and Organizations: Software of the Mind",
                author: "Geert Hofstede et al.",
                description: "Foundational text on cultural dimensions and their impact",
                type: "book",
                link: "https://www.amazon.com/Cultures-Organizations-Software-Mind-Intercultural/dp/0071664181"
            },
            {
                title: "Emotional Intelligence 2.0",
                author: "Travis Bradberry and Jean Greaves",
                description: "Actionable insights into emotional intelligence",
                type: "book",
                link: "https://www.amazon.com/Emotional-Intelligence-2-0-Travis-Bradberry/dp/0974320625"
            }
        ]
    }
];

const ResourceCard: React.FC<Resource> = ({ title, author, description, link, type }) => {
    const TypeIcon = type === 'book' ? Book : type === 'article' ? FileText : FileText;

    return (
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-kokoomus-lightBlue rounded">
                    <TypeIcon className="w-5 h-5 text-kokoomus-blue" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-barlowSemi text-kokoomus-navy">{title}</h4>
                    {author && (
                        <p className="text-sm text-kokoomus-blue mt-1 font-sourceSerif">by {author}</p>
                    )}
                    <p className="text-gray-600 mt-2 text-sm font-sourceSerif">{description}</p>
                    {link && (

                       <a href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-barlowSemi uppercase text-kokoomus-blue hover:text-kokoomus-navy mt-4"
                        >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                        </a>
                        )}
                </div>
            </div>
        </div>
    );
};

const ResourceSection: React.FC<{ category: ResourceCategory }> = ({category}) => (
    <div className="mb-12">
        <h3 className="text-2xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-2">{category.title}</h3>
        <p className="text-gray-600 mb-6 font-sourceSerif">{category.description}</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
            ))}
        </div>
    </div>
);

const ExplanationCard: React.FC<ExplanationCardProps> = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-kokoomus-lightBlue rounded-lg">
                <Icon className="w-6 h-6 text-kokoomus-blue" />
            </div>
            <h3 className="text-lg font-barlowSemi uppercase text-kokoomus-navy">{title}</h3>
        </div>
        <p className="text-gray-600 font-sourceSerif">{description}</p>
    </div>
);

interface LevelCardProps {
    title: string;
    description: string;
    examples: string[];
    icon: LucideIcon;
}

const LevelCard: React.FC<LevelCardProps> = ({ title, description, examples, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-kokoomus-lightBlue rounded-lg">
                    <Icon className="w-6 h-6 text-kokoomus-blue" />
                </div>
                <h3 className="text-xl font-barlowSemi uppercase text-kokoomus-navy">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4 font-sourceSerif">{description}</p>
            <div className="space-y-2">
                <h4 className="font-barlowSemi uppercase text-kokoomus-navy">Examples:</h4>
                <ul className="list-disc list-inside text-gray-600 font-sourceSerif">
                    {examples.map((example: string, index: number) => (
                        <li key={index}>{example}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

interface TabData {
    id: string;
    label: string;
    icon: LucideIcon;
}

interface Concept {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface Level {
    title: string;
    description: string;
    examples: string[];
    icon: LucideIcon;
}

export const SMLCExplanation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('applications');

    const tabs: TabData[] = [
        { id: 'overview', label: 'Overview', icon: Book },
        { id: 'levels', label: 'Levels', icon: Building2 },
        { id: 'applications', label: 'Applications', icon: Lightbulb }
    ];

    const concepts: Concept[] = [
        {
            title: "Multidimensional Understanding",
            description: "SMLC uses three dimensions to map leadership characteristics across different levels, allowing for a comprehensive view of leadership styles and organizational dynamics.",
            icon: Brain
        },
        {
            title: "Embracing Differences",
            description: "Rather than trying to change others, SMLC promotes understanding and accepting different perspectives and approaches to leadership.",
            icon: Users
        },
        {
            title: "Adaptive Leadership",
            description: "The framework helps leaders adapt their approach based on context and situation, recognizing that no single style fits all scenarios.",
            icon: Globe
        }
    ];

    const levels: Level[] = [
        {
            title: "Personal Level",
            description: "Focuses on individual leadership characteristics and decision-making styles.",
            examples: [
                "Individual vs. Collective Focus",
                "Emotional vs. Rational Decision-Making",
                "Risk-Taking vs. Risk-Averse"
            ],
            icon: Users
        },
        {
            title: "Organizational Level",
            description: "Examines organizational structure and culture.",
            examples: [
                "Hierarchical vs. Flat Structure",
                "Task-Oriented vs. People-Oriented",
                "Process-Driven vs. Innovation-Driven"
            ],
            icon: Building2
        },
        {
            title: "Societal Level",
            description: "Analyzes broader societal and cultural frameworks.",
            examples: [
                "Collectivism vs. Free Markets",
                "Human-Centric vs. System-Centric",
                "Data-Driven vs. Intuition-Driven"
            ],
            icon: Globe
        }
    ];


    const applications = [
        {
            title: "Leadership Development",
            category: "Individual Growth",
            description: "Transform personal leadership capabilities using SMLC framework.",
            icon: Users,
            examples: [
                "Self-assessment and reflection",
                "Adaptive leadership skills",
                "Cross-cultural communication",
                "Decision-making strategies"
            ]
        },
        {
            title: "Organizational Change",
            category: "Business",
            description: "Apply SMLC principles to drive organizational transformation.",
            icon: Building2,
            examples: [
                "Culture transformation",
                "Team alignment",
                "Change management",
                "Performance optimization"
            ]
        },
        {
            title: "Social Impact",
            category: "Society",
            description: "Leverage SMLC for broader societal change and policy development.",
            icon: Globe,
            examples: [
                "Policy framework development",
                "Social program design",
                "Community engagement",
                "Cross-cultural initiatives"
            ]
        }
    ];

// Add these new components after your existing components
    const ApplicationCard: React.FC<ApplicationCardProps> = ({
                                                                 title,
                                                                 description,
                                                                 examples,
                                                                 icon: Icon,
                                                                 category
                                                             }) => (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-kokoomus-lightBlue rounded-lg">
                    <Icon className="w-6 h-6 text-kokoomus-blue" />
                </div>
                <div>
                    <span className="text-sm text-kokoomus-blue font-barlowSemi uppercase">{category}</span>
                    <h3 className="text-lg font-barlowSemi uppercase text-kokoomus-navy">{title}</h3>
                </div>
            </div>
            <p className="text-gray-600 mb-4 font-sourceSerif">{description}</p>
            <ul className="space-y-2">
                {examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-kokoomus-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-sourceSerif">{example}</span>
                    </li>
                ))}
            </ul>
        </div>
    );


    return (
        <div className="min-h-screen bg-kokoomus-beige py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">
                        Understanding SMLC
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sourceSerif">
                        Explore Sina's Multidimensional Leadership Cube and discover how it can transform your understanding of leadership dynamics.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-lg bg-white p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-barlowSemi uppercase ${
                                    activeTab === tab.id
                                        ? 'bg-kokoomus-lightBlue shadow-sm text-kokoomus-navy'
                                        : 'text-gray-600 hover:text-kokoomus-navy'
                                }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {activeTab === 'overview' && (
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {concepts.map((concept, index: number) => (
                                    <ExplanationCard key={index} {...concept} />
                                ))}
                            </div>

                            {/* Resources Section */}
                            <div className="mt-16">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">
                                        Recommended Resources
                                    </h2>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sourceSerif">
                                        Explore these carefully curated resources to deepen your understanding of leadership dimensions and organizational dynamics.
                                    </p>
                                </div>

                                {resourceCategories.map((category, index) => (
                                    <ResourceSection key={index} category={category} />
                                ))}

                            </div>
                        </div>
                    )}
                    {activeTab === 'levels' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {levels.map((level, index: number) => (
                                <LevelCard key={index} {...level} />
                            ))}
                        </div>
                    )}

                    {activeTab === 'applications' && (
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            {/* Applications Introduction */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">
                                    Practical Applications
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sourceSerif">
                                    Discover how SMLC is being applied across different contexts to transform
                                    leadership and organizational dynamics.
                                </p>
                            </div>

                            {/* Main Applications */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                {applications.map((application, index) => (
                                    <ApplicationCard key={index} {...application} />
                                ))}
                            </div>

                            <div className="text-center bg-gradient-to-r from-kokoomus-lightBlue to-kokoomus-beige rounded-xl p-8 mb-12">
                                <h3 className="text-2xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-8 text-center">
                                    How to apply SMLC in action by team leaders?
                                </h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { icon: Users, title: "Team Formation", description: "Listen to your team members and form a real team" },
                                        { icon: Target, title: "Individual Assessment", description: "Spend quality time and understand every member of your team" },
                                        { icon: BarChart3, title: "Team Analysis", description: "Put the data together and analyze" },
                                        { icon: Play, title: "Action Plan", description: "Get recommendations and take real action!" }
                                    ].map((step, index) => (
                                        <div key={index} className="text-center">
                                            <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                                                <step.icon className="h-6 w-6 text-kokoomus-blue" />
                                            </div>
                                            <h4 className="font-barlowSemi uppercase text-kokoomus-navy mb-2">{step.title}</h4>
                                            <p className="text-sm text-gray-600 font-sourceSerif">{step.description}</p>
                                        </div>
                                    ))}

                                </div>
                                <div className="mt-12">
                                <Link
                                    to="/teams/assessment"
                                    className="text-sm font-barlowSemi uppercase leading-6 text-kokoomus-navy hover:text-kokoomus-blue"
                                >
                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-kokoomus-blue text-white rounded-lg hover:bg-kokoomus-navy transition-colors font-barlowSemi uppercase">
                                        An Example Team Assessment Tool
                                        <ArrowRight className="w-4 h-4" />
                                    </button></Link>
                                </div>
                            </div>

                            {/* Case Studies */}
                            <div className="mt-12">
                                <HackathonResults/>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center bg-kokoomus-lightBlue rounded-xl p-8">
                                <h3 className="text-2xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-4">
                                    Ready to Transform Your Leadership?
                                </h3>
                                <p className="text-gray-600 mb-6 font-sourceSerif">
                                    Organize a Hackaton! and promote multi-dimensional thinking.
                                </p> <Link
                                to="/challenge"
                                className="text-sm font-barlowSemi uppercase leading-6 text-kokoomus-navy hover:text-kokoomus-blue"
                            >
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-kokoomus-blue text-white rounded-lg hover:bg-kokoomus-navy transition-colors font-barlowSemi uppercase">
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </button></Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SMLCExplanation;
