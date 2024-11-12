import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

export const ChallengeOverview: React.FC = () => (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Hero Section */}
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Synergy Hackathon</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Embracing Multidimensional Leadership with SMLC
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Design innovative solutions using the SMLC framework to address real-world leadership challenges.
                </p>
            </div>

            {/* Objectives */}
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            <Target className="h-5 w-5 flex-none text-indigo-600" />
                            Apply SMLC Framework
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">Use SMLC principles to inform your innovative solution.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            <Users className="h-5 w-5 flex-none text-indigo-600" />
                            Promote Inclusivity
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">Foster acceptance and celebrate differences within teams.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            <Lightbulb className="h-5 w-5 flex-none text-indigo-600" />
                            Innovate Thoughtfully
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">Create practical, implementable solutions for real-world impact.</p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
);

