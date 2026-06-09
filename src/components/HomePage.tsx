import Seo from './seo/Seo';
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
            <Seo
                title="Sina Ghazi — Understanding difference, and building what depends on it"
                description="Sina Ghazi helps people understand each other — and builds the systems that depend on it. Twenty years across banking, payments, and AI, from Iran to Finland. Creator of the SMLC framework; builder of työ."
                path="/"
                ogType="profile"
            />
            <Hero />
            <StorySection />
            <IdeaSection />
            <ProofSection />
            <TyoSection />
        </div>
    );
};

export default HomePage;
