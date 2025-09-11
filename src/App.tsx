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

const App = () => (
    <div className="min-h-screen bg-white">
        <UtilityNav />
        <MainNav />
        <HeroSection />
        <CTIHighlights />
        <NewsletterSignup />
        <FeaturesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <LifeAtSecurityCouncil />
        <Footer />
    </div>
);

export default App;
