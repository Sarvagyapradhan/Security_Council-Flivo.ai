import React, { useState } from 'react';
import Footer from './Footer';
import ContactPopup from './ContactPopup';
import './AgendaPage.css';
import TimelineClock from './TimelineClock';
import OptimizedImage from './OptimizedImage';

const navigateTo = (path: string) => {
  if (typeof window !== 'undefined') {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};

const AgendaPage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
            <button className="text-sm font-medium text-[#002856] transition-colors hover:text-blue-700" onClick={() => navigateTo('/research')}>Overview</button>
            <button className="text-sm font-medium text-[#002856] transition-colors hover:text-blue-700" onClick={() => navigateTo('/speakers')}>Speakers</button>
            <span className="text-sm font-medium text-[#002856] border-b-2 border-[#0000D3] pb-1">Agenda</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded bg-[#0000D3] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
            Register Now
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Spacer to offset fixed nav height */}
      <div className="h-[52px] sm:h-[56px]" />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#0A2847] text-white">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/event_page_components/Agenda/background.webp"
              alt="Summit background"
              className="h-full w-full object-cover"
              eager
            />
            <div className="absolute inset-0 agenda-page__gradient-overlay" />
          </div>

          {/* Centered hollow semi-ring */}
          <div className="agenda-hero__semi-ring" aria-hidden="true">
            <div className="agenda-hero__semi-ring-inner">
              <div className="agenda-hero__semi-ring-core">
                <div className="agenda-hero__semi-ring-nucleus" />
              </div>
            </div>
          </div>

          {/* Right-side arcs and circular thumbnails matching Frame 92 layout */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden lg:block">
            {/* Outer ring thumbnails */}
            <div className="agenda-hero__thumb agenda-hero__outer-thumb1">
              <OptimizedImage src="/event_page_components/Agenda/outer1.webp" alt="Outer ring participant 1" eager className="h-full w-full object-cover" />
            </div>
            <div className="agenda-hero__thumb agenda-hero__outer-thumb2">
              <OptimizedImage src="/event_page_components/Agenda/outer2.webp" alt="Outer ring participant 2" eager className="h-full w-full object-cover" />
            </div>
            <div className="agenda-hero__thumb agenda-hero__outer-thumb3">
              <OptimizedImage src="/event_page_components/Agenda/outer3.webp" alt="Outer ring participant 3" eager className="h-full w-full object-cover" />
            </div>

            {/* Inner ring thumbnails */}
            <div className="agenda-hero__thumb agenda-hero__inner-thumb1">
              <OptimizedImage src="/event_page_components/Agenda/mid1.webp" alt="Inner ring participant 1" eager className="h-full w-full object-cover" />
            </div>
            <div className="agenda-hero__thumb agenda-hero__inner-thumb2">
              <OptimizedImage src="/event_page_components/Agenda/mid2.webp" alt="Inner ring participant 2" eager className="h-full w-full object-cover" />
            </div>
            <div className="agenda-hero__thumb agenda-hero__inner-thumb3">
              <OptimizedImage src="/event_page_components/Agenda/mid3.webp" alt="Inner ring participant 3" eager className="h-full w-full object-cover" />
            </div>
            <div className="agenda-hero__thumb agenda-hero__inner-thumb4">
              <OptimizedImage src="/event_page_components/Agenda/mid4.webp" alt="Inner ring participant 4" eager className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="relative z-[2] mx-auto flex w-full max-w-[1426px] min-h-[781px] flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
            <div className="w-full space-y-6 lg:basis-[60%] xl:basis-[56%]">
              <h1 className="text-[36px] font-bold leading-[1.2] sm:text-[44px] lg:text-[56px] xl:text-[60px]">
                Cyber Leadership 2025:<br />Global Benchmark Summit
              </h1>
              <div className="flex flex-col gap-3 text-[16px] text-white sm:text-[17px]">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="font-medium">September 7, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="font-medium">McCormick Place Convention Center, Chicago, USA</span>
                </div>
              </div>
              <div className="mt-2">
                <button className="inline-flex items-center gap-2 rounded-md border-2 border-[#2D4BFF] bg-[#2D4BFF] px-6 py-3 text-[15px] font-bold text-white transition-all hover:bg-[#4961FF] hover:shadow-lg">
                  Register Now
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15L15 5M15 5H7M15 5V13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Spacer for layout on large screens to avoid text overlap with right graphic */}
            <div className="hidden lg:block lg:basis-[40%] xl:basis-[44%]" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="relative w-full overflow-hidden bg-[#0A2847]">
          {/* Background image */}
          <div className="absolute inset-0">
            <OptimizedImage
              src="/event_page_components/Agenda/Section 2/background.webp"
              alt="Event audience background"
              className="h-full w-full object-cover"
              eager
            />
            <div className="absolute inset-0 agenda-section2__gradient-overlay" />
          </div>

          {/* Right-side decorative pattern */}
          <OptimizedImage
            src="/event_page_components/Agenda/Section 2/Pattern Container.webp"
            alt="Decorative pattern"
            className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-auto max-w-none"
            eager
          />

          {/* Content */}
          <div className="relative z-[2] mx-auto flex h-[605px] w-full max-w-[1426px] items-center justify-between px-6 sm:px-8">
            {/* Left copy panel */}
            <div className="agenda-section2__text-card w-full max-w-[880px] rounded-2xl p-6 sm:p-10">
              <h2 className="text-[28px] font-extrabold leading-tight text-white sm:text-[36px] md:text-[42px]">
                Where Leadership Shapes Global Security Standards
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/90 sm:text-[16px] md:text-[18px]">
                <p>
                  No vendor pitches. No fluff. Just intelligence-led strategies from the
                  world's foremost cyber leaders.
                </p>
                <p>
                  Explore the full-day agenda designed for ministers, CISOs, policy advisors and
                  enterprise security chiefs. From high-stakes keynotes to peer-to-peer leadership
                  panels, every session delivers actionable insights for defining the future of cybersecurity.
                </p>
                <p>
                  Arrive prepared to challenge assumptions. Leave with frameworks, intelligence and alliances
                  to lead with authority.
                </p>
              </div>
            </div>

            {/* Right image card */}
            <figure className="ml-6 hidden shrink-0 sm:block">
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-xl">
                <OptimizedImage
                  src="/event_page_components/Agenda/Section 2/card image.webp"
                  alt="McCormick Place Convention Center, Chicago"
                  className="block h-[280px] w-[360px] object-cover sm:h-[300px] sm:w-[380px]"
                />
                {/* Caption overlay */}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-3 text-sm text-white">
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-none text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                    </svg>
                    McCormick Place Convention Center, Chicago, USA
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* Section 3 */}
        <section className="relative w-full overflow-hidden bg-[#0A2847]">
          {/* Background image */}
          <div className="absolute inset-0">
            <OptimizedImage
              src="/event_page_components/Agenda/Section 3/background.webp"
              alt="Agenda schedule background"
              className="h-full w-full object-cover"
              eager
            />
            <div className="absolute inset-0 agenda-section3__gradient-overlay" />
          </div>

          {/* Content */}
          <div className="relative z-[2] mx-auto w-full max-w-[1426px] px-6 py-12 sm:px-8 pb-16">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-[48px] font-bold leading-tight text-white mb-2">
                Cyber Leadership 2025 Agenda
              </h2>
              <p className="text-[18px] text-white/70">
                7 September 7, 2025
              </p>
            </div>

            {/* Timeline Items */}
            <div className="space-y-4">
              {/* Timeline Item 1 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="09:00" subtitle="09:20" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Opening Ceremony & Welcome Address</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Host</div>
                    <div className="agenda-section3__host-value">Organizing Committee</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="09:20" subtitle="10:05" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Keynote: Global Cyber Leadership in 2025</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Keynote</div>
                    <div className="agenda-section3__host-value">Dr. Sarah Mitchell</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="10:00" subtitle="10:40" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">The Evolving Threat Landscape: Insights from 200+ Leaders</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Panel</div>
                    <div className="agenda-section3__host-value">Industry Experts</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="10:40" subtitle="11:10" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Networking Coffee Break</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Break</div>
                    <div className="agenda-section3__host-value">-</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="11:10" subtitle="11:55" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">AI-Driven Cyber Defense Strategies</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Workshop</div>
                    <div className="agenda-section3__host-value">Marcus Chen</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 6 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="11:50" subtitle="12:30" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Executive Panel: The CISO-CHRO Partnership for Resilient Enterprises</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Panel</div>
                    <div className="agenda-section3__host-value">C-Suite Leaders</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 7 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="12:30" subtitle="01:30" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Lunch Break & Expo Networking</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Break</div>
                    <div className="agenda-section3__host-value">-</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 8 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="01:30" subtitle="02:10" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Zero Trust in Large Enterprises</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Case Study</div>
                    <div className="agenda-section3__host-value">Jennifer Park</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 9 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="02:10" subtitle="02:50" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Nation-State Threat Intelligence: 2025 Update</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Briefing</div>
                    <div className="agenda-section3__host-value">Intelligence Team</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 10 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="02:50" subtitle="03:20" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Coffee & Networking Break</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Break</div>
                    <div className="agenda-section3__host-value">-</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 11 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="03:20" subtitle="04:00" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Cybersecurity ROI: Winning Boardroom Support</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Workshop</div>
                    <div className="agenda-section3__host-value">Finance & Security Leads</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 13 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="04:40" subtitle="05:10" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Closing Keynote: The Next Decade of Cyber Leadership</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Keynote</div>
                    <div className="agenda-section3__host-value">Admiral Rebecca Torres</div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 14 */}
              <div className="flex items-center gap-6 w-full text-white">
                <TimelineClock time="05:10" subtitle="06:10" />
                <div className="agenda-section3__connector"></div>
                <div className="agenda-section3__timeline-box">
                  <div className="agenda-section3__event-info">
                    <h3 className="text-[22px] font-semibold">Networking Cocktail & Closing Remarks</h3>
                  </div>
                  <div className="agenda-section3__format-box">
                    <div className="agenda-section3__format-label">Format</div>
                    <div className="agenda-section3__format-value">Networking</div>
                    <div className="agenda-section3__host-value">All Attendees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onContactClick={() => setIsContactOpen(true)} />
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showTrigger={false}
      />
    </div>
  );
};

export default AgendaPage;
