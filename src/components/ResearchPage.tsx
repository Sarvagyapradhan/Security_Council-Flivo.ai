import React, { useState } from 'react';
import Footer from './Footer';
import ContactPopup from './ContactPopup';
import OptimizedImage from './OptimizedImage';

const navigateTo = (path: string) => {
  if (typeof window !== 'undefined') {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};

const ResearchPage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const heroImage = typeof window !== 'undefined' ? (() => {
    try {
      const p = new URLSearchParams(window.location.search).get('image');
      return p ? decodeURIComponent(p) : null;
    } catch {
      return null;
    }
  })() : null;
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
            <span className="text-sm font-medium text-[#002856] border-b-2 border-[#0000D3] pb-1">Overview</span>
            <button className="text-sm font-medium text-[#002856] transition-colors hover:text-blue-700" onClick={() => navigateTo('/speakers')}>
              Speakers
            </button>
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

      {/* Hero section with layered gradients and background */}
      <section className="relative min-h-[420px] overflow-hidden md:min-h-[620px] bg-gradient-to-b from-[#0A2847] via-[#0B2A4C] to-[#0C1C3E]">
        {/* Background image (supports ?image=... override) */}
        {heroImage ? (
          <OptimizedImage src={heroImage} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" eager />
        ) : (
          <div className="absolute inset-0 research-hero-bg" />
        )}
        {/* Gradient overlays as requested */}
        <div className="absolute inset-0 research-hero-overlays" />

        {/* Right-side grid covering ~30% width */}
        <div className="absolute inset-y-0 right-0 hidden research-right-grid opacity-90 research-right-w md:block" />

        {/* Three person ovals positioned within the right 35% area */}
        <div className="absolute inset-y-0 right-0 z-10 hidden research-right-w research-oval-overlay items-center justify-start pointer-events-none md:flex">
          <div className="research-ovals w-full h-full translate-y-[-3%] md:translate-y-[-14%]">
            <div className="oval oval-sm translate-y-[-6%] md:w-[149px] md:h-[384px]">
              <OptimizedImage src="/event_page_components/person2.webp" alt="Speaker 1" className="w-full h-full object-cover object-[30%_center]" eager />
            </div>
            <div className="oval oval-lg md:w-[149px] md:h-[467px]">
              <OptimizedImage src="/event_page_components/person.webp" alt="Speaker 2" className="w-full h-full object-cover object-[25%_center]" eager />
            </div>
            <div className="oval oval-md translate-y-[-10%] md:w-[149px] md:h-[274px] md:translate-y-[-96px]">
              <OptimizedImage src="/event_page_components/person3.webp" alt="Speaker 3" className="w-full h-full object-cover" eager />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto research-grid-md max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:py-20">
          {/* Left column: text */}
          <div className="max-w-none text-white">
            <div className="max-w-full md:max-w-[720px] lg:max-w-[860px] xl:max-w-[980px]">
            <h1 className="font-bold leading-tight text-[clamp(28px,3.2vw,56px)]">
              Cyber Leadership 2025:
              <br />
              Global Benchmark Summit
            </h1>
            <p className="mt-4 w-full text-[clamp(14px,1.2vw,18px)] leading-relaxed md:mt-6 max-w-[min(820px,66ch)]">
              Unite with the world&apos;s foremost cyber leaders, intelligence experts and policy architects to
              define the standards, strategies and global benchmarks shaping the future of cybersecurity.
              From national defense to enterprise resilience, this is where leadership meets intelligence.
            </p>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0000D3] px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800">
              Register Now
              <svg className="h-5 w-5 -rotate-45" viewBox="0 0 19 20" fill="white" stroke="white" strokeWidth={3}>
                <path d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584239 15.2667 0.67868L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535512 3.87891C0.629954 4.70194 1.37371 5.29258 2.19673 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z" />
              </svg>
            </button>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>September 7, 2025</span>
              </div>
              <div className="flex items-center gap-2">     
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>McCormick Place Convention Center, Chicago, USA</span>
              </div>
            </div>
          </div>

          {/* Right column: artwork */}
          <div className="relative h-[380px] md:h-[520px]" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="section2-bg -mt-1 md:-mt-2 bg-gradient-to-b from-[#0C1C3E] to-[#0F234A]">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-12 sm:px-6 md:flex-row md:py-16">
          {/* Left: Copy */}
          <div className="text-white md:w-7/12">
            <div className="space-y-4 text-[15px] leading-7 text-white/90 md:text-[16px] md:leading-7 lg:text-[17px] lg:leading-8 xl:text-[18px] xl:leading-8 max-w-[720px] md:max-w-[720px] lg:max-w-[760px] xl:max-w-[800px]">
              <p className="max-w-[64ch]">
                Cyber Leadership 2025: Global Benchmark Summit is the definitive cyber leadership
                summit for decision‑makers shaping the next decade of security and intelligence.
              </p>
              <p className="max-w-[64ch]">
                Held at Chicago&apos;s McCormick Place Convention Center on September 7th, 2025, this global
                gathering sets the stage for defining and adopting global cybersecurity standards that
                strengthen national defense, corporate resilience and cross‑border collaboration.
              </p>
              <p className="max-w-[64ch]">
                Attendees will gain access to high‑level intelligence briefings on threat intelligence
                strategies, AI‑powered risk detection and real‑time geopolitical risk analysis. Sessions
                will explore cyber resilience frameworks designed for governments, critical infrastructure
                and enterprise networks facing increasingly complex threats.
              </p>
              <p className="max-w-[64ch]">
                From closed‑door leadership roundtables to benchmark‑setting plenary sessions, the summit
                connects ministers, CISOs, military strategists and industry pioneers to forge a more secure
                and resilient digital future.
              </p>
            </div>
          </div>

          {/* Right: Imagery */}
          <div className="relative md:w-5/12 flex justify-end">
            {/* Foreground large image card positioned to the right */}
            <div className="section2-img-card ar-square w-[260px] sm:w-[300px] md:w-[320px] md:translate-x-[18px] md:translate-y-[12px]">
                <OptimizedImage
                  src="/event_page_components/Section 2/image 2.webp"
                  alt="Keynote hall at cyber summit"
                  className="h-full w-full object-cover"
                />
            </div>
            <div className="mt-4 md:absolute md:bottom-[-190px] md:right-[20px] md:mt-0">
              <div className="section2-img-card ar-5-6 w-[200px] sm:w-[220px] md:w-[240px]">
                <OptimizedImage
                  src="/event_page_components/Section 2/image 3.webp"
                  alt="Panel session at cyber summit"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative section3-bg py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-[32px] font-bold leading-tight text-white md:mb-10 md:text-[44px] drop-shadow">
            What You’ll Gain at Global Benchmark Summit
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-8">
            {/* Card 1 */}
            <div
              className="section3-card relative ar-3-4 section3-card-img1"
            >
              <div className="section3-card-overlay absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="text-lg font-extrabold leading-tight text-white md:text-xl">
                  Global Benchmark Insights
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="section3-card relative ar-3-4 section3-card-img2"
            >
              <div className="section3-card-overlay absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="text-lg font-extrabold leading-tight text-white md:text-xl">
                  Actionable Threat Intelligence
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="section3-card relative ar-3-4 section3-card-img3"
            >
              <div className="section3-card-overlay absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="text-lg font-extrabold leading-tight text-white md:text-xl">
                  Proven Resilience Frameworks
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="section3-card relative ar-3-4 section3-card-img4"
            >
              <div className="section3-card-overlay absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="text-lg font-extrabold leading-tight text-white md:text-xl">
                  Leadership Network Access
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Agenda Preview */}
      <section className="relative section4-bg py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-white text-center font-bold text-[clamp(28px,3.2vw,56px)] mb-8 md:mb-12">
            Agenda Preview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="section4-card">
              <div className="section4-card-frame relative ar-square section4-card-img1">
                <span className="section4-pill">Keynote</span>
                <div className="section4-caption">Global Cyber Leadership in 2025</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="section4-card">
              <div className="section4-card-frame relative ar-square section4-card-img2">
                <span className="section4-pill">Executive Panel</span>
                <div className="section4-caption">The CEO–CISO Partnership for Resilient Enterprises</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="section4-card">
              <div className="section4-card-frame relative ar-square section4-card-img3">
                <span className="section4-pill">Fireside Chat</span>
                <div className="section4-caption">Future of Cyber Regulations & Compliance</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 md:mt-12">
            <a href="/agenda" className="section4-cta">
              Explore Full Agenda
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Speakers */}
      <section className="relative section5-bg py-14 md:py-24">
        {/* Hexagonal vector overlays */}
        <div className="pointer-events-none absolute inset-0 section5-hexes opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-white text-center font-bold text-[clamp(28px,3.2vw,44px)] mb-6">
            Meet The Visionaries
          </h2>
          <div className="flex justify-center mb-10 md:mb-14">
            <button className="section5-button" onClick={() => { window.history.pushState({}, '', '/speakers'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
              Explore Speakers Panel ↗
            </button>
          </div>

          {/* Cards layout */}
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
            {/* Left card */}
            <div className="section5-card text-center text-white md:-translate-y-6 lg:-translate-y-8 md:scale-[0.8] lg:scale-[0.8]">
              <div className="section5-card-frame ar-3-4 section5-img1" />
              <div className="section5-info">
                <div className="section5-name">Jane Mitchell</div>
                <div className="section5-sub">
                  A Global Chief Information<br />Security Officer (CISO)
                </div>
                <div className="section5-company">Microsoft</div>
              </div>
            </div>

            {/* Center card - slightly lower */}
            <div className="section5-card text-center text-white md:translate-y-20 lg:translate-y-28 md:scale-[0.8] lg:scale-[0.8]">
              <div className="section5-card-frame ar-3-4 section5-img3" />
              <div className="section5-info">
                <div className="section5-name">Elena Petrova</div>
                <div className="section5-sub">VP Cyber Threat Intelligence</div>
                <div className="section5-company">Kaspersky Lab</div>
              </div>
            </div>

            {/* Right card */}
            <div className="section5-card text-center text-white md:-translate-y-6 lg:-translate-y-8 md:scale-[0.8] lg:scale-[0.8]">
              <div className="section5-card-frame ar-3-4 section5-img2" />
              <div className="section5-info">
                <div className="section5-name">Amira Khan</div>
                <div className="section5-sub">Chief Security Strategist</div>
                <div className="section5-company">Palo Alto Networks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: The Venue */}
      <section className="relative section6-bg py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-white text-center font-bold text-[clamp(28px,3.2vw,44px)] mb-6 md:mb-8">
            The Venue
          </h2>

          <div className="section6-card-frame section6-ar w-full max-w-[950px] sm:max-w-[1025px] mx-auto">
            <div className="section6-card-img w-full h-full" />
            <div className="section6-card-overlay">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Zm0-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="white"/>
              </svg>
              <span>McCormick Place Convention Center, Chicago, USA</span>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-10">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=McCormick+Place+Convention+Center,+Chicago,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="section6-cta"
            >
              Get Direction ↗
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Get Your Pass (Stage-X) */}
      <section className="relative section7-bg py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left: devices on stage, raw PNGs with transparent bg */}
            <div className="section7-devices-stage">
              <OptimizedImage src="/event_page_components/Section 7/image 1.webp" alt="Laptop with Stage-X" className="section7-laptop section7-laptop-pos" />
              <OptimizedImage src="/event_page_components/Section 7/image 2.webp" alt="Phone with Stage-X" className="section7-phone section7-phone-pos" />
            </div>

            {/* Right: panel with copy and CTA */}
            <div className="section7-panel text-white">
              <h2 className="font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-tight">
                Get Your Pass
              </h2>
              <p className="mt-4 text-white/95 text-[16px] md:text-[17px] leading-relaxed">
                Secure your seats through Stage-X
              </p>
              <div className="mt-6">
                <a
                  href="https://stage-x.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section7-cta"
                >
                  Buy Pass ↗
                </a>
              </div>
              <div className="mt-10">
                <OptimizedImage 
                  src="/event_page_components/Section 7/Stage x logo 1.webp" 
                  alt="Stage X" 
                  className="section7-logo" 
                />
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

export default ResearchPage;


