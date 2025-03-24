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
            <div className="p-2 bg-kokoomus-lightBlue rounded-lg">
                {icon}
            </div>
            <h3 className="text-lg font-barlowSemi uppercase text-kokoomus-navy">{title}</h3>
        </div>
        <p className="text-gray-600 font-sourceSerif">{description}</p>
    </div>
);

const ChallengePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-kokoomus-beige">
            <ChallengeOverview />

            {/* Challenge Details */}
            <div className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-3xl font-barlow italic uppercase font-bold text-kokoomus-navy sm:text-4xl">
                            Challenge Details
                        </h2>
                    </div>

                    {/* Deliverables */}
                    <div className="grid gap-8 md:grid-cols-3 mb-16">
                        <DeliverableCard
                            title="Prototype"
                            description="Create a functional prototype, wireframe, or detailed model of your solution."
                            icon={<Target className="h-6 w-6 text-kokoomus-blue" />}
                        />
                        <DeliverableCard
                            title="Pitch"
                            description="Prepare a 5-minute presentation summarizing your solution and its impact."
                            icon={<Users className="h-6 w-6 text-kokoomus-blue" />}
                        />
                        <DeliverableCard
                            title="Documentation"
                            description="Provide detailed documentation of your solution and its implementation."
                            icon={<CheckCircle className="h-6 w-6 text-kokoomus-blue" />}
                        />
                    </div>

                    {/* Evaluation Criteria */}
                    <div className="bg-kokoomus-lightBlue rounded-2xl p-8 mb-16">
                        <h3 className="text-2xl font-barlow italic uppercase font-bold text-kokoomus-navy mb-6">Evaluation Criteria</h3>
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
                                    <div className="p-2 bg-white rounded-lg">
                                        <Award className="h-5 w-5 text-kokoomus-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-barlowSemi uppercase text-kokoomus-navy">{criterion.title}</h4>
                                        <p className="text-sm text-gray-600 font-sourceSerif">{criterion.description}</p>
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
