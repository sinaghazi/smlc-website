import React from 'react';
import { ChallengeOverview } from './ChallengeOverview';
import { ExampleIdeas } from './ExampleIdeas';
import { Award, CheckCircle, Target, Users } from "lucide-react";

const DeliverableCard: React.FC<{
    title: string;
    description: string;
    icon: React.ReactNode;
}> = ({ title, description, icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ChallengePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <ChallengeOverview />

            {/* Challenge Details */}
            <div className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Challenge Details
                        </h2>
                    </div>

                    {/* Deliverables */}
                    <div className="grid gap-8 md:grid-cols-3 mb-16">
                        <DeliverableCard
                            title="Prototype"
                            description="Create a functional prototype, wireframe, or detailed model of your solution."
                            icon={<Target className="h-6 w-6 text-indigo-600" />}
                        />
                        <DeliverableCard
                            title="Pitch"
                            description="Prepare a 5-minute presentation summarizing your solution and its impact."
                            icon={<Users className="h-6 w-6 text-indigo-600" />}
                        />
                        <DeliverableCard
                            title="Documentation"
                            description="Provide detailed documentation of your solution and its implementation."
                            icon={<CheckCircle className="h-6 w-6 text-indigo-600" />}
                        />
                    </div>

                    {/* Evaluation Criteria */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Evaluation Criteria</h3>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "SMLC Integration",
                                    description: "Clear use of SMLC framework principles"
                                },
                                {
                                    title: "Innovation",
                                    description: "Originality and creativity of solution"
                                },
                                {
                                    title: "Impact",
                                    description: "Potential for real-world application"
                                }
                            ].map((criterion, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="p-2 bg-indigo-100 rounded-lg">
                                        <Award className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{criterion.title}</h4>
                                        <p className="text-sm text-gray-600">{criterion.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Example Ideas Section */}
            <ExampleIdeas />
        </div>
    );
};

export default ChallengePage;
