import React, { useState } from 'react';
import EventCard from './EventCard';
import FAQItem from './FAQItem';
import LocationEventFilter from './LocationEventFilter';
import OptimizedImage from './OptimizedImage';

interface EventsPageProps {
  onNavigate?: (page: string, options?: { search?: string }) => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const handleFAQToggle = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const events = [
    {
      id: 1,
      title: "Advanced Threat Intelligence Summit",
      description: "A high-level closed-door session on the latest threat actor movements, data breaches, and intelligence patterns emerging across finance and healthcare sectors. Council-grade insights for executive teams.",
      date: "March 15, 2025",
      location: "The CyberDome, Washington D.C."
    },
    {
      id: 2,
      title: "Advanced Threat Intelligence Summit",
      description: "A high-level closed-door session on the latest threat actor movements, data breaches, and intelligence patterns emerging across finance and healthcare sectors. Council-grade insights for executive teams.",
      date: "March 15, 2025",
      location: "The CyberDome, Washington D.C."
    },
    {
      id: 3,
      title: "Advanced Threat Intelligence Summit",
      description: "A high-level closed-door session on the latest threat actor movements, data breaches, and intelligence patterns emerging across finance and healthcare sectors. Council-grade insights for executive teams.",
      date: "March 15, 2025",
      location: "The CyberDome, Washington D.C."
    }
  ];

