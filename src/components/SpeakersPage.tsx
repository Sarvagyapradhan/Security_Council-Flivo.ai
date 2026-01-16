import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import Footer from './Footer';
import ContactPopup from './ContactPopup';

const navigateTo = (path: string) => {
  if (typeof window !== 'undefined') {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};

const SpeakersPage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Page-specific navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-baseline gap-2">
            <button 
              onClick={() => navigateTo('/')}
              className="text-[#002856] text-base font-bold sm:text-lg hover:text-blue-700 transition-colors cursor-pointer"
            >
              Security Council
            </button>
            <span className="text-[#002856]/70 text-xs font-semibold tracking-wide">Events</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <button className="text-sm font-medium text-[#002856] transition-colors hover:text-blue-700" onClick={() => navigateTo('/research')}>
              Overview
            </button>
            <span className="text-sm font-medium text-[#002856] border-b-2 border-[#0000D3] pb-1">
              Speakers
            </span>
            <button className="text-sm font-medium text-[#002856] transition-colors hover:text-blue-700" onClick={() => navigateTo('/agenda')}>
              Agenda
            </button>
          </div>
          <button className="inline-flex items-center gap-2 rounded bg-[#0000D3] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
            Register Now
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
      {/* Spacer to offset fixed nav height */}
      <div className="h-[52px] sm:h-[56px]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#001B3D] speakers-hero-section">
        {/* Background image */}
        <div className="absolute inset-0 speakers-hero-bg" />

        {/* Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <span className="text-white text-[120px] md:text-[180px] lg:text-[220px] font-bold">Security Council</span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center py-8 lg:py-12">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[57%_43%] gap-8 items-center">
              {/* Left Content */}
              <div className="text-white min-w-0 pr-0 lg:pr-8">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <span className="text-[15px] font-medium">September 7, 2025</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mb-8">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[15px] font-medium">McCormick Place Convention Center, Chicago, USA</span>
                </div>

                {/* Title */}
                <h1 className="font-bold leading-[1.18] text-[34px] sm:text-[42px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] mb-5 sm:mb-6">
                  <span className="block lg:inline-block lg:whitespace-nowrap">Cyber Leadership 2025:</span>
                  <br className="hidden lg:block" />
                  <span className="block lg:inline-block lg:whitespace-nowrap">Global Benchmark Summit</span>
                </h1>

                {/* Description */}
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.68] mb-7 sm:mb-8 max-w-[650px]">
                  Unite with the world's foremost cyber leaders, intelligence experts and policy architects to define the standards, strategies and global benchmarks shaping the future of cybersecurity. From national defense to enterprise resilience, this is where leadership meets intelligence.
                </p>

                {/* Register Button */}
                <button className="inline-flex items-center gap-2 rounded-[4px] bg-[#0000D3] px-5 py-[10px] text-[14px] sm:text-[15px] font-bold text-white transition-all hover:bg-blue-800">
                  Register Now
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15L15 5M15 5H7M15 5V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Right Content - Hexagon Grid */}
              <div className="relative hidden lg:flex justify-end items-center h-full">
                <div className="hexagon-container">
                  {/* Row 1 - Top */}
                  <div className="hexagon-row hexagon-row-1">
                    <div className="hexagon-wrapper">
                      <div className="hexagon-inner">
                        <OptimizedImage src="/event_page_components/Speakers/hexagon_image1.webp" alt="Speaker 1" className="hexagon-img" />
                      </div>
                    </div>
                    <div className="hexagon-wrapper">
                      <div className="hexagon-inner">
                        <OptimizedImage src="/event_page_components/Speakers/hexagon_image2.webp" alt="Speaker 2" className="hexagon-img" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - Middle */}
                  <div className="hexagon-row hexagon-row-2">
                    <div className="hexagon-wrapper">
                      <div className="hexagon-inner">
                        <OptimizedImage src="/event_page_components/Speakers/hexagon_image3.webp" alt="Speaker 3" className="hexagon-img" />
                      </div>
                    </div>
                    <div className="hexagon-wrapper">
                      <div className="hexagon-inner">
                        <OptimizedImage src="/event_page_components/Speakers/hexagon_image4.webp" alt="Speaker 4" className="hexagon-img" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3 - Bottom */}
                  <div className="hexagon-row hexagon-row-3">
                    <div className="hexagon-wrapper">
                      <div className="hexagon-inner">
                        <OptimizedImage src="/event_page_components/person2.webp" alt="Speaker 5" className="hexagon-img" />
                      </div>
                    </div>
                    <div className="hexagon-wrapper">
                      <div className="hexagon-inner">
                        <OptimizedImage src="/event_page_components/Speakers/hexagon_image6.webp" alt="Speaker 6" className="hexagon-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Meet Our Speakers */}
      <section className="speakers-section-2">
        <div className="mx-auto max-w-[1426px] px-6 py-12 lg:py-16">
          <h2 className="text-white text-center font-bold text-[32px] lg:text-[40px] mb-10 lg:mb-12">
            Meet Our Speakers
          </h2>

          {/* Speaker Cards Grid */}
          <div className="flex flex-col gap-8">
            {/* Speaker Card 1 - Jane Mitchell */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Section 5/image1.webp" alt="Jane Mitchell" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Jane Mitchell</h3>
                    <p className="speaker-title">A Global Chief Information Security Officer (CISO)</p>
                    <p className="speaker-company">Microsoft</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title">Keynote: <span className="font-bold">Global Cyber Leadership in 2025</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    20+ years in enterprise cybersecurity leadership, overseeing Microsoft's global security posture and strategic defense initiatives. Frequent keynote speaker at RSA, Black Hat, and World Economic Forum.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 2 - Dr. Rajesh Patel */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Speakers/Section 2/person_image2.webp" alt="Dr. Rajesh Patel" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Dr. Rajesh Patel</h3>
                    <p className="speaker-title">Chief executive officer (CEO)</p>
                    <p className="speaker-company">CyberFort Technologies</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title">Fireside Chat: <span className="font-bold">Future of Cyber Regulations & Compliance</span></div>
                    <div className="session-title mt-2">Closing Keynote: <span className="font-bold">The Next Decade of Cyber Leadership</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Renowned cybersecurity strategist specializing in critical infrastructure defense. Holds a Ph.D. in Information Security and has advised governments on national cyber policy.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 3 - Maria Gonzales */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Speakers/Section 2/person_image3.webp" alt="Maria Gonzales" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Maria Gonzales</h3>
                    <p className="speaker-title">Chief Information Security Officer (CISO)</p>
                    <p className="speaker-company">IBM Security</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title"><span className="font-bold">The Evolving Threat Landscape: Insights from 200+ Leaders</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Leader in enterprise security solutions, with extensive experience in managing global threat response teams and designing AI-driven cyber resilience frameworks.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 4 - Thomas Lee */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Speakers/Section 2/person_image4.webp" alt="Thomas Lee" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Thomas Lee</h3>
                    <p className="speaker-title">Chief executive officer (CEO)</p>
                    <p className="speaker-company">Sentinel Cyber Defense</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title">Executive Panel: <span className="font-bold">The CEO-CISO Partnership for Resilient Enterprises</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Cyber defense innovator focusing on AI-powered incident detection and response systems. Formerly led security operations for Fortune 100 companies.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 5 - Amira Khan */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Section 5/image2.webp" alt="Amira Khan" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Amira Khan</h3>
                    <p className="speaker-title">Chief Security Strategist</p>
                    <p className="speaker-company">Palo Alto Networks</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title"><span className="font-bold">Zero Trust in Large Enterprises</span></div>
                    <div className="session-title mt-2">Executive Panel: <span className="font-bold">The CEO-CISO Partnership for Resilient Enterprises</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Cloud security specialist with expertise in Zero Trust architecture. Works with Fortune 500 enterprises to design next-gen security frameworks.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 6 - David Chen */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Speakers/Section 2/person_image6.webp" alt="David Chen" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">David Chen</h3>
                    <p className="speaker-title">Head of Cyber Risk</p>
                    <p className="speaker-company">Google Cloud</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title"><span className="font-bold">AI-Driven Cyber Defense Strategies</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Oversees global cyber risk strategy for Google Cloud, integrating AI and machine learning to combat emerging threats at scale.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 7 - Michael Roberts */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Speakers/Section 2/person_image7.webp" alt="Michael Roberts" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Michael Roberts</h3>
                    <p className="speaker-title">Former CISO</p>
                    <p className="speaker-company">Homeland Security</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title"><span className="font-bold">Cybersecurity ROI: Winning Boardroom Support</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Veteran cybersecurity leader with deep expertise in national security, critical infrastructure protection and public-private cyber partnerships.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 8 - Elena Petrova */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Section 5/image3.webp" alt="Elena Petrova" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Elena Petrova</h3>
                    <p className="speaker-title">VP Cyber Threat Intelligence</p>
                    <p className="speaker-company">Kaspersky Lab</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title"><span className="font-bold">Cybersecurity ROI: Winning Boardroom Support</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Leads global threat intelligence research, specializing in nation-state cyberattack attribution and dark web monitoring.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 9 - Sophia Laurent */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Sophia Laurent</h3>
                    <p className="speaker-title">Chief executive officer (CEO)</p>
                    <p className="speaker-company">CyberSphere Global</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title">Fireside Chat: <span className="font-bold">Future of Cyber Regulations & Compliance</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    International speaker and advocate for diversity in cybersecurity leadership. Known for building cross-border security collaborations.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Card 10 - James Walker */}
            <div className="speaker-card-wrapper">
              <div className="speaker-card-left">
                <div className="speaker-image-container">
                  <OptimizedImage src="/event_page_components/Speakers/Section 2/person_image10.webp" alt="James Walker" className="speaker-image" />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">James Walker</h3>
                    <p className="speaker-title">Chief executive officer (CEO)</p>
                    <p className="speaker-company">SecureWork Consulting</p>
                    <a href="#" className="linkedin-icon" aria-label="LinkedIn Profile">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="speaker-card-right">
                <div className="speaker-card-detail">
                  <div className="speaker-card-header">
                    <div className="session-label">Session:</div>
                    <div className="session-title">Executive Panel: <span className="font-bold">The CEO-CISO Partnership for Resilient Enterprises</span></div>
                  </div>
                  <div className="speaker-card-divider" />
                  <div className="speaker-card-body">
                    Boardroom cyber strategy advisor, helping CEOs and CISOs align cybersecurity with overall business growth and governance goals.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer onContactClick={() => setIsContactOpen(true)} />
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showTrigger={false}
      />
    </div>
  );
};

export default SpeakersPage;

