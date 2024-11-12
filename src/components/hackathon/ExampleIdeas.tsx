// src/components/hackathon/ExampleIdeas.tsx
import React, { useState } from 'react';
import {
    Smartphone,
    Users,
    Glasses,
    MessageSquare,
    Building2,
    Bot,
    Search,
    SlidersHorizontal
} from 'lucide-react';



interface Example {
    title: string;
    description: string;
    objective: string;
    category: string;
    icon: React.ReactNode;
}

const examples: Example[] = [
    {
        title: "Interactive Leadership Development App",
        description: "Develop a mobile application that guides leaders through interactive exercises and scenarios to understand and apply the SMLC dimensions in their daily roles.",
        objective: "Enhance self-awareness and adaptability among leaders by providing personalized feedback based on the SMLC framework.",
        category: "Mobile Apps",
        icon: <Smartphone className="h-6 w-6" />
    },
    {
        title: "Team Alignment Tool",
        description: "Create a software solution that allows teams to assess their collective positions on the SMLC axes and visualize their dynamics within the cube.",
        objective: "Identify strengths and gaps within teams to improve collaboration and performance.",
        category: "Team Tools",
        icon: <Users className="h-6 w-6" />
    },
    {
        title: "Virtual Reality Leadership Scenarios",
        description: "Design a VR experience where users navigate complex leadership situations, making decisions based on SMLC principles and seeing the outcomes of their choices.",
        objective: "Provide immersive training that enhances decision-making skills and empathy.",
        category: "Immersive",
        icon: <Glasses className="h-6 w-6" />
    },
    {
        title: "Communication Workshop Platform",
        description: "Organize a workshop that trains participants in adaptive communication techniques using the lenses and languages concepts from SMLC.",
        objective: "Improve interpersonal skills and reduce misunderstandings in diverse teams.",
        category: "Education",
        icon: <MessageSquare className="h-6 w-6" />
    },
    {
        title: "Culture Assessment Platform",
        description: "Build a platform that assesses an organization's culture across the SMLC dimensions and provides actionable insights for leadership development.",
        objective: "Help organizations align their practices with desired cultural attributes.",
        category: "Analytics",
        icon: <Building2 className="h-6 w-6" />
    },
    {
        title: "AI-Powered Leadership Coach",
        description: "Develop an AI chatbot that offers real-time leadership advice based on SMLC principles, assisting leaders in navigating challenges.",
        objective: "Provide accessible mentorship and support for leaders at all levels.",
        category: "AI/ML",
        icon: <Bot className="h-6 w-6" />
    }
];

const categories = [
    "All",
    "Mobile Apps",
    "Team Tools",
    "Immersive",
    "Education",
    "Analytics",
    "AI/ML"
];

export const ExampleIdeas: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExamples = examples.filter(example => {
        const matchesCategory = selectedCategory === "All" || example.category === selectedCategory;
        const matchesSearch = example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            example.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Example Project Ideas
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore these sample ideas or use them as inspiration for your own innovative solution.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="h-5 w-5 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        selectedCategory === category
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search ideas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Example Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredExamples.map((example, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-indigo-100 rounded-lg">
                                        {example.icon}
                                    </div>
                                    <span className="text-sm font-medium text-indigo-600">{example.category}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                                <p className="text-gray-600 mb-4">{example.description}</p>
                                <div className="border-t pt-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Objective:</h4>
                                    <p className="text-sm text-gray-600">{example.objective}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredExamples.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No examples found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
