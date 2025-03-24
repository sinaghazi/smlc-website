import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sinaElectionPhoto from '../../assets/sinaghazi-election-photo.jpg';
import { ChevronDown, ChevronUp, Home, BookOpen, MessageCircle, Vote, Award, Users, Briefcase, Globe, FileText, BarChart2, Zap, Compass } from 'lucide-react';
import { getTranslations, SupportedLanguage } from '../../translations';

// Define the Q&A item type
interface QAItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  isOpen: boolean;
}

// Define policy position type
interface PolicyPosition {
  id: string;
  category: string;
  question: string;
  stance: string;
  explanation: string;
  isOpen: boolean;
}

// Define translation content type
interface TranslationContent {
  title: string;
  subtitle: string;
  candidateNumber: string;
  videoDescription: string;
  keyPromisesTitle: string;
  promises: {
    tech: {
      title: string;
      points: string[];
    };
    entrepreneurship: {
      title: string;
      points: string[];
    };
    integration: {
      title: string;
      points: string[];
    };
    youth: {
      title: string;
      points: string[];
    };
  };
  qaTitle: string;
  qaDescription: string;
  socialMediaTitle: string;
  socialMediaDescription: string;
  voteForSina: string;
  vote: string;
  tabs: {
    overview: string;
    qa: string;
  };
  detailedPromises: {
    title: string;
    description: string;
    entrepreneurship: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    decisionMaking: {
      title: string;
      description: string;
    };
  };
  qaCategories: {
    [key: string]: string;
  };
}

