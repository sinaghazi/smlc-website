import { Brain, Users, Lightbulb, ArrowRight, Languages } from 'lucide-react';

const features = [
    {
        name: 'See the Whole Picture',
        description: 'Learn to understand how leadership works at different levels - from personal relationships to global challenges - so you can make better decisions that help everyone.',
        icon: Brain,
    },
    {
        name: 'Think Flexibly',
        description: 'Develop the skill to see problems from different angles and change your approach when needed - just like great leaders do during crises.',
        icon: Brain,
    },
    {
        name: 'Connect Across Cultures',
        description: 'Learn to work effectively with people from different backgrounds and build trust across cultural differences - essential for solving global problems.',
        icon: Languages,
    },
    {
        name: 'Include Everyone',
        description: 'Create spaces where everyone feels valued and can contribute their unique ideas - because diverse teams solve problems better.',
        icon: Users,
    },
    {
        name: 'Communicate for Impact',
        description: 'Learn to adjust how you communicate so your message connects with different people and inspires positive action.',
        icon: Lightbulb,
    },
];

const FeaturesSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32" id="explore">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        Leadership Skills That Matter
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Build the skills our world needs right now
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our approach is based on decades of scientific research and helps leaders tackle complex challenges like climate change, social inequality, and global cooperation.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-16 flex justify-center">
                        <a
                            href="#interactive"
                            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Try Interactive Demo
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
