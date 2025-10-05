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
                        <WhoWeGuidePage />
                        <CTIHighlights />
                        <FeaturesSection />
                    </>
                );
            case 'latest-insight':
                return <LatestInsightPage />;
            case 'events':
                return <EventsPage />;
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
