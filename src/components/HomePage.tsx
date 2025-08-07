import SMCLContainer from "./SMLC/SMLCContainer";

const HomePage = () => {
    return (
        <div className="bg-white">
            {/* Interactive Cube - Main Feature */}
            <div className="min-h-screen bg-gray-100">
                <SMCLContainer/>
            </div>
            
            {/* Simple Explainers */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-16 lg:gap-24">
                            
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                                    Three Dimensions of Leadership
                                </h2>
                                <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                                    Leadership operates across personal, organizational, and societal levels. 
                                    Understanding these dimensions helps leaders navigate complexity and create meaningful change.
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal</h3>
                                    <p className="text-gray-600">
                                        Individual values, beliefs, and behaviors that shape how you lead.
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Organizational</h3>
                                    <p className="text-gray-600">
                                        Systems, structures, and cultures within teams and organizations.
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Societal</h3>
                                    <p className="text-gray-600">
                                        Broader social, cultural, and global contexts that influence leadership.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                                    How It Works
                                </h2>
                                <div className="space-y-6 max-w-2xl mx-auto">
                                    <p className="text-gray-600">
                                        Interact with the cube above to explore different leadership positions and perspectives.
                                    </p>
                                    <p className="text-gray-600">
                                        Each position represents a unique combination of approaches across the three dimensions.
                                    </p>
                                    <p className="text-gray-600">
                                        Compare different styles and discover insights for your leadership journey.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
