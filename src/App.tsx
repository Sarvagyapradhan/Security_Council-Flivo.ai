import { useState } from 'react';
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
import WhoWeGuidePage from './components/WhoWeGuidePage';
import OurIntelligencePage from './components/OurIntelligencePage';
import LatestInsightPage from './components/LatestInsightPage';
import EventsPage from './components/EventsPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
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
            <UtilityNav />
            <MainNav currentPage={currentPage} onNavigate={handleNavigate} />
            {renderCurrentPage()}
            <Footer />
        </div>
    );
};

export default App;
