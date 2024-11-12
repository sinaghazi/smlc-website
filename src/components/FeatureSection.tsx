import { Brain, Users, Lightbulb, ArrowRight, Languages } from 'lucide-react';

const features = [
    {
        name: 'Multidimensional Analysis',
        description: 'Understand leadership dynamics across personal, organizational, and societal levels through a comprehensive three-dimensional framework.',
        icon: Brain,
    },
    {
        name: 'Cognitive Flexibility',
        description: 'Develop the ability to see situations from multiple perspectives and adapt your leadership approach accordingly.',
        icon: Brain,
    },
    {
        name: 'Cultural Intelligence',
        description: 'Bridge differences and foster understanding across diverse teams and organizational cultures.',
        icon: Languages,
    },
    {
        name: 'Inclusive Leadership',
        description: 'Create environments where differences are valued and everyone can contribute their unique perspectives.',
        icon: Users,
    },
    {
        name: 'Adaptive Communication',
        description: 'Master the art of adjusting your communication style to effectively connect with different audiences.',
        icon: Lightbulb,
    },
];

const FeaturesSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32" id="explore">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        Comprehensive Framework
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to understand multidimensional leadership
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        SMLC provides a structured approach to understanding and implementing effective leadership across different contexts and cultures.
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
