import { useEffect, useState } from 'react';
import UtilityNav from './components/UtilityNav';
import MainNav from './components/MainNav';
import CTIHighlights from './components/CTIHighlights';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import RequestPopup from './components/RequestPopup';
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
import Insight9Page from './components/insights/Insight9Page';
import ThreatIntelligencePage from './components/ThreatIntelligencePage';
import ResearchPage from './components/ResearchPage';
import SpeakersPage from './components/SpeakersPage';
import AgendaPage from './components/AgendaPage';
import RequestLandingPage from './components/RequestLandingPage';
import Seo from './components/Seo';
import Home from './components/Home';
import PrevHome from './components/PrevHome';
import NewIntelligentPage from './components/NewIntelligentPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isAtTop, setIsAtTop] = useState(true);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isBriefingOpen, setIsBriefingOpen] = useState(false);

    useEffect(() => {
        setIsAtTop(true);
    }, []);

    const handleNavigate = (page: string, options?: { search?: string }) => {
        setCurrentPage(page);

        if (typeof window !== 'undefined') {
            const basePath = page === 'home' ? '/' : `/${page}`;
            const targetPath = `${basePath}${options?.search ?? ''}`;
            if (window.location.pathname + window.location.search !== targetPath) {
                window.history.pushState({ page }, '', targetPath);
            }
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };

    // Sync pseudo-route from URL path for deep links and programmatic navigations
    useEffect(() => {
        const syncFromLocation = () => {
            const path = (typeof window !== 'undefined' ? window.location.pathname : '/') || '/';
            const page = path.replace(/^\//, '') || 'home';
            setCurrentPage(page);
        };
        syncFromLocation();
        window.addEventListener('popstate', syncFromLocation);
        return () => window.removeEventListener('popstate', syncFromLocation);
    }, []);


    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'prev-home':
                return <PrevHome onNavigate={handleNavigate} onBriefingClick={() => setIsBriefingOpen(true)} />;
            case 'our-intelligence':
                return <OurIntelligencePage />;
            case 'who-we-guide':
                return (
                    <>
                        <WhoWeGuidePage onNavigate={handleNavigate} />
                        <CTIHighlights variant="grid-only" onNavigate={handleNavigate} />
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
            case 'insight-9':
                return <Insight9Page />;
            case 'events':
                return <EventsPage onNavigate={handleNavigate} />;
            case 'ai-threats':
                return <AIThreatsPage />;
            case 'threat-actor':
                return <ThreatActorPage />;
            case 'threat-intelligence':
                return <ThreatIntelligencePage />;
            case 'research':
                return <ResearchPage />;
            case 'speakers':
                return <SpeakersPage />;
            case 'agenda':
                return <AgendaPage />;
            case 'request':
                return <RequestLandingPage />;
            case 'new-intelligent':
                return <NewIntelligentPage />;
            default:
                return <Home />;
        }
    };

    const titles: Record<string, { t: string; d: string }> = {
        home: { t: 'Security Council – Intelligence That Clarifies', d: 'Independent Cyber Threat Research. Trusted by Leaders. Backed by Analysts.' },
        'prev-home': { t: 'Previous Home – Security Council', d: 'Objective research intelligence and executive guidance to act with confidence.' },
        'our-intelligence': { t: 'Our Intelligence – Security Council', d: 'Explore our methodology, threat domains, and how we deliver clarity.' },
        'who-we-guide': { t: 'Who We Guide – Security Council', d: 'We guide boards, CISOs, and leaders where context matters most.' },
        'latest-insight': { t: 'Latest Insights – Security Council', d: 'Read our latest research, briefings, and cyber threat insights.' },
        events: { t: 'Events – Security Council', d: 'Upcoming and past events, briefings, and research presentations.' },
        'ai-threats': { t: 'AI Threats – Security Council', d: 'Analysis of AI-powered threats and real-world exposure.' },
        'threat-actor': { t: 'Threat Actor Research – Security Council', d: 'Profiles and assessments of emerging threat actors.' },
        'threat-intelligence': { t: 'Threat Intelligence – Security Council', d: 'Intelligence services and reporting to inform executive action.' },
        research: { t: 'Research – Security Council', d: 'Deep-dive research with evidence-driven findings and context.' },
        speakers: { t: 'Speakers – Security Council', d: 'Meet our speakers and subject-matter experts.' },
        agenda: { t: 'Agenda – Security Council', d: 'Event agenda and session details.' },
        request: { t: 'Request a Briefing – Security Council', d: 'Request a confidential executive briefing from Security Council.' },
        'new-intelligent': { t: 'New Intelligent – Security Council', d: 'Explore Security Council intelligence and newsletter resources.' },
    };

    const currentMeta = titles[currentPage] ?? titles.home;

    return (
        <div className="min-h-screen bg-white">
            <Seo title={currentMeta.t} description={currentMeta.d} />
            {currentPage !== 'research' && currentPage !== 'speakers' && currentPage !== 'agenda' && (
                <>
                    {currentPage !== 'home' && <UtilityNav />}
                    <MainNav
                        currentPage={currentPage}
                        onNavigate={handleNavigate}
                        isAtTop={currentPage === 'home' ? false : isAtTop}
                        onThreatReportClick={() => setIsBriefingOpen(true)}
                    />
                </>
            )}
            {renderCurrentPage()}
            {currentPage !== 'research' && currentPage !== 'speakers' && currentPage !== 'agenda' && currentPage !== 'request' && (
                <>
                    <Footer onContactClick={() => setIsContactOpen(true)} />
                    <ContactPopup
                        isOpen={isContactOpen}
                        onClose={() => setIsContactOpen(false)}
                        showTrigger={false}
                    />
                    <RequestPopup
                        isOpen={isBriefingOpen}
                        onClose={() => setIsBriefingOpen(false)}
                    />
                </>
            )}
        </div>
    );
};

export default App;
