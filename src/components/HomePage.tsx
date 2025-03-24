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
        <div className="bg-kokoomus-beige">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden">
                {/* Modern background with multiple elements */}
                <div className="absolute inset-0 -z-10">
                    {/* Animated floating circles */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-kokoomus-blue opacity-10 animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/3 w-48 h-48 rounded-full bg-kokoomus-lightBlue opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 left-2/3 w-32 h-32 rounded-full bg-kokoomus-navy opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    
                    {/* Geometric patterns */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1D3461" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                    </div>
                    
                    {/* Diagonal lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(29,52,97,0.05)_25%,rgba(29,52,97,0.05)_50%,transparent_50%,transparent_75%,rgba(29,52,97,0.05)_75%)] bg-[length:24px_24px]"></div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kokoomus-navy/5 via-kokoomus-blue/10 to-kokoomus-lightBlue/5"></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
                        <h1 className="mt-10 text-4xl font-barlow italic uppercase font-bold tracking-tight text-kokoomus-navy sm:text-6xl">
                            Sina's Multidimensional Leadership Cube
                        </h1>
                        <p className="mt-6 text-lg leading-8 font-sourceSerif text-gray-600">
                            Embracing Differences Through Multidimensional Understanding
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <button
                                onClick={() => scrollToSection('explore')}
                                className="rounded-md bg-kokoomus-blue px-3.5 py-2.5 text-sm font-barlowSemi uppercase text-white shadow-sm hover:bg-kokoomus-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kokoomus-blue"
                            >
                                Explore Now
                            </button>
                            <Link
                                to="/explanation"
                                className="text-sm font-barlowSemi uppercase leading-6 text-kokoomus-navy hover:text-kokoomus-blue"
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
            <div className="bg-kokoomus-lightBlue">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <h2 className="text-3xl font-barlow italic uppercase font-bold tracking-tight text-kokoomus-navy sm:text-4xl">
                        Ready to explore SMLC?
                        <br/>
                        Start your journey today.
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6">
                        <button
                            onClick={() => scrollToSection('interactive')}
                            className="rounded-md bg-kokoomus-blue px-3.5 py-2.5 text-sm font-barlowSemi uppercase text-white shadow-sm hover:bg-kokoomus-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kokoomus-blue"
                        >
                            Get started
                        </button>

                        <Link
                            to="/explanation"
                            className="text-sm font-barlowSemi uppercase leading-6 text-kokoomus-navy hover:text-kokoomus-blue"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white" id="interactive">
                <SMCLContainer/>
            </div>
        </div>
    );
};

export default HomePage;
