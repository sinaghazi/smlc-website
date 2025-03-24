import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import sinaElectionPhoto from '../../assets/sinaghazi-election-photo.jpg';

// Define the Q&A item type
interface QAItem {
    id: string;
    category: string;
    question: string;
    answer: string;
    isOpen: boolean;
}

const CampaignPage: React.FC = () => {
    // Initial Q&A data
    const [qaItems, setQaItems] = useState<QAItem[]>([
        {
            id: 'tech-1',
            category: 'Technology',
            question: 'How will LahenJutut improve citizen engagement?',
            answer: 'LahenJutut enables anonymous recording of suggestions and issues, uses AI-driven transcription and topic identification to ensure each voice impacts city decisions transparently and effectively.',
            isOpen: false
        },
        {
            id: 'tech-2',
            category: 'Technology',
            question: 'What languages does LahenJutut support?',
            answer: 'LahenJutut supports Finnish, English, Russian, Arabic, and several other languages commonly spoken in Lahti, ensuring all citizens can participate regardless of their language background.',
            isOpen: false
        },
        {
            id: 'ent-1',
            category: 'Entrepreneurship',
            question: 'What initiatives are planned to boost local entrepreneurship?',
            answer: 'Developing practical training programs in partnership with local educational institutions, fostering global competitiveness and innovation-driven economic growth.',
            isOpen: false
        },
        {
            id: 'ent-2',
            category: 'Entrepreneurship',
            question: 'How will you support small businesses in Lahti?',
            answer: 'By creating a collaborative network connecting established businesses with startups, providing mentorship opportunities, and developing streamlined processes for permits and city services.',
            isOpen: false
        },
        {
            id: 'int-1',
            category: 'Integration',
            question: 'How will you enhance integration for new migrants?',
            answer: 'Establishing a specialized center offering tailored language education, skills validation, and personalized career coaching for faster, effective integration.',
            isOpen: false
        },
        {
            id: 'int-2',
            category: 'Integration',
            question: 'What role do you see for international talent in Lahti\'s future?',
            answer: 'International talent is crucial for Lahti\'s growth. We\'ll create pathways to retain international students, attract skilled professionals, and help them build meaningful careers and lives in our community.',
            isOpen: false
        },
        {
            id: 'gen-1',
            category: 'Campaign General',
            question: 'How does Sina Ghazi\'s international experience benefit Lahti?',
            answer: 'Sina\'s global perspective facilitates innovative solutions, attracting international talent and ideas, enriching Lahti\'s economic and social fabric.',
            isOpen: false
        },
        {
            id: 'gen-2',
            category: 'Campaign General',
            question: 'What are your priorities for youth and student engagement?',
            answer: 'Creating meaningful pathways for youth participation in city planning, supporting student entrepreneurship, and ensuring educational opportunities align with future career prospects in the region.',
            isOpen: false
        }
    ]);

    // Toggle Q&A item open/closed state
    const toggleQA = (id: string) => {
        setQaItems(qaItems.map(item => 
            item.id === id ? { ...item, isOpen: !item.isOpen } : item
        ));
    };

    // Group Q&A items by category
    const groupedQA = qaItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, QAItem[]>);

    return (
        <div className="bg-kokoomus-beige min-h-screen">
            {/* Hero Section with Campaign Video */}
            <section className="relative bg-kokoomus-navy text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h1 className="font-barlow italic uppercase text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
                            SINA GHAZI
                        </h1>
                        <h2 className="font-sourceSerif text-xl md:text-2xl lg:text-3xl mb-6">
                            Lahti City Council Candidate 2025
                        </h2>
                        <div className="inline-block bg-kokoomus-blue px-8 py-3 rounded-lg shadow-lg">
                            <span className="font-barlowSemi uppercase text-3xl md:text-4xl tracking-wide">
                                CANDIDATE 137
                            </span>
                        </div>
                    </div>

                    {/* Candidate Photo and Campaign Video */}
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        {/* Official Photo */}
                        <div className="flex justify-center">
                            <div className="rounded-lg overflow-hidden shadow-xl bg-white p-2 max-w-md">
                                <img 
                                    src={sinaElectionPhoto} 
                                    alt="Sina Ghazi - Candidate for Lahti City Council" 
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Campaign Video */}
                        <div>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                                <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/m3JV8LMH9vw?cc_load_policy=1&cc_lang_pref=en" 
                                    title="Sina Ghazi – Candidate 137 Introduction and Vision" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-center mt-4 font-sourceSerif">
                                Learn about Sina Ghazi, his background, and key promises for enhancing innovation, entrepreneurship, and citizen responsiveness in Lahti.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaign Promises Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold text-kokoomus-navy text-center mb-12">
                        KEY CAMPAIGN PROMISES
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Promise 1 */}
                        <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md">
                            <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy mb-4">
                                TECHNOLOGY FOR CITIZEN VISIBILITY
                            </h3>
                            <div className="font-sourceSerif">
                                <p className="mb-3">
                                    Sina's LahenJutut app gives every citizen a voice in city development.
                                </p>
                                <p className="mb-3">
                                    The app supports multiple languages including Finnish, English, Russian, and Arabic.
                                </p>
                                <p>
                                    Complete user anonymity ensures everyone can share their ideas freely.
                                </p>
                            </div>
                        </div>

                        {/* Promise 2 */}
                        <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md">
                            <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy mb-4">
                                SUPPORT ENTREPRENEURSHIP AND INNOVATION
                            </h3>
                            <div className="font-sourceSerif">
                                <p className="mb-3">
                                    Creating collaborative local networks connecting established businesses with startups.
                                </p>
                                <p className="mb-3">
                                    Developing practical training programs in partnership with local educational institutions.
                                </p>
                                <p>
                                    Streamlining city processes to make entrepreneurship more accessible.
                                </p>
                            </div>
                        </div>

                        {/* Promise 3 */}
                        <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md">
                            <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy mb-4">
                                EFFECTIVE INTEGRATION FOR MIGRANTS
                            </h3>
                            <div className="font-sourceSerif">
                                <p className="mb-3">
                                    Establishing a specialized competence and language center for newcomers.
                                </p>
                                <p className="mb-3">
                                    Offering tailored language education, skills validation, and career coaching.
                                </p>
                                <p>
                                    Creating pathways for international talent to build careers in Lahti.
                                </p>
                            </div>
                        </div>

                        {/* Promise 4 */}
                        <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md">
                            <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy mb-4">
                                YOUTH AND STUDENT ENGAGEMENT
                            </h3>
                            <div className="font-sourceSerif">
                                <p className="mb-3">
                                    Creating meaningful pathways for youth participation in city planning.
                                </p>
                                <p className="mb-3">
                                    Supporting student entrepreneurship initiatives.
                                </p>
                                <p>
                                    Ensuring educational opportunities align with future career prospects in the region.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Q&A Section */}
            <section className="py-16 bg-kokoomus-beige">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold text-kokoomus-navy text-center mb-12">
                        QUESTIONS & ANSWERS
                    </h2>

                    <div className="space-y-8">
                        {Object.entries(groupedQA).map(([category, items]) => (
                            <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <h3 className="font-barlowSemi uppercase text-xl bg-kokoomus-navy text-white p-4">
                                    {category}
                                </h3>
                                <div className="divide-y divide-gray-200">
                                    {items.map(item => (
                                        <div key={item.id} className="cursor-pointer">
                                            <div 
                                                className="p-4 flex justify-between items-center hover:bg-gray-50"
                                                onClick={() => toggleQA(item.id)}
                                            >
                                                <h4 className="font-sourceSerif font-medium text-lg">{item.question}</h4>
                                                {item.isOpen ? 
                                                    <ChevronUp className="h-5 w-5 text-kokoomus-blue" /> : 
                                                    <ChevronDown className="h-5 w-5 text-kokoomus-blue" />
                                                }
                                            </div>
                                            {item.isOpen && (
                                                <div className="p-4 bg-gray-50 font-sourceSerif">
                                                    <p>{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-kokoomus-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold mb-8">
                    #VoteForSina                    
                    </h2>
                          <div>         
                        
                        <div className="bg-kokoomus-navy rounded-lg p-6 shadow-md">
                            <h3 className="font-barlowSemi uppercase text-xl mb-4">
                                CONNECT ON SOCIAL MEDIA
                            </h3>
                            <p className="font-sourceSerif mb-6">
                                Follow Sina's campaign journey and join the conversation.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="https://www.linkedin.com/in/sinaghazi" target="_blank" rel="noopener noreferrer" className="bg-white text-kokoomus-navy p-2 rounded-full hover:bg-kokoomus-beige transition duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/sinaghazi" target="_blank" rel="noopener noreferrer" className="bg-white text-kokoomus-navy p-2 rounded-full hover:bg-kokoomus-beige transition duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <div className="inline-block bg-white text-kokoomus-navy px-8 py-3 rounded-lg shadow-lg">
                            <span className="font-barlowSemi uppercase text-4xl md:text-5xl tracking-wide">
                                VOTE 137
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampaignPage;
