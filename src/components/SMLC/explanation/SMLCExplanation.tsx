import React, { useState } from 'react';

import {
    Book,
    Building2,
    Globe,
    Users,
    Brain,
    Lightbulb,
    LucideIcon,
    ArrowRight,
    CheckCircle2,
    FileText
} from 'lucide-react';
import { HackathonResults } from '../HackathonResults';
import { SCIENTIFIC_FOUNDATIONS } from '../../../data/scientificFoundations';

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
                <div className="p-2 bg-indigo-50 rounded">
                    <TypeIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                    {author && (
                        <p className="text-sm text-indigo-600 mt-1">by {author}</p>
                    )}
                    <p className="text-gray-600 mt-2 text-sm">{description}</p>
                    {link && (

                       <a href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 mt-4"
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
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
        <p className="text-gray-600 mb-6">{category.description}</p>
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
            title: "Why Different Perspectives Matter",
            description: "Our world faces complex challenges like climate change, inequality, and global cooperation. These problems need leaders who can see situations from many angles and work with people from different backgrounds.",
            icon: Brain
        },
        {
            title: "Building Bridges, Not Walls",
            description: "Instead of trying to make everyone think the same way, great leaders learn to understand and value different approaches. This helps create stronger teams and better solutions.",
            icon: Users
        },
        {
            title: "Leadership That Fits the Situation",
            description: "Just like a doctor uses different treatments for different illnesses, effective leaders adjust their style based on what the situation needs. This flexibility is crucial in our changing world.",
            icon: Globe
        }
    ];

    const levels: Level[] = [
        {
            title: "Personal Leadership",
            description: "How you make decisions and interact with others as an individual leader.",
            examples: [
                "Focus on yourself vs. Focus on others",
                "Think analytically vs. Trust your intuition",
                "Play it safe vs. Take bold action"
            ],
            icon: Users
        },
        {
            title: "Team & Organization Leadership",
            description: "How you lead groups and organizations to work together effectively.",
            examples: [
                "Give direct orders vs. Work together on decisions",
                "Focus on getting tasks done vs. Focus on people's needs",
                "Follow clear rules vs. Stay flexible and adapt"
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
                        About SMLC
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A multi-dimensional approach to leadership that helps navigate complexity and create meaningful change across different contexts.
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
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {concepts.map((concept, index: number) => (
                                    <ExplanationCard key={index} {...concept} />
                                ))}
                            </div>

                            {/* Resources Section */}
                            <div className="mt-16">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Recommended Resources
                                    </h2>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                        <div className="space-y-16">
                            {/* Overview of Three Levels */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {levels.map((level, index: number) => (
                                    <LevelCard key={index} {...level} />
                                ))}
                            </div>
                            
                            {/* Scientific Foundations */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Scientific Foundation
                                    </h2>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                        Each dimension is based on validated psychological and organizational research.
                                    </p>
                                </div>
                                
                                <div className="space-y-12">
                                    {SCIENTIFIC_FOUNDATIONS.map((levelFoundation, levelIndex) => (
                                        <div key={levelIndex} className="border-l-4 border-indigo-200 pl-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {levelFoundation.level}
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                {levelFoundation.description}
                                            </p>
                                            
                                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                                {levelFoundation.dimensions.map((dimension, dimIndex) => (
                                                    <div key={dimIndex} className="bg-gray-50 rounded-lg p-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">
                                                            {dimension.dimension}
                                                        </h4>
                                                        <p className="text-sm text-gray-600 mb-3">
                                                            {dimension.definition}
                                                        </p>
                                                        <div className="space-y-2">
                                                            <div>
                                                                <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
                                                                    Research Base
                                                                </span>
                                                                <ul className="text-xs text-gray-500 mt-1">
                                                                    {dimension.theoreticalBasis.slice(0, 2).map((basis, basisIndex) => (
                                                                        <li key={basisIndex}>• {basis}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Why Scientific Grounding Matters */}
                                <div className="mt-16 bg-blue-50 rounded-lg p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        Why Scientific Grounding Matters
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                                        <div>
                                            <h4 className="font-semibold mb-2">Validity & Reliability</h4>
                                            <p className="text-sm leading-relaxed">
                                                Each dimension is based on extensively validated psychological and organizational 
                                                constructs, ensuring the framework measures what it claims to measure.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Cross-Cultural Applicability</h4>
                                            <p className="text-sm leading-relaxed">
                                                The underlying theories have been tested across diverse cultures and contexts, 
                                                making the framework globally applicable while respecting cultural differences.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Empirical Foundation</h4>
                                            <p className="text-sm leading-relaxed">
                                                Rather than intuitive categories, each dimension emerges from decades of 
                                                empirical research and factor analysis of human behavior patterns.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Practical Utility</h4>
                                            <p className="text-sm leading-relaxed">
                                                The scientific foundation enables practical applications in assessment, 
                                                development, and organizational design with confidence in the results.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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



                            {/* Case Studies */}
                            <div className="mt-12">
                                <HackathonResults/>
                            </div>


                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SMLCExplanation;
