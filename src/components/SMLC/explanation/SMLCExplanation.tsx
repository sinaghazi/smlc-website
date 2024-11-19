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
    Network,
    LineChart,
    ArrowRight, CheckCircle2
} from 'lucide-react';
import { HackathonResults } from '../HackathonResults';

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


const ExplanationCard: React.FC<ExplanationCardProps> = ({ title, description, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
                <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
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
                <div className="p-3 bg-indigo-100 rounded-lg">
                    <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Examples:</h4>
                <ul className="list-disc list-inside text-gray-600">
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
    const [activeTab, setActiveTab] = useState<string>('overview');

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
                <div className="p-3 bg-indigo-100 rounded-lg">
                    <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <span className="text-sm text-indigo-600">{category}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2">
                {examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{example}</span>
                    </li>
                ))}
            </ul>
        </div>
    );


    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Understanding SMLC
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore Sina's Multidimensional Leadership Cube and discover how it can transform your understanding of leadership dynamics.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-lg bg-gray-100 p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-white shadow-sm text-indigo-600'
                                        : 'text-gray-600 hover:text-gray-900'
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {concepts.map((concept, index: number) => (
                                <ExplanationCard key={index} {...concept} />
                            ))}
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Practical Applications
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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

                            {/* Implementation Steps */}
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                                    Implementation Process
                                </h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { icon: Target, title: "Assess", description: "Evaluate current state" },
                                        { icon: Network, title: "Plan", description: "Develop strategy" },
                                        { icon: Users, title: "Implement", description: "Execute changes" },
                                        { icon: LineChart, title: "Monitor", description: "Track progress" }
                                    ].map((step, index) => (
                                        <div key={index} className="text-center">
                                            <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                                                <step.icon className="h-6 w-6 text-indigo-600" />
                                            </div>
                                            <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                                            <p className="text-sm text-gray-600">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Studies */}
                            <div className="mt-12">
                                <HackathonResults/>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center bg-indigo-50 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Ready to Transform Your Leadership?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Start applying SMLC principles in your organization today.
                                </p>
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SMLCExplanation;
