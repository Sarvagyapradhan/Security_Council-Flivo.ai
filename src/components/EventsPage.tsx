import React, { useState } from 'react';
import EventCard from './EventCard';
import FAQItem from './FAQItem';
import LocationEventFilter from './LocationEventFilter';

const EventsPage: React.FC = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[599px] bg-gradient-to-r from-transparent via-black/80 to-black/80 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-500"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0) 44.46%), url('/images/events/hero-background.jpg')`
          }}
        >
          <div className="absolute left-[113px] top-[74px] max-w-[771px]">
            {/*<h1 className="text-white font-bold text-[56px] leading-[65px] mb-6">
              Cyber Leadership 2025: Global Benchmark Summit
            </h1>
            <p className="text-white font-normal text-[22px] leading-[34px] mb-8 max-w-[720px]">
              Unite with the world's foremost cyber leaders, intelligence experts and policy architects to define the standards, strategies and global benchmarks shaping the future of cybersecurity. From national defense to enterprise resilience, this is where leadership meets intelligence.
            </p>
            */}
             {/*Event Details*/}
            {/*<div className="flex items-center gap-7 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M21.334 18.6665V21.5998L23.4673 22.9332" stroke="url(#paint0_linear_2186_40047)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.334 2.6665V7.99984" stroke="url(#paint1_linear_2186_40047)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28 10.0002V8.00016C28 7.29292 27.719 6.61464 27.219 6.11454C26.7189 5.61445 26.0406 5.3335 25.3333 5.3335H6.66667C5.95942 5.3335 5.28115 5.61445 4.78105 6.11454C4.28095 6.61464 4 7.29292 4 8.00016V26.6668C4 27.3741 4.28095 28.0524 4.78105 28.5524C5.28115 29.0525 5.95942 29.3335 6.66667 29.3335H11.3333" stroke="url(#paint2_linear_2186_40047)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 13.3335H10.6667" stroke="url(#paint3_linear_2186_40047)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.666 2.6665V7.99984" stroke="url(#paint4_linear_2186_40047)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.334 29.3335C25.7523 29.3335 29.334 25.7518 29.334 21.3335C29.334 16.9152 25.7523 13.3335 21.334 13.3335C16.9157 13.3335 13.334 16.9152 13.334 21.3335C13.334 25.7518 16.9157 29.3335 21.334 29.3335Z" stroke="url(#paint5_linear_2186_40047)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_2186_40047" x1="22.4007" y1="18.6665" x2="22.4007" y2="22.9332" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2186_40047" x1="21.834" y1="2.6665" x2="21.834" y2="7.99984" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2186_40047" x1="16" y1="5.3335" x2="16" y2="29.3335" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2186_40047" x1="7.33333" y1="13.3335" x2="7.33333" y2="14.3335" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_2186_40047" x1="11.166" y1="2.6665" x2="11.166" y2="7.99984" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_2186_40047" x1="21.334" y1="13.3335" x2="21.334" y2="29.3335" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-white font-bold text-[22px] leading-[34px]">September 7, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M19.9993 29.3334C19.6457 29.3334 19.3066 29.1929 19.0565 28.9428C18.8065 28.6928 18.666 28.3537 18.666 28V22.6667C18.666 22.4472 18.7201 22.2312 18.8236 22.0377C18.9271 21.8441 19.0768 21.6792 19.2593 21.5574L23.2593 18.8907C23.4785 18.7445 23.736 18.6665 23.9993 18.6665C24.2627 18.6665 24.5202 18.7445 24.7393 18.8907L28.7393 21.5574C28.9219 21.6792 29.0716 21.8441 29.1751 22.0377C29.2786 22.2312 29.3327 22.4472 29.3327 22.6667V28C29.3327 28.3537 29.1922 28.6928 28.9422 28.9428C28.6921 29.1929 28.353 29.3334 27.9993 29.3334H19.9993Z" stroke="url(#paint0_linear_2186_40056)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23.9993 13.3332C23.9993 10.5042 22.8755 7.79109 20.8752 5.7907C18.8748 3.79031 16.1617 2.6665 13.3327 2.6665C10.5037 2.6665 7.7906 3.79031 5.79021 5.7907C3.78982 7.79109 2.66602 10.5042 2.66602 13.3332C2.66602 19.9905 10.0513 26.9238 12.5313 29.0652C12.7625 29.2385 13.0437 29.3321 13.3327 29.3318" stroke="url(#paint1_linear_2186_40056)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 29.3335V25.3335" stroke="url(#paint2_linear_2186_40056)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.334 17.3335C15.5431 17.3335 17.334 15.5426 17.334 13.3335C17.334 11.1244 15.5431 9.3335 13.334 9.3335C11.1248 9.3335 9.33398 11.1244 9.33398 13.3335C9.33398 15.5426 11.1248 17.3335 13.334 17.3335Z" stroke="url(#paint3_linear_2186_40056)" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_2186_40056" x1="23.9993" y1="18.6665" x2="23.9993" y2="29.3334" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2186_40056" x1="13.3327" y1="2.6665" x2="13.3327" y2="29.3318" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2186_40056" x1="24.5" y1="25.3335" x2="24.5" y2="29.3335" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2186_40056" x1="13.334" y1="9.3335" x2="13.334" y2="17.3335" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#999999"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-white font-bold text-[22px] leading-[34px]">McCormick Place Convention Center, Chicago, USA</span>
              </div>
            </div>*/}
            
             {/*CTA Button*/}
            {/*<button className="flex items-center gap-2 bg-[#0000D3] text-white px-6 py-6 rounded-md hover:bg-blue-800 transition-colors">
              <span className="font-bold text-[24px] leading-[26px]">Explore More</span>
              <svg className="w-5 h-5 transform rotate-[-51.546deg]" fill="white" stroke="white" strokeWidth={3} viewBox="0 0 19 20">
                <path d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584239 15.2667 0.67868L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535512 3.87891C0.629954 4.70194 1.37371 5.29258 2.19673 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z" fill="white"/>
              </svg>
            </button>*/}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full h-[768px] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative h-full">
          <div className="absolute left-[72px] top-[52px]">
            <h2 className="text-[#002856] font-bold text-[41px] leading-[48px] mb-12">Upcoming events</h2>
          </div>

          {/* Filters */}
          <div className="absolute right-[35px] top-[22px] flex gap-8">
            <LocationEventFilter
              title="Event type"
              placeholder="Select Event type"
              options={['Conference', 'Workshop', 'Webinar', 'Summit']}
            />
            <LocationEventFilter
              title="Location"
              placeholder="Select Location"
              options={['USA', 'UAE', 'CANADA', 'NETHERLANDS']}
            />
          </div>

          {/* Events Grid */}
          <div className="absolute left-[57px] top-[132px] flex items-center gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* View More */}
          <div className="absolute bottom-[42px] left-1/2 transform -translate-x-1/2 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-[#0000D3] font-bold text-[18px] leading-[18px]">View More</span>
            <svg className="w-4 h-4 transform rotate-90" fill="#0000D3" viewBox="0 0 16 18">
              <path d="M9 1.37207C9 0.819786 8.55228 0.37207 8 0.37207C7.44772 0.37207 7 0.819786 7 1.37207H8H9ZM7.29289 17.0792C7.68342 17.4697 8.31658 17.4697 8.70711 17.0792L15.0711 10.7152C15.4616 10.3247 15.4616 9.69153 15.0711 9.301C14.6805 8.91048 14.0474 8.91048 13.6569 9.301L8 14.9579L2.34315 9.301C1.95262 8.91048 1.31946 8.91048 0.928932 9.301C0.538408 9.69153 0.538408 10.3247 0.928932 10.7152L7.29289 17.0792ZM8 1.37207H7L7 16.3721H8H9L9 1.37207H8Z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="h-[1651px] bg-[#0050AC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative h-full">
          <div className="absolute left-[104px] top-[68px] max-w-[853px]">
            <h2 className="text-white font-bold text-[41px] leading-[50px] mb-8">Why Attend Security Council Events?</h2>
            <p className="text-white font-normal text-[22px] leading-[34px] mb-8">
              Security Council events go beyond the surface. These are not just talks — they're live intelligence briefings, expert-driven sessions, and real-world case studies designed to prepare your team for what's coming next.
            </p>
            <p className="text-white font-bold text-[22px] leading-[34px] mb-8">
              Join security leaders, analysts, and threat researchers sharing verified insights from the field.
            </p>

            <button className="flex items-center gap-2 bg-white text-[#002856] px-4 py-4 rounded border-2 border-white hover:bg-gray-100 transition-colors">
              <span className="font-bold text-[15px] leading-[16px]">Explore Our Events</span>
              <svg className="w-6 h-6" fill="#002856" viewBox="0 0 24 24">
                <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"/>
              </svg>
            </button>
          </div>

          {/* Background Image */}
          <div className="absolute right-[92px] top-[143px] w-[332px] h-[217px] border border-white">
            <img
              src="/images/events/why-attend.jpg"
              alt="Security council meeting"
              className="w-full h-full object-cover shadow-lg transform translate-x-4 -translate-y-4"
            />
          </div>

          {/* FAQ Section Title */}
          <div className="absolute left-[969px] top-[546px] w-[323px] h-[152px]">
            <h3 className="text-white font-bold text-[52px] leading-[50px]">
              <div className="absolute left-0 top-0 w-[276px] h-[50px]">Frequently</div>
              <div className="absolute left-[88px] top-[58px] w-[161px] h-[50px]">Asked</div>
              <div className="absolute left-[122px] top-[108px] w-[262px] h-[50px]">Questions</div>
            </h3>
          </div>

          {/* Decorative Question Marks */}
          <div className="absolute left-[1138px] top-[698px] w-[180px] h-[307px] text-white font-bold text-[319px] leading-[307px] opacity-20 pointer-events-none stroke-white stroke-1" style={{WebkitTextStroke: '1px white'}}>?</div>
          <div className="absolute left-[969px] top-[704px] w-[96px] h-[164px] text-white font-bold text-[170px] leading-[164px] opacity-20 pointer-events-none stroke-white stroke-[0.53px]" style={{WebkitTextStroke: '0.53px white'}}>?</div>
          <div className="absolute left-[1245px] top-[464px] w-[59px] h-[101px] text-white font-bold text-[105px] leading-[101px] opacity-20 pointer-events-none stroke-white stroke-[0.33px]" style={{WebkitTextStroke: '0.33px white'}}>?</div>
          <div className="absolute left-[969px] top-[384px] w-[105px] h-[178px] text-white font-bold text-[185px] leading-[178px] opacity-20 pointer-events-none stroke-white stroke-[0.58px]" style={{WebkitTextStroke: '0.58px white'}}>?</div>

          {/* FAQ Items */}
          <div className="absolute left-[104px] top-[505px] w-[785px] space-y-6">
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