const ElectionPage: React.FC = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  
  // State for content
  const [content, setContent] = useState<TranslationContent>(getTranslations(lang as SupportedLanguage));
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'qa'>('overview');
  
  // Initial Q&A data
  const [qaItems, setQaItems] = useState<QAItem[]>([
    {
      id: 'tech-1',
      category: 'Technology',
      question: 'How will LahenJutut improve citizen engagement?',
      answer: 'LahenJutut lets you share ideas anonymously. It uses AI to sort your feedback. This way, everyone\'s voice matters in city decisions.',
      isOpen: false
    },
    {
      id: 'tech-2',
      category: 'Technology',
      question: 'What languages does LahenJutut support?',
      answer: 'LahenJutut works in many languages! You can use Finnish, English, Russian, Arabic, and more. No matter what language you speak, you can join in.',
      isOpen: false
    },
    {
      id: 'ent-1',
      category: 'Entrepreneurship',
      question: 'What initiatives are planned to boost local entrepreneurship?',
      answer: 'We\'ll create hands-on training with local schools. This helps businesses grow and creates more jobs in Lahti.',
      isOpen: false
    },
    {
      id: 'ent-2',
      category: 'Entrepreneurship',
      question: 'How will you support small businesses in Lahti?',
      answer: 'We\'ll connect big companies with small ones. This creates mentoring chances. We\'ll also make city paperwork easier for business owners.',
      isOpen: false
    },
    {
      id: 'int-1',
      category: 'Integration',
      question: 'How will you enhance integration for new migrants?',
      answer: 'We\'ll build a special center for newcomers. It will offer language classes, skills checks, and job coaching. This helps people settle in faster.',
      isOpen: false
    },
    {
      id: 'int-2',
      category: 'Integration',
      question: 'What role do you see for international talent in Lahti\'s future?',
      answer: 'International talent helps Lahti grow! We\'ll create ways for international students to stay here. We\'ll attract skilled workers and help them build lives in our city.',
      isOpen: false
    },
    {
      id: 'gen-1',
      category: 'Election General',
      question: 'How does Sina Ghazi\'s international experience benefit Lahti?',
      answer: 'Sina brings a global view to Lahti. This helps bring in new ideas, attract international talent, and make our city\'s economy stronger.',
      isOpen: false
    },
    {
      id: 'gen-2',
      category: 'Election General',
      question: 'What are your priorities for youth and student engagement?',
      answer: 'We\'ll create ways for young people to help plan the city. We\'ll support student businesses. And we\'ll make sure school leads to good jobs in Lahti.',
      isOpen: false
    }
  ]);

  // Policy positions data
  const [policyPositions, setPolicyPositions] = useState<PolicyPosition[]>([
    {
      id: 'edu-1',
      category: 'Education',
      question: 'My municipality should set a maximum limit for the size of basic education teaching groups.',
      stance: 'Strongly Agree',
      explanation: 'Smaller classes mean teachers can help each student better. Kids learn more and feel happier. Teachers can do their job better too. Good schools create a strong future for Lahti. I\'ll work to make this happen.',
      isOpen: false
    },
    {
      id: 'edu-2',
      category: 'Education',
      question: 'Closing small schools is justified for cost reasons.',
      stance: 'Somewhat Disagree',
      explanation: 'Yes, we need to save money. But schools are more than just costs. They bring life to neighborhoods and attract families to Lahti. Before closing any school, we should look for other ways to save money. We lose valuable skills and business ideas. We need to invest in language teaching and job training so everyone can help build a better Lahti.',
      isOpen: false
    },
    {
      id: 'edu-3',
      category: 'Education',
      question: 'My municipality should offer the opportunity to study Swedish in Finnish-language schools before the sixth grade of primary school.',
      stance: 'Strongly Agree',
      explanation: 'Learning languages early helps kids get better jobs later. Starting Swedish before 6th grade makes learning easier. It opens doors in Finland and other Nordic countries. Kids who speak many languages will have more chances to succeed.',
      isOpen: false
    },
    {
      id: 'econ-1',
      category: 'Economy & Employment',
      question: 'If municipal revenues and expenditures are balanced, it should be done by cutting expenditures rather than raising taxes.',
      stance: 'Somewhat Agree',
      explanation: 'Lower taxes help businesses and families. Lahti should be a great place for people and companies. But when we cut spending, we must keep important services working well. We should use technology to save money. Smart money choices will help Lahti grow without raising taxes.',
      isOpen: false
    },
    {
      id: 'econ-2',
      category: 'Economy & Employment',
      question: 'Capital income should be kept outside municipal taxation.',
      stance: 'Somewhat Agree',
      explanation: 'I support fair taxes that help businesses grow in Lahti. Taxing investment money might scare away business owners. Instead, we should find smarter ways to pay for city services. This keeps Lahti attractive for people who want to invest here.',
      isOpen: false
    },
    {
      id: 'env-1',
      category: 'Environment & Public Transport',
      question: 'My municipality should avoid clear-cutting in forest areas it owns.',
      stance: 'Strongly Agree',
      explanation: 'I want Lahti to be green and sustainable. City forests should be cared for properly. They provide homes for wildlife, places for people to enjoy nature, and clean air. Clear-cutting forests doesn\'t fit with Lahti\'s green goals.',
      isOpen: false
    },
    {
      id: 'env-2',
      category: 'Environment & Public Transport',
      question: 'My municipality should strive to achieve carbon neutrality before Finland\'s target year of 2035.',
      stance: 'Strongly Agree',
      explanation: 'Lahti is already a leader in being eco-friendly. Reaching carbon neutrality early will attract innovative companies to our city. This creates jobs and makes Lahti stand out. It also means a healthier, better life for everyone—now and in the future.',
      isOpen: false
    },
    {
      id: 'immig-1',
      category: 'Immigration & Integration',
      question: 'Immigrants strengthen the vitality of my home municipality.',
      stance: 'Strongly Agree',
      explanation: 'As a business owner in Lahti, I\'ve seen how people from different backgrounds bring new skills and ideas. Immigrants help our city grow, create jobs, and make Lahti more diverse. Being open to different cultures is key to our city\'s success.',
      isOpen: false
    },
    {
      id: 'immig-2',
      category: 'Immigration & Integration',
      question: 'My municipality should save on integration services for immigrants.',
      stance: 'Strongly Disagree',
      explanation: 'Lahti\'s future depends on helping newcomers become part of our community. Cutting integration services leads to problems and higher costs later. We lose valuable skills and business ideas. We need to invest in language teaching and job training so everyone can help build a better Lahti.',
      isOpen: false
    },
    {
      id: 'local-1',
      category: 'Local Issues',
      question: 'Lahti Energia should remain 100% owned by the city.',
      stance: 'Somewhat Agree',
      explanation: 'Companies like Lahti Energia are vital for our city. Local ownership ensures reliable services and responsible energy solutions. The city should keep control over these important matters. We can explore partnerships if they bring better, cheaper energy to residents. But the city should keep the final say.',
      isOpen: false
    },
    {
      id: 'local-2',
      category: 'Local Issues',
      question: 'A hotel should be built in Alatori.',
      stance: 'Somewhat Agree',
      explanation: 'Lahti needs projects that attract tourists and create jobs. A hotel at Alatori would make our city center more lively and help nearby businesses. But we must plan it carefully, with input from residents. The project should fit with our city\'s character and green values.',
      isOpen: false
    }
  ]);

  // Update content based on selected language
  useEffect(() => {
    // Validate language parameter
    const validLang = (lang === 'en' || lang === 'fi') ? lang as SupportedLanguage : 'en';
    
    // Update content based on language
    setContent(getTranslations(validLang));
    
    // If the URL doesn't match the language, update it
    if (lang !== validLang) {
      navigate(`/${validLang}/election`, { replace: true });
    }
  }, [lang, navigate]);

  // Toggle Q&A item open/closed state
  const toggleQA = (id: string) => {
    setQaItems(qaItems.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  // Toggle policy position open/closed state
  const togglePolicy = (id: string) => {
    setPolicyPositions(policyPositions.map(item => 
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

  // Group policy positions by category
  const groupedPolicies = policyPositions.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, PolicyPosition[]>);

  return (
    <div className="bg-kokoomus-beige min-h-screen">
      {/* Hero Section with Election Video */}
      <section className="relative bg-kokoomus-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-barlow italic uppercase text-4xl md:text-5xl font-bold tracking-wider mb-4">
              {content.title}
            </h1>
            <h2 className="font-sourceSerif text-xl md:text-2xl lg:text-3xl mb-6">
              {content.subtitle}
            </h2>
            <div className="inline-block bg-kokoomus-blue px-8 py-3 rounded-lg shadow-lg">
              <span className="font-barlowSemi uppercase text-3xl md:text-4xl tracking-wide">
                {content.candidateNumber}
              </span>
            </div>
          </div>

          {/* Candidate Photo and Election Video */}
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

            {/* Election Video */}
            <div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/m3JV8LMH9vw?cc_load_policy=1&cc_lang_pref=${lang}`} 
                  title="Sina Ghazi – Candidate 137 Introduction and Vision" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center mt-4 font-sourceSerif">
                {content.videoDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs - Redesigned with icons and better visibility */}
      <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-6 px-8 font-medium text-base flex flex-col items-center transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'text-kokoomus-navy border-b-4 border-kokoomus-blue'
                  : 'text-gray-500 hover:text-gray-700 hover:border-b-4 hover:border-gray-300'
              }`}
            >
              <Home className={`h-6 w-6 mb-2 ${activeTab === 'overview' ? 'text-kokoomus-blue' : 'text-gray-400'}`} />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`py-6 px-8 font-medium text-base flex flex-col items-center transition-all duration-200 ${
                activeTab === 'detailed'
                  ? 'text-kokoomus-navy border-b-4 border-kokoomus-blue'
                  : 'text-gray-500 hover:text-gray-700 hover:border-b-4 hover:border-gray-300'
              }`}
            >
              <FileText className={`h-6 w-6 mb-2 ${activeTab === 'detailed' ? 'text-kokoomus-blue' : 'text-gray-400'}`} />
              <span>{content.tabs?.overview || "Policy Positions"}</span>
            </button>
            <button
              onClick={() => setActiveTab('qa')}
              className={`py-6 px-8 font-medium text-base flex flex-col items-center transition-all duration-200 ${
                activeTab === 'qa'
                  ? 'text-kokoomus-navy border-b-4 border-kokoomus-blue'
                  : 'text-gray-500 hover:text-gray-700 hover:border-b-4 hover:border-gray-300'
              }`}
            >
              <MessageCircle className={`h-6 w-6 mb-2 ${activeTab === 'qa' ? 'text-kokoomus-blue' : 'text-gray-400'}`} />
              <span>{content.tabs?.qa || "Q&A"}</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <>
          {/* Election Promises Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold text-kokoomus-navy text-center mb-12">
                {content.keyPromisesTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Promise 1 */}
                <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-kokoomus-navy p-3 rounded-full mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy">
                      {content.promises.tech.title}
                    </h3>
                  </div>
                  <div className="font-sourceSerif">
                    {content.promises.tech.points.map((point, index) => (
                      <p key={index} className={index < content.promises.tech.points.length - 1 ? "mb-3" : ""}>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Promise 2 */}
                <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-kokoomus-navy p-3 rounded-full mr-4">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy">
                      {content.promises.entrepreneurship.title}
                    </h3>
                  </div>
                  <div className="font-sourceSerif">
                    {content.promises.entrepreneurship.points.map((point, index) => (
                      <p key={index} className={index < content.promises.entrepreneurship.points.length - 1 ? "mb-3" : ""}>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Promise 3 */}
                <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-kokoomus-navy p-3 rounded-full mr-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy">
                      {content.promises.integration.title}
                    </h3>
                  </div>
                  <div className="font-sourceSerif">
                    {content.promises.integration.points.map((point, index) => (
                      <p key={index} className={index < content.promises.integration.points.length - 1 ? "mb-3" : ""}>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Promise 4 */}
                <div className="bg-kokoomus-lightBlue rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-kokoomus-navy p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-barlowSemi uppercase text-xl text-kokoomus-navy">
                      {content.promises.youth.title}
                    </h3>
                  </div>
                  <div className="font-sourceSerif">
                    {content.promises.youth.points.map((point, index) => (
                      <p key={index} className={index < content.promises.youth.points.length - 1 ? "mb-3" : ""}>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Election Promises */}
          <section className="py-16 bg-kokoomus-beige">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold text-kokoomus-navy text-center mb-12">
                {content.detailedPromises?.title || "KEY ELECTION PROMISES"}
              </h2>

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center bg-kokoomus-navy text-white p-4">
                  <Award className="h-6 w-6 mr-3" />
                  <h3 className="font-barlowSemi uppercase text-xl">
                    {content.detailedPromises?.entrepreneurship?.title || "STRONGER ENTREPRENEURSHIP AND WORK-LIFE REFORM"}
                  </h3>
                </div>
                <div className="p-6 font-sourceSerif">
                  <p className="mb-4">
                    {content.detailedPromises?.entrepreneurship?.description || "I support local entrepreneurship and job creation by creating a collaboration model in Lahti where local educational institutions and businesses jointly develop practical training programs and entrepreneurial networks. This ensures that Lahti remains at the forefront of work life shaped by AI and automation."}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center bg-kokoomus-navy text-white p-4">
                  <Globe className="h-6 w-6 mr-3" />
                  <h3 className="font-barlowSemi uppercase text-xl">
                    {content.detailedPromises?.integration?.title || "MORE EFFECTIVE INTEGRATION AND UTILIZATION OF SKILLS"}
                  </h3>
                </div>
                <div className="p-6 font-sourceSerif">
                  <p className="mb-4">
                    {content.detailedPromises?.integration?.description || "I promote the rapid employment of immigrants and international talent in Lahti by developing a competence and language service center that offers qualification recognition, tailored language training, and personalized career coaching. This ensures that everyone can find their place and contribute to Lahti's growth and well-being."}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center bg-kokoomus-navy text-white p-4">
                  <Users className="h-6 w-6 mr-3" />
                  <h3 className="font-barlowSemi uppercase text-xl">
                    {content.detailedPromises?.decisionMaking?.title || "MORE OPEN AND INCLUSIVE DECISION-MAKING"}
                  </h3>
                </div>
                <div className="p-6 font-sourceSerif">
                  <p className="mb-4">
                    {content.detailedPromises?.decisionMaking?.description || "I bring decision-making closer to city residents by introducing a digital platform where every Lahti resident can follow city decision-making in real time and participate in discussions and making proposals. This increases transparency and enables the utilization of new technology in developing our city together with residents."}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Detailed Policy Positions Tab Content */}
      {activeTab === 'detailed' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-kokoomus-blue mx-auto mb-4" />
              <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold text-kokoomus-navy">
                {content.detailedPromises?.title || "DETAILED POLICY POSITIONS"}
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto font-sourceSerif">
                {content.detailedPromises?.description || "Explore my stance on key issues affecting Lahti and Finland. Click on any topic to read my detailed explanation."}
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(groupedPolicies).map(([category, items]) => (
                <div key={category} className="bg-kokoomus-beige rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center bg-kokoomus-navy text-white p-4">
                    {category === 'Education' && <BookOpen className="h-6 w-6 mr-3" />}
                    {category === 'Economy & Employment' && <BarChart2 className="h-6 w-6 mr-3" />}
                    {category === 'Environment & Public Transport' && <Compass className="h-6 w-6 mr-3" />}
                    {category === 'Immigration & Integration' && <Globe className="h-6 w-6 mr-3" />}
                    {category === 'Local Issues' && <Home className="h-6 w-6 mr-3" />}
                    <h3 className="font-barlowSemi uppercase text-xl">
                      {category}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {items.map(item => (
                      <div key={item.id} className="cursor-pointer">
                        <div 
                          className="p-4 flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => togglePolicy(item.id)}
                        >
                          <h4 className="font-sourceSerif font-medium text-lg">{item.question}</h4>
                          <div className={`p-2 rounded-full ${item.isOpen ? 'bg-kokoomus-blue' : 'bg-gray-200'} transition-colors duration-200`}>
                            {item.isOpen ? 
                              <ChevronUp className="h-5 w-5 text-white" /> : 
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            }
                          </div>
                        </div>
                        {item.isOpen && (
                          <div className="p-6 bg-white font-sourceSerif border-t border-gray-100">
                            <p className="leading-relaxed">{item.explanation}</p>
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
      )}

      {/* Q&A Tab Content */}
      {activeTab === 'qa' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <MessageCircle className="h-12 w-12 text-kokoomus-blue mx-auto mb-4" />
              <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold text-kokoomus-navy">
                {content.qaTitle}
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto font-sourceSerif">
                {content.qaDescription}
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(groupedQA).map(([category, items]) => (
                <div key={category} className="bg-kokoomus-beige rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center bg-kokoomus-navy text-white p-4">
                    {category === 'Technology' && <Zap className="h-6 w-6 mr-3" />}
                    {category === 'Entrepreneurship' && <Briefcase className="h-6 w-6 mr-3" />}
                    {category === 'Integration' && <Globe className="h-6 w-6 mr-3" />}
                    {category === 'Youth' && <Users className="h-6 w-6 mr-3" />}
                    {category === 'Decision-Making' && <Vote className="h-6 w-6 mr-3" />}
                    <h3 className="font-barlowSemi uppercase text-xl">
                      {content.qaCategories?.[category] || category}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {items.map(item => (
                      <div key={item.id} className="cursor-pointer">
                        <div 
                          className="p-5 flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => toggleQA(item.id)}
                        >
                          <h4 className="font-sourceSerif font-medium text-lg">{item.question}</h4>
                          <div className={`p-2 rounded-full ${item.isOpen ? 'bg-kokoomus-blue' : 'bg-gray-200'} transition-colors duration-200`}>
                            {item.isOpen ? 
                              <ChevronUp className="h-5 w-5 text-white" /> : 
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            }
                          </div>
                        </div>
                        {item.isOpen && (
                          <div className="p-6 bg-white font-sourceSerif border-t border-gray-100">
                            <p className="leading-relaxed">{item.answer}</p>
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
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-kokoomus-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-barlow italic uppercase text-3xl md:text-4xl font-bold mb-8">
            {content.voteForSina}                    
          </h2>
          <div>         
            <div className="bg-kokoomus-navy rounded-lg p-6 shadow-md">
              <h3 className="font-barlowSemi uppercase text-xl mb-4">
                {content.socialMediaTitle}
              </h3>
              <p className="font-sourceSerif mb-6">
                {content.socialMediaDescription}
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/sinaghazi" target="_blank" rel="noopener noreferrer" className="bg-white text-kokoomus-navy p-2 rounded-full hover:bg-kokoomus-beige transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/sinaghazi" target="_blank" rel="noopener noreferrer" className="bg-white text-kokoomus-navy p-2 rounded-full hover:bg-kokoomus-beige transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="inline-block bg-white text-kokoomus-navy px-8 py-3 rounded-lg shadow-lg">
              <span className="font-barlowSemi uppercase text-4xl md:text-5xl tracking-wide">
                {content.vote}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectionPage;
