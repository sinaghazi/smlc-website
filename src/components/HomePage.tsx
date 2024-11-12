import { Link } from 'react-router-dom';
import SMCLContainer from "./SMLC/SMLCContainer";
import FeaturesSection from "@/components/FeatureSection.tsx";

const HomePage = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8c42] to-[#ffd700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Sina's Multidimensional Leadership Cube
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Embracing Differences Through Multidimensional Understanding
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <button
                                onClick={() => scrollToSection('explore')}
                                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Explore Now
                            </button>
                            <Link
                                to="/explanation"
                                className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <FeaturesSection />


            {/* CTA Section */}
            <div className="bg-indigo-100">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Ready to explore SMLC?
                        <br/>
                        Start your journey today.
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6">
                        <button
                            onClick={() => scrollToSection('interactive')}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </button>

                        <Link
                            to="/explanation"
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-100" id="interactive">
                <SMCLContainer/>
            </div>
        </div>
    );
};

export default HomePage;
