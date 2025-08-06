// src/components/overview/SimplifiedFramework.tsx
import React, { useState } from 'react';
import { User, Building2, Globe, ChevronRight, BookOpen, Lightbulb, Target } from 'lucide-react';

interface AudienceContent {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  introduction: string;
  levels: {
    name: string;
    description: string;
    keyQuestions: string[];
    examples: string[];
  }[];
  takeaways: string[];
}

const SimplifiedFramework: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<'beginner' | 'practitioner' | 'researcher'>('beginner');

  const audienceContent: Record<string, AudienceContent> = {
    beginner: {
      title: "Leadership Made Simple",
      subtitle: "Understanding the Three Levels of Leadership",
      icon: Lightbulb,
      introduction: "Leadership isn't just about managing people - it's about understanding yourself, your organization, and your impact on society. The SMLC framework helps you see the big picture through three interconnected levels.",
      levels: [
        {
          name: "Personal Leadership",
          description: "How you lead yourself and make decisions",
          keyQuestions: [
            "Do I focus more on my own goals or others' needs?",
            "Do I prefer data and analysis or trust my instincts?", 
            "Am I naturally cautious or willing to take bold risks?"
          ],
          examples: [
            "A team leader who always considers team impact before personal advancement",
            "A manager who uses both data analysis and gut feeling when making decisions",
            "An entrepreneur who takes calculated risks to innovate"
          ]
        },
        {
          name: "Organizational Leadership", 
          description: "How you lead teams and shape workplace culture",
          keyQuestions: [
            "Do I prefer to direct decisions or collaborate with my team?",
            "Do I focus more on getting tasks done or developing people?",
            "Do I like clear structure or prefer flexible, adaptive approaches?"
          ],
          examples: [
            "A CEO who creates collaborative decision-making processes",
            "A project manager who balances deadlines with team development",
            "A department head who adapts structure based on changing needs"
          ]
        },
        {
          name: "Societal Leadership",
          description: "How you think about leadership's role in the broader world",
          keyQuestions: [
            "Should leadership prioritize individual rights or collective welfare?",
            "Do I prefer preserving traditions or driving progressive change?",
            "Do I focus on local community needs or global challenges?"
          ],
          examples: [
            "A nonprofit leader balancing individual empowerment with community needs",
            "A business executive integrating traditional values with innovation",
            "A political leader thinking both locally and globally"
          ]
        }
      ],
      takeaways: [
        "Leadership happens at three levels - personal, organizational, and societal",
        "Each level has three key dimensions that shape your leadership style",
        "Great leaders are aware of their position across all dimensions",
        "There's no 'perfect' leadership style - it depends on context and situation",
        "Self-awareness and flexibility are more important than being 'right'"
      ]
    },
    practitioner: {
      title: "SMLC for Leadership Practitioners", 
      subtitle: "A Practical Framework for Leadership Development",
      icon: Target,
      introduction: "The SMLC framework provides a comprehensive yet practical approach to understanding and developing leadership capabilities across three critical levels. This multidimensional model helps practitioners diagnose, develop, and optimize leadership effectiveness.",
      levels: [
        {
          name: "Personal Mastery Dimensions",
          description: "Core self-leadership capabilities that underpin all other leadership activities",
          keyQuestions: [
            "How do I balance self-interest with stakeholder consideration?",
            "When do I rely on analytical thinking vs. intuitive judgment?",
            "How do I manage risk tolerance and decision-making under uncertainty?"
          ],
          examples: [
            "Using 360° feedback to understand your Self-Focus vs. Others-Focus tendencies",
            "Developing both analytical and intuitive decision-making skills",
            "Building adaptive risk management capabilities based on situation"
          ]
        },
        {
          name: "Organizational Effectiveness Dimensions",
          description: "Leadership approaches that drive team and organizational performance",
          keyQuestions: [
            "When should I be directive vs. collaborative in my leadership approach?",
            "How do I balance task achievement with people development?",
            "How do I optimize structure and flexibility for different contexts?"
          ],
          examples: [
            "Situational leadership: adapting directive/collaborative styles based on team maturity",
            "Implementing OKRs while maintaining focus on employee engagement",
            "Creating agile organizational structures that can pivot with market changes"
          ]
        },
        {
          name: "Societal Impact Dimensions", 
          description: "Leadership perspectives that consider broader stakeholder and societal impact",
          keyQuestions: [
            "How do I balance individual empowerment with collective responsibility?",
            "How do I honor tradition while driving necessary innovation?",
            "How do I balance local community needs with global considerations?"
          ],
          examples: [
            "Developing stakeholder-inclusive decision-making processes",
            "Creating change management strategies that respect culture while driving progress",
            "Building glocal leadership capabilities - thinking globally, acting locally"
          ]
        }
      ],
      takeaways: [
        "Use SMLC as a diagnostic tool to identify leadership development opportunities",
        "Different situations require different combinations of dimensional orientations",
        "Develop meta-skills: the ability to consciously shift between orientations",
        "Integrate SMLC assessment into 360° feedback and coaching programs",
        "Build organizational cultures that value dimensional diversity and situational flexibility"
      ]
    },
    researcher: {
      title: "SMLC Research Framework",
      subtitle: "A Multidimensional Approach to Leadership Science", 
      icon: BookOpen,
      introduction: "The Sina Multidimensional Leadership Cube (SMLC) represents a theoretically grounded, empirically testable framework that addresses limitations in existing leadership models by integrating three hierarchical levels of analysis with validated psychological and organizational constructs.",
      levels: [
        {
          name: "Personal Level Constructs",
          description: "Individual difference variables grounded in personality and cognitive psychology",
          keyQuestions: [
            "How does self-other orientation relate to established personality models?",
            "What are the cognitive mechanisms underlying analytical vs. intuitive processing?",
            "How do risk preferences manifest in leadership decision-making contexts?"
          ],
          examples: [
            "Measuring self-other orientation using validated scales (e.g., Self-Construal Scale)",
            "Assessing cognitive style using Rational-Experiential Inventory",
            "Evaluating risk tolerance using domain-specific risk attitude scales"
          ]
        },
        {
          name: "Organizational Level Variables",
          description: "Team and organizational behavior constructs validated in management research", 
          keyQuestions: [
            "How do directive/collaborative styles relate to transformational leadership theory?",
            "What mediates the relationship between task/people focus and performance outcomes?",
            "How does structural flexibility impact organizational adaptation and performance?"
          ],
          examples: [
            "Measuring leadership behavior using MLQ-5X and situational leadership inventories",
            "Assessing task vs. relationship orientation using LBDQ and similar validated measures",
            "Evaluating structural preferences using organizational design and agility scales"
          ]
        },
        {
          name: "Societal Level Dimensions",
          description: "Cultural and institutional variables drawing from cross-cultural psychology",
          keyQuestions: [
            "How do individual/collective orientations relate to cultural value frameworks?",
            "What drives traditional vs. progressive orientations in leadership contexts?",
            "How does local vs. global perspective influence leadership decision-making?"
          ],
          examples: [
            "Measuring individualism/collectivism using validated cultural value scales",
            "Assessing traditionalism vs. openness using cultural orientation inventories", 
            "Evaluating global mindset using established international business measures"
          ]
        }
      ],
      takeaways: [
        "SMLC provides a hierarchical, multidimensional framework suitable for multilevel analysis",
        "Each dimension is anchored in established psychological and organizational constructs",
        "Framework enables investigation of cross-level interactions and emergence effects", 
        "Measurement approach emphasizes continuous variables rather than typological categories",
        "Research opportunities include validation studies, predictive modeling, and intervention research"
      ]
    }
  };

  const currentContent = audienceContent[selectedAudience];
  const IconComponent = currentContent.icon;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Audience Selector */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Choose Your Learning Path
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { key: 'beginner', label: 'New to Leadership', desc: 'Just getting started', icon: Lightbulb },
            { key: 'practitioner', label: 'Leadership Practitioner', desc: 'Ready to apply concepts', icon: Target },
            { key: 'researcher', label: 'Academic/Researcher', desc: 'Interested in the science', icon: BookOpen }
          ].map(({ key, label, desc, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSelectedAudience(key as any)}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedAudience === key
                  ? 'border-blue-600 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <Icon className={`w-8 h-8 mx-auto mb-3 ${
                selectedAudience === key ? 'text-blue-600' : 'text-gray-600'
              }`} />
              <h3 className={`font-semibold mb-1 ${
                selectedAudience === key ? 'text-blue-900' : 'text-gray-900'
              }`}>
                {label}
              </h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentContent.title}</h2>
          <h3 className="text-lg text-gray-600 mb-4">{currentContent.subtitle}</h3>
          <p className="text-gray-700 max-w-4xl mx-auto">{currentContent.introduction}</p>
        </div>

        {/* Three Levels */}
        <div className="space-y-8">
          {currentContent.levels.map((level, index) => {
            const icons = [User, Building2, Globe];
            const LevelIcon = icons[index];
            
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <LevelIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{level.name}</h3>
                </div>
                
                <p className="text-gray-700 mb-6">{level.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Questions:</h4>
                    <ul className="space-y-2">
                      {level.keyQuestions.map((question, qIndex) => (
                        <li key={qIndex} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {level.examples.map((example, eIndex) => (
                        <li key={eIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Key Takeaways</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {currentContent.takeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-blue-800">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="space-x-4">
            <a
              href="/assessment"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Take the Assessment
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="/foundations"
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              View Scientific Foundations
              <BookOpen className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedFramework;
