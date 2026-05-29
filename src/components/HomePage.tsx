import Hero from './home/Hero';
import StorySection from './home/StorySection';
import IdeaSection from './home/IdeaSection';
import ProofSection from './home/ProofSection';
import TyoSection from './home/TyoSection';

// The homepage is one narrative scroll, and the narrative is an argument:
// story (who I am) → idea (how I see) → proof (it pays) → työ (what I built).
const HomePage = () => {
    return (
        <div className="bg-white">
            <Hero />
            <StorySection />
            <IdeaSection />
            <ProofSection />
            <TyoSection />
        </div>
    );
};

export default HomePage;
