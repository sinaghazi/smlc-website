import React, { useState } from 'react';
import { Trophy, Star, ArrowRight, Users, Brain, Target } from 'lucide-react';

interface TeamScore {
    name: string;
    totalScore: number;
    videoUrl?: string;
    scores: {
        innovation: number;
        technical: number;
        feasibility: number;
        presentation: number;
        communication: number;
        alignment: number;
    };
    analysis: {
        innovation: string;
        technical: string;
        feasibility: string;
        presentation: string;
        communication: string;
        alignment: string;
    };
}

const teams: TeamScore[] = [
    {
        name: "CoLab",
        totalScore: 25,
        videoUrl: "https://youtu.be/zsdchJptCTI",
        scores: {
            innovation: 5,
            technical: 4,
            feasibility: 4,
            presentation: 3,
            communication: 3,
            alignment: 3
        },
        analysis: {
            innovation: "The AI-powered solution for team matching and blind spot detection is innovative, with a strong focus on leveraging SMLC for team dynamics. UI/UX design enhances usability.",
            technical: "Robust technical framework, with AI tools for implementation and a clear design roadmap. Effective use of data for team matching and evaluation.",
            feasibility: "Highly feasible with clear resource planning and scalability. The use of existing tools like AI algorithms makes it practical for diverse organizational contexts.",
            presentation: "Engaging and well-structured, supported by detailed visuals and prototypes. The roadmap clearly communicated long-term goals and immediate steps.",
            communication: "Team delivered the presentation with clarity and enthusiasm, effectively engaging the audience and showcasing confidence in the solution.",
            alignment: "Strong alignment with SMLC principles, particularly in team collaboration and dynamics. The focus on blind spot resolution enhances the practical application of the framework."
        }
    },
    {
        name: "Team 52",
        totalScore: 24,
        videoUrl: "https://youtu.be/oaazpYF1DSs",
        scores: {
            innovation: 4,
            technical: 4,
            feasibility: 4,
            presentation: 3,
            communication: 3,
            alignment: 3
        },
        analysis: {
            innovation: "The gamified solution using immersive virtual scenarios is creative, especially for leadership development. The integration of SMLC metrics in decision-making scenarios is a standout feature.",
            technical: "Strong technical foundation, with detailed SMLC metric mapping and actionable reports for both individuals and organizations. Supports thorough analysis for leadership adaptability.",
            feasibility: "The solution is feasible with clear implementation steps, though resource-intensive for virtual game development. Scalability is addressed through customizable game scenarios.",
            presentation: "Presentation was clear, structured, and supported by visuals and storytelling, effectively communicating the concept and its alignment with SMLC.",
            communication: "Delivery was confident and professional, with excellent articulation of technical and practical aspects.",
            alignment: "Fully aligned with SMLC principles, addressing personal, organizational, and societal levels. Offers tools for actionable insights and leadership adaptability."
        }
    },
    // Add these entries to the teams array
    {
        name: "Hackathon Heroes",
        totalScore: 21.5,
        videoUrl: "https://youtu.be/UYebkaXIsb4", // Add the actual URL when available
        scores: {
            innovation: 4,
            technical: 3,
            feasibility: 3.5,
            presentation: 2.5,
            communication: 2.5,
            alignment: 2.5
        },
        analysis: {
            innovation: "The leadership training program is practical but less novel compared to other solutions. Focus on situational adaptability and cross-cultural communication is valuable but not groundbreaking.",
            technical: "Basic structure with situational exercises and leadership assessments, but lacks advanced technological features or detailed data analysis.",
            feasibility: "The program is feasible for small-scale training but less scalable due to reliance on facilitated workshops and physical sessions.",
            presentation: "Practical delivery but less engaging compared to others. Lacked captivating visual elements or advanced storytelling to maintain interest.",
            communication: "Professional delivery but lacked fluidity and full engagement in articulating key points.",
            alignment: "Aligned with SMLC at the personal level but less emphasis on organizational and societal levels. The approach primarily addresses individual leadership improvement."
        }
    },
    {
        name: "Team D",
        totalScore: 18,
        videoUrl: "https://youtu.be/f8GHp4bT8bU",
        scores: {
            innovation: 3.5,
            technical: 2.5,
            feasibility: 3,
            presentation: 2,
            communication: 2,
            alignment: 2
        },
        analysis: {
            innovation: "The classification system using colors (Red, Blue, Green) is creative but lacks technological sophistication. The focus on workshops and psychological profiling is resource-heavy.",
            technical: "Relies on manual interventions and lacks detailed technical implementation. Minimal use of technology limits its scope for data-driven decision-making.",
            feasibility: "Practical in smaller-scale applications but resource-intensive due to reliance on psychologists and workshops. Scalability is limited.",
            presentation: "Presentation lacked clarity and structured storytelling. Minimal visuals made the concept harder to grasp and less engaging for the audience.",
            communication: "Inconsistent delivery, lacking clarity and engagement, which impacted the overall understanding of the solution.",
            alignment: "Moderately aligned with SMLC principles, focusing primarily on individual-level collaboration. Lacks emphasis on broader organizational or societal integration."
        }
    }
];

