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
                return (
                    <>
                        <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-gray-600">Our Intelligence - Coming Soon</h1></div>
                        <CTIHighlights />
                        <FeaturesSection />
                    </>
                );
            case 'who-we-guide':
                return (
                    <>
                        <WhoWeGuidePage />
                        <CTIHighlights />
                        <FeaturesSection />
                    </>
                );
            case 'latest-insight':
                return (
                    <>
                        <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-gray-600">Latest Insight - Coming Soon</h1></div>
                        <CTIHighlights />
                        <FeaturesSection />
                    </>
                );
            case 'briefings':
                return (
                    <>
                        <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-gray-600">Briefings - Coming Soon</h1></div>
                        <CTIHighlights />
                        <FeaturesSection />
                    </>
                );
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