  const faqItems = [
    {
      id: "dress-code",
      question: "What's the dress code?",
      answer: "Business formal or business casual is recommended. Choose attire that reflects your professional role, the summit will have senior leaders, media coverage and official photography. If representing your organization, dress accordingly"
    },
    {
      id: "recordings",
      question: "Will session recordings be available?",
      answer: "Yes. All keynotes and select sessions will be recorded and shared with registered participants after the event. Access details will be sent via your registration email."
    },
    {
      id: "student-passes",
      question: "Do you offer student passes?",
      answer: "Yes. A limited number of discounted student passes are available for eligible applicants with a valid student ID. Please review our registration page for details and deadlines."
    },
    {
      id: "meals",
      question: "Are meals included in the ticket?",
      answer: "Yes. Your ticket includes breakfast, lunch and coffee breaks. We also provide vegetarian, vegan and other dietary accommodations, please indicate any requirements during registration."
    },
    {
      id: "sponsor",
      question: "How can I become a sponsor or partner?",
      answer: "We welcome strategic partners aligned with our mission. Please email *********************** to receive the sponsorship prospectus and current opportunities."
    },
    {
      id: "networking",
      question: "Will there be networking opportunities?",
      answer: "Yes. Alongside the sessions, the summit features dedicated networking breaks, private leadership roundtables and an invite-only Executive Reception for deeper dialogue and collaboration."
    },
    {
      id: "location",
      question: "Where is the summit taking place?",
      answer: "The event will be held at McCormick Place Convention Center, Chicago, USA. Venue details and access instructions will be sent to all registered attendees ahead of the summit."
    },
    {
      id: "bring",
      question: "Do I need to bring anything?",
      answer: "Please bring your event confirmation email (QR code) and a government-issued photo ID. Laptops or tablets are optional but recommended for note-taking."
    },
    {
      id: "conduct",
      question: "Is there a code of conduct?",
      answer: "Yes. Security Council events maintain a professional, inclusive and harassment-free environment. All participants are expected to adhere to our Code of Conduct, available on the registration portal."
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[400px] md:min-h-[660px] bg-gradient-to-r from-transparent via-black/80 to-black/80 relative">
        <div className="h-full md:absolute md:inset-0 hero-bg-overlay bg-center bg-cover">
          <div className="relative md:absolute md:left-[113px] max-w-[771px] px-6 pt-12 pb-8 md:pb-10">
            <h1 className="text-white font-bold text-3xl md:text-[56px] leading-tight md:leading-[65px] mb-4 md:mb-6">
              <span className="block">Cyber Leadership 2025:</span>
              <span className="block">Global Benchmark Summit</span>
            </h1>
            <p className="text-white font-normal text-base md:text-[22px] leading-[28px] md:leading-[34px] mb-6 md:mb-8 max-w-[720px]">
              <span className="block">Unite with the world's foremost cyber leaders, intelligence experts</span>
              <span className="block">and policy architects to define the standards, strategies and global</span>
              <span className="block">benchmarks shaping the future of cybersecurity. From national</span>
              <span className="block">defense to enterprise resilience, this is where leadership meets</span>
              <span className="block">intelligence.</span>
            </p>

            {/*Event Details*/}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6 md:mb-8">
              {/* Calendar Icon */}
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M21.334 18.6665V21.5998L23.4673 22.9332" stroke="url(#paint0_linear)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.334 2.6665V7.99984" stroke="url(#paint1_linear)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 10.0002V8.00016C28 7.29292 27.719 6.61464 27.219 6.11454C26.7189 5.61445 26.0406 5.3335 25.3333 5.3335H6.66667C5.95942 5.3335 5.28115 5.61445 4.78105 6.11454C4.28095 6.61464 4 7.29292 4 8.00016V26.6668C4 27.3741 4.28095 28.0524 4.78105 28.5524C5.28115 29.0525 5.95942 29.3335 6.66667 29.3335H11.3333" stroke="url(#paint2_linear)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 13.3335H10.6667" stroke="url(#paint3_linear)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.666 2.6665V7.99984" stroke="url(#paint4_linear)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.334 29.3335C25.7523 29.3335 29.334 25.7518 29.334 21.3335C29.334 16.9152 25.7523 13.3335 21.334 13.3335C16.9157 13.3335 13.334 16.9152 13.334 21.3335C13.334 25.7518 16.9157 29.3335 21.334 29.3335Z" stroke="url(#paint5_linear)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="22.4007" y1="18.6665" x2="22.4007" y2="22.9332" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="21.834" y1="2.6665" x2="21.834" y2="7.99984" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="16" y1="5.3335" x2="16" y2="29.3335" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear" x1="7.33333" y1="13.3335" x2="7.33333" y2="14.3335" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear" x1="11.166" y1="2.6665" x2="11.166" y2="7.99984" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint5_linear" x1="21.334" y1="13.3335" x2="21.334" y2="29.3335" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-bold text-lg">September 7, 2025</span>
              
              {/* Location Icon */}
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M19.9993 29.3334C19.6457 29.3334 19.3066 29.1929 19.0565 28.9428C18.8065 28.6928 18.666 28.3537 18.666 28V22.6667C18.666 22.4472 18.7201 22.2312 18.8236 22.0377C18.9271 21.8441 19.0768 21.6792 19.2593 21.5574L23.2593 18.8907C23.4785 18.7445 23.736 18.6665 23.9993 18.6665C24.2627 18.6665 24.5202 18.7445 24.7393 18.8907L28.7393 21.5574C28.9219 21.6792 29.0716 21.8441 29.1751 22.0377C29.2786 22.2312 29.3327 22.4472 29.3327 22.6667V28C29.3327 28.3537 29.1922 28.6928 28.9422 28.9428C28.6921 29.1929 28.353 29.3334 27.9993 29.3334H19.9993Z" stroke="url(#paint0_linear_location)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.9993 13.3332C23.9993 10.5042 22.8755 7.79109 20.8752 5.7907C18.8748 3.79031 16.1617 2.6665 13.3327 2.6665C10.5037 2.6665 7.7906 3.79031 5.79021 5.7907C3.78982 7.79109 2.66602 10.5042 2.66602 13.3332C2.66602 19.9905 10.0513 26.9238 12.5313 29.0652C12.7625 29.2385 13.0437 29.3321 13.3327 29.3318" stroke="url(#paint1_linear_location)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 29.3335V25.3335" stroke="url(#paint2_linear_location)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.334 17.3335C15.5431 17.3335 17.334 15.5426 17.334 13.3335C17.334 11.1244 15.5431 9.3335 13.334 9.3335C11.1248 9.3335 9.33398 11.1244 9.33398 13.3335C9.33398 15.5426 11.1248 17.3335 13.334 17.3335Z" stroke="url(#paint3_linear_location)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_location" x1="23.9993" y1="18.6665" x2="23.9993" y2="29.3334" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_location" x1="13.3327" y1="2.6665" x2="13.3327" y2="29.3318" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_location" x1="24.5" y1="25.3335" x2="24.5" y2="29.3335" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_location" x1="13.334" y1="9.3335" x2="13.334" y2="17.3335" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-bold text-lg">McCormick Place Convention Center, Chicago, USA</span>
            </div>
             {/*CTA Button*/}
             <button className="flex items-center gap-2 bg-[#0000D3] text-white px-6 py-6 rounded-md hover:bg-blue-800 transition-colors">
              <span className="font-bold text-[24px] leading-[26px]">Explore More</span>
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full bg-white py-6 md:py-10 mt-0 md:mt-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header with Title and Filters */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Title */}
            <div className="flex-1">
              <h2 className="text-[#002856] font-bold text-3xl md:text-4xl lg:text-[41px] leading-tight">
                Upcoming events
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
    <LocationEventFilter
      title="Event type"
      placeholder="Select Event type"
      options={['Conference', 'Workshop', 'Webinar', 'Summit','Training','Meetings','Events']}
    />
    <LocationEventFilter
      title="Location"
      placeholder="Select Location"
      options={['USA', 'UAE', 'CANADA', 'NETHERLANDS','INDIA','GERMANY','JAPAN','AUSTRALIA']}
    />
  </div>
</div>


          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8">
            {events.map((event) => (
              <div key={event.id} className="w-full max-w-sm mx-auto md:max-w-none">
                <EventCard
                  event={event}
                  showViewButton={event.id === 1}
                  onViewResearch={() => {
                    const imagePath = '/images/events/event-card.webp';
                    onNavigate?.('research', { search: `?image=${encodeURIComponent(imagePath)}` });
                  }}
                />
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-[#0000D3] font-bold text-lg">View More</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#0000D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
{/* Why Attend Section */}
  <section className="bg-[#0050AC] py-12 px-6 relative">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start relative z-10">
      {/* Left Column - Text */}
      <div className="lg:col-span-7 flex flex-col gap-6">
      <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
        Why Attend Security Council Events?
      </h2>
      <p className="text-white text-base md:text-lg leading-relaxed">
        Security Council events go beyond the surface. These are not just talks — 
        they're live intelligence briefings, expert-driven sessions, and real-world 
        case studies designed to prepare your team for what's coming next.
      </p>
      <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
        Join security leaders, analysts, and threat researchers sharing verified insights from the field.
      </p>

      <button className="flex items-center gap-2 bg-white text-[#002856] px-4 py-3 rounded-md border-2 border-white hover:bg-gray-100 transition">
        <span className="font-bold text-sm md:text-base">Explore Our Events</span>
        <svg className="w-5 h-5" fill="#002856" viewBox="0 0 24 24">
          <path d="M12 9C11.2 9 10.44 9.32 9.88 9.88C9.32 10.44 9 11.2 9 12C9 12.8 9.32 13.56 9.88 14.12C10.44 14.68 11.2 15 12 15C12.8 15 13.56 14.68 14.12 14.12C14.68 13.56 15 12.8 15 12C15 11.2 14.68 10.44 14.12 9.88C13.56 9.32 12.8 9 12 9Z"/>
        </svg>
      </button>

      
    </div>
     {/* Right Column - Image with decorative offset border */}
     <div className="lg:col-span-5 relative">
       <div className="absolute -right-3 -bottom-3 w-full h-full border-2 border-white/40 rounded-md hidden md:block"></div>
       <OptimizedImage
         src="/images/cta-background-figma.webp"
         alt="Security council meeting"
         className="relative z-10 w-full max-w-md lg:max-w-none rounded-md shadow-lg mx-auto"
       />
     </div>

    {/* Desktop overlay: FAQ heading on the right under the image (does not affect layout flow) */}
    <div className="hidden lg:block absolute right-12 xl:right-16 top-[24rem] xl:top-[28rem] z-10 text-right pointer-events-none">
      <h3 className="text-white font-extrabold tracking-tight text-5xl xl:text-6xl leading-tight">
        Frequently
        <br />
        Asked
        <br />
        Questions
      </h3>
     {/* Outline question marks around the heading with clear gaps */}
     {/* Top-left large */}
     <span className="absolute select-none left-[-110px] top-[-110px] text-[120px] qm-stroke-65">?</span>
     {/* Top-right small */}
     <span className="absolute select-none right-[-24px] top-[-36px] text-[55px] qm-stroke-60">?</span>
     {/* Mid-left medium */}
     <span className="absolute select-none left-[-90px] top-[60px] text-[80px] qm-stroke-55">?</span>
     {/* Bottom-centered largest */}
     <span className="absolute select-none left-1/2 -translate-x-1/2 top-[160px] text-[170px] qm-stroke-70">?</span>
    </div>
    </div>
    {/* FAQ block below (full width) */}
    <div className="max-w-7xl mx-auto mt-8 relative z-10">
      <div className="relative mb-8 lg:hidden">
        <h3 className="text-white font-bold text-4xl md:text-5xl leading-tight text-center">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h3>
        {/* Hide decorative question marks on mobile/tablet to prevent overflow/zoom */}
        <div className="hidden" />
      </div>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openFAQ === item.id}
            onToggle={handleFAQToggle}
          />
        ))}
      </div>
    </div>
  </section>

    </div>
  );
};

export default EventsPage;