interface ScoreCardProps {
    label: string;
    analysis: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ label, analysis }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
            <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
            </div>
        </div>
        <p className="text-gray-600 text-sm">{analysis}</p>
    </div>
);

interface YouTubeEmbedProps {
    videoUrl: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl }) => {
    const getYouTubeId = (url: string): string => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match?.[2] ?? '';
    };

    const videoId = getYouTubeId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={embedUrl}
                className="w-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};


const TeamCard: React.FC<{ team: TeamScore }> = ({ team }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-indigo-100 rounded-lg">
                                    <Trophy className="h-6 w-6 text-indigo-600"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">{team.analysis.innovation}</p>
                        </div>
                        {team.videoUrl && team.videoUrl !== "YOUR_YOUTUBE_URL_HERE" && (
                            <div className="w-full lg:w-1/3 flex-shrink-0">
                                <YouTubeEmbed videoUrl={team.videoUrl}/>
                            </div>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                    <ArrowRight className={`h-4 w-4 transform transition-transform ${showDetails ? 'rotate-90' : ''}`}/>
                </button>

                {showDetails && (
                    <div className="mt-6 grid gap-4">
                        <ScoreCard
                            label="Innovation"
                            analysis={team.analysis.innovation}
                        />
                        <ScoreCard
                            label="Technical Analysis"
                            analysis={team.analysis.technical}
                        />
                        <ScoreCard
                            label="Feasibility"
                            analysis={team.analysis.feasibility}
                        />
                        <ScoreCard
                            label="Presentation"
                            analysis={team.analysis.presentation}
                        />
                        <ScoreCard
                            label="Communication"
                            analysis={team.analysis.communication}
                        />
                        <ScoreCard
                            label="SMLC Alignment"
                            analysis={team.analysis.alignment}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export const HackathonResults: React.FC = () => {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Synergy Hackathon Results
                    </h2>
                    <p className="text-xl text-gray-600">
                        Showcasing innovative solutions that leverage SMLC for real-world impact
                    </p>
                </div>

                <div className="grid gap-8 mb-12">
                    {teams.map((team, index) => (
                        <TeamCard key={index} team={team}/>
                    ))}
                </div>

                <div className="bg-indigo-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Key Success Factors
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="p-3 bg-indigo-100 rounded-lg mb-4">
                                <Brain className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                            <p className="text-gray-600">Creative solutions that push boundaries</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="p-3 bg-indigo-100 rounded-lg mb-4">
                                <Target className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Feasibility</h4>
                            <p className="text-gray-600">Practical implementation strategies</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="p-3 bg-indigo-100 rounded-lg mb-4">
                                <Users className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Impact</h4>
                            <p className="text-gray-600">Real-world application of SMLC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HackathonResults;
