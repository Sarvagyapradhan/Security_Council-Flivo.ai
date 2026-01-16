import React from 'react';
import HeroSection from './HeroSection';
import CTIHighlights from './CTIHighlights';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsSection from './TestimonialsSection';
import LifeAtSecurityCouncil from './LifeAtSecurityCouncil';

interface PrevHomeProps {
  onNavigate?: (page: string) => void;
  onBriefingClick?: () => void;
}

const PrevHome: React.FC<PrevHomeProps> = ({ onNavigate, onBriefingClick }) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <CTIHighlights variant="cards-only" onNavigate={onNavigate} />
      <FeaturesSection />
      <WhyChooseUs onBriefingClick={onBriefingClick} />
      <TestimonialsSection />
      <LifeAtSecurityCouncil />
    </>
  );
};

export default PrevHome;

