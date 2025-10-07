import { useEffect, useState } from 'react';
import UtilityNav from './components/UtilityNav';
import MainNav from './components/MainNav';
import HeroSection from './components/HeroSection';
import CTIHighlights from './components/CTIHighlights';
import NewsletterSignup from './components/NewsletterSignup';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import LifeAtSecurityCouncil from './components/LifeAtSecurityCouncil';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import WhoWeGuidePage from './components/WhoWeGuidePage';
import OurIntelligencePage from './components/OurIntelligencePage';
import LatestInsightPage from './components/LatestInsightPage';
import EventsPage from './components/EventsPage';
import AIThreatsPage from './components/AIThreatsPage';
import ThreatActorPage from './components/ThreatActorPage';
import Insight1Page from './components/insights/Insight1Page';
import Insight2Page from './components/insights/Insight2Page';
import Insight3Page from './components/insights/Insight3Page';
import Insight4Page from './components/insights/Insight4Page';
import Insight5Page from './components/insights/Insight5Page';
import Insight6Page from './components/insights/Insight6Page';
import Insight7Page from './components/insights/Insight7Page';
import Insight8Page from './components/insights/Insight8Page';
import ThreatIntelligencePage from './components/ThreatIntelligencePage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isAtTop, setIsAtTop] = useState(true);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsAtTop((window.scrollY || 0) < 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
        // Reset scroll so new page starts at the top
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };

    const renderHomePage = () => (
        <>
            <HeroSection />
            <CTIHighlights />
            <NewsletterSignup />
            <FeaturesSection />
            <WhyChooseUs />
            <TestimonialsSection />
            <LifeAtSecurityCouncil />
        </>
    );

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'our-intelligence':
                return <OurIntelligencePage />;
            case 'who-we-guide':
                return (
                    <>
                        <WhoWeGuidePage onNavigate={handleNavigate} />
                        <FeaturesSection />
                    </>
                );
            case 'latest-insight':
                return <LatestInsightPage onNavigate={handleNavigate} />;
            case 'insight-1':
                return <Insight1Page />;
            case 'insight-2':
                return <Insight2Page />;
            case 'insight-3':
                return <Insight3Page />;
            case 'insight-4':
                return <Insight4Page />;
            case 'insight-5':
                return <Insight5Page />;
            case 'insight-6':
                return <Insight6Page />;
            case 'insight-7':
                return <Insight7Page />;
            case 'insight-8':
                return <Insight8Page />;
            case 'events':
                return <EventsPage />;
            case 'ai-threats':
                return <AIThreatsPage />;
            case 'threat-actor':
                return <ThreatActorPage />;
            case 'threat-intelligence':
                return <ThreatIntelligencePage />;
            default:
                return renderHomePage();
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <UtilityNav isAtTop={isAtTop} />
            <MainNav currentPage={currentPage} onNavigate={handleNavigate} isAtTop={isAtTop} />
            {renderCurrentPage()}
            <Footer onContactClick={() => setIsContactOpen(true)} />
            <ContactPopup
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                showTrigger={false}
            />
        </div>
    );
};

export default App;
