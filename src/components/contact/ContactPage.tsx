import React from 'react';
import { Calendar } from 'lucide-react';
import sinaImage from '@/assets/sina-photo.jpg';

const ContactPage: React.FC = () => {

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Speaking & Advisory
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Book a meeting to discuss speaking engagements or advisory services.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-center gap-6 mb-8">
                                <img
                                    src={sinaImage}
                                    alt="Sina Ghazi"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Sina Ghazi</h2>
                                    <p className="text-indigo-600 font-medium">Leadership Development & Organizational Advisory</p>
                                </div>
                            </div>
                            
                            <div className="mb-8">
                                <p className="text-gray-600 mb-4">
                                    Available for speaking engagements and advisory services focused on multi-dimensional 
                                    leadership development, organizational transformation, and cross-cultural collaboration.
                                </p>
                                <p className="text-gray-600">
                                    Topics include leadership complexity, cultural intelligence, organizational dynamics, 
                                    and science-based approaches to leadership development.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <a
                                    href="https://calendly.com/sinaghazi/online-meeting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
                                >
                                    <Calendar className="h-5 w-5" />
                                    Book a Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactPage;
