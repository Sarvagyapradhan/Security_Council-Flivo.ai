import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface WhoWeGuidePageProps {
  onNavigate?: (page: string) => void;
}

const WhoWeGuidePage: React.FC<WhoWeGuidePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[220px] bg-cover bg-center bg-no-repeat overflow-hidden sm:h-[260px] md:h-[300px] xl:h-[356px] who-we-guide-hero">
        <div className="absolute left-20 -top-10 hidden h-[526px] w-[805px] items-center justify-center bg-white/10 xl:flex">
          {/*<h1 className="text-[#002856] text-[56px] font-bold leading-[65px] w-[771px] text-left px-7">
            We Don't Serve the Industry. We Guide Its Decision-Makers.
          </h1>*/}
        </div>
      </section>

      {/* Main Content Section - Mobile/Tablet */}
      <section className="xl:hidden w-full bg-white">
        {/* Intro */}
        <div className="mx-auto max-w-4xl px-4 py-10 text-[#002856]">
          <h2 className="mb-4 text-3xl font-bold leading-snug">Cyber Intelligence Designed for Decision-Makers</h2>
          <p className="mb-4 text-lg leading-8">
            <span className="font-bold">Security Council</span> works upstream, before the breach, before the alert, before the exposure. We guide those responsible for understanding risk at its root: the executives, analysts and security teams who make decisions when noise isn't an option.
          </p>
          <p className="text-lg leading-8">
            This isn't just about services. It's about clarity, timing and knowing who needs to see what and when.
          </p>
        </div>

        {/* Security Operations & Incident Response Teams (Mobile) */}
        <MobileAudienceSection
          title="Security Operations & Incident Response Teams:"
          paragraphs={[
            
            'We provide them with upstream threat intelligence: actor patterns, breach entry paths and infrastructure clues that sharpen prioritization and accelerate containment.',
            'When timelines collapse, our guidance delivers the signal before the chaos.',
          ]}
          images={{ frontSrc: '/images/Who We guide Page-2a.webp', backSrc: '/images/Who We guide Page-2b.webp' }}
          imagePosition="left"
        />

        {/* Executives & Cybersecurity Leaders (Mobile) */}
        <MobileAudienceSection
          title="Executives & Cybersecurity Leaders:"
          paragraphs={[
            "They don't need dashboards. They need clarity. We guide CISOs, CTOs and senior security heads through exposures that aren't yet public and decisions that can't wait for alerts.",
            'From zero-day visibility to adversary intent, our intelligence supports high-stakes risk judgment, not post-breach reaction.',
          ]}
          images={{ frontSrc: '/images/Who We guide Page-1a.webp', backSrc: '/images/Who We guide Page-1b.webp' }}
          imagePosition="right"
        />

        {/* Threat Researchers & Intelligence Analysts (Mobile) */}
        <MobileAudienceSection
          title="Threat Researchers & Intelligence Analysts:"
          paragraphs={[
            'For teams who hunt threats before they materialize, depth matters. We work with researchers, CTI analysts and red teams to expose evolving TTPs, adversary overlaps and the weak links others miss.',
            "This is not generic feed intel, it's targeted, mapped and high-fidelity.",
          ]}
          images={{ frontSrc: '/images/Who We guide Page-3a.webp', backSrc: '/images/Who We guide Page-3b.webp' }}
          imagePosition="left"
        />
      </section>

      {/* Main Content Section - Desktop */}
      <section className="relative hidden w-full bg-white xl:block xl:h-[1870px]">
        {/* Background Blue Rectangles */}
        <div className="absolute right-[177px] top-[131px] w-[97px] h-[239px] bg-[#0050AC]"></div>
        <div className="absolute right-[63px] top-[182px] w-[97px] h-[239px] bg-[#0050AC]"></div>
        <div className="absolute right-[298px] top-[177px] w-[97px] h-[239px] bg-[#0050AC]"></div>

        {/* Background Image Shadows */}
        <div className="absolute right-[248px] top-[198px] w-20 h-[213px] bg-black/70 blur-[4.5px]"></div>
        <div className="absolute right-[172px] top-[149px] w-20 h-[213px] bg-black/70 blur-[4.5px]"></div>
        <div className="absolute right-[59px] top-[197px] w-[54px] h-[208px] bg-black/70 blur-[4.5px]"></div>

        {/* Background Images */}
        <OptimizedImage className="absolute right-[295px] top-[154px] w-[90px] h-[245px] border-2 border-white"
          src="/who-we-guide/team/member-portrait-1.webp" alt="" />
        <OptimizedImage className="absolute right-[60px] top-[156px] w-[90px] h-[245px] border-2 border-white"
          src="/who-we-guide/team/member-portrait-2.webp" alt="" />
        <OptimizedImage className="absolute right-[174px] top-[108px] w-[90px] h-[245px] border-2 border-white"
          src="/who-we-guide/team/member-portrait-3.webp" alt="" />

        {/* Main Text Content */}
        <div className="absolute left-[88px] top-[70px]">
          <h2 className="text-[#002856] text-[41px] font-bold leading-[48px] mb-8 w-[1025px]">
            Cyber Intelligence Designed for Decision-Makers
          </h2>
          
          <p className="text-[#002856] text-[22px] leading-[34px] mb-8 w-[906px]">
            <span className="font-bold">Security Council</span> works upstream, before the breach, before the alert, before the exposure.
            We guide those responsible for understanding risk at its root: the executives, analysts and security teams who make decisions when noise isn't an option.
          </p>
          
          <p className="text-[#002856] text-[22px] leading-[34px] w-[906px]">
            This isn't just about services.
            It's about clarity, timing and knowing who needs to see what and when.
          </p>
        </div>

        {/* Target Audience Sections Container */}
        <div className="absolute left-0 top-[413px] w-full flex flex-col gap-2">
          {/* Security Operations & Incident Response Teams */}
          <div className="relative w-full h-[439px]">
            <div className="absolute left-0 top-[47px] w-full h-[314px] bg-[#0050AC]"></div>
            
            {/* Left Images - Animated pair from Figma assets */}
            <AnimatedOpsImagePair />

            <div className="absolute left-[613px] top-[80px] text-left">
              <h3 className="text-white text-[20px] font-bold leading-[30px] mb-4 w-[900px]">
                Security Operations & Incident Response Teams:
              </h3>
              <p className="text-white text-[20px] leading-[32px] mb-4 w-[900px]">
                We provide them with upstream threat intelligence: actor patterns,<br />
                breach entry paths and infrastructure clues that sharpen prioritization<br />
                and accelerate containment.
              </p>
              <p className="text-white text-[20px] leading-[32px] w-[900px]">
                When timelines collapse, our guidance delivers the signal before the<br />
                chaos.
              </p>
            </div>
          </div>

          {/* Executives & Cybersecurity Leaders */}
          <div className="relative w-full h-[467px]">
            <div className="absolute left-0 top-[61px] w-full h-[323px] bg-[#0050AC]"></div>
            
            {/* Right Images - Animated pair from Figma assets */}
            <AnimatedExecImagePair />

            <div className="absolute left-[88px] top-[93px]">
              <h3 className="text-white text-[20px] font-bold leading-[30px] mb-4 w-[900px] text-left">
                Executives & Cybersecurity Leaders:
              </h3>
              <p className="text-white text-[20px] leading-[32px] mb-4 w-[900px]">
                They don't need dashboards. They need clarity. We guide CISOs, CTOs<br />
                and senior security heads through exposures that aren't yet public and<br />
                decisions that can't wait for alerts.
              </p>
              <p className="text-white text-[20px] leading-[32px] w-[900px]">
                From zero-day visibility to adversary intent, our intelligence supports<br />
                high-stakes risk judgment, not post-breach reaction.
              </p>
            </div>
          </div>

          {/* Threat Researchers & Intelligence Analysts */}
          <div className="relative w-full h-[465px]">
            <div className="absolute left-0 top-20 w-full h-[308px] bg-[#0050AC]"></div>
            
            {/* Left Images - Positioned outside viewport */}
            {/*<div className="absolute -left-[615px] top-0 w-[325px] h-[328px]">
              <div className="absolute -left-px top-0 w-[276px] h-[313px] bg-black/70 blur-[32px]"></div>
              <img className="absolute left-0 top-0 w-[290px] h-[328px] border-2 border-white" 
                src="/who-we-guide/team/member-portrait-1.webp" alt="" />
              <div className="absolute left-1 top-0.5 w-[268px] h-[324px] bg-black/10 backdrop-blur-sm"></div>
            </div>*/}
            
            {/*<div className="absolute -left-[465px] top-[138px] w-[297px] h-[327px]">
              <div className="absolute left-0 top-3.5 w-[276px] h-[313px] bg-black/70 blur-[32px]"></div>
              <img className="absolute left-[21px] top-0 w-[276px] h-[313px] border-2 border-white" 
                src="/who-we-guide/team/member-portrait-2.webp" alt="" />
              <div className="absolute left-[25px] top-1 w-[268px] h-[304px] bg-black/10 backdrop-blur-sm"></div>
            </div> */}

            {/* Left Images - Animated pair from Figma assets */}
            <AnimatedResearchersImagePair />

            <div className="absolute left-[613px] top-[130px] text-left">
              <h3 className="text-white text-[20px] font-bold leading-[30px] mb-4 w-[900px]">
                Threat Researchers & Intelligence Analysts:
              </h3>
              <p className="text-white text-[20px] leading-[32px] mb-4 w-[900px]">
                For teams who hunt threats before they materialize, depth matters.<br />
                We work with researchers, CTI analysts and red teams to expose evolving<br />
                TTPs, adversary overlaps and the weak links others miss.
              </p>
              <p className="text-white text-[20px] leading-[32px] w-[900px]">
                This is not generic feed intel, it's targeted, mapped and high-fidelity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reputational Stakes Section - Mobile */}
      <section className="xl:hidden bg-[#0050AC] px-4 py-12">
        <div className="mx-auto max-w-4xl text-white">
          <h2 className="mb-6 text-3xl font-bold leading-snug">When the stakes are reputational, not just technical. Exposure becomes a matter of timing and trust.</h2>
          <p className="mb-6 text-lg leading-8">We guide advisory boards, compliance heads and risk committees across industries where context matters most, from financial services and healthcare to critical infrastructure, SaaS, defense and more</p>
          <p className="mb-8 text-lg font-semibold leading-8">This is intelligence that clarifies not just what happened, but what could.</p>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded border-2 border-white bg-white px-5 py-4 font-semibold text-[#002856] transition-colors hover:bg-gray-100 sm:w-auto">Request Private Assessment</button>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/40 shadow-lg">
            <OptimizedImage src="/who-we-guide/backgrounds/reputational-stakes.webp" alt="Reputational stakes" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Reputational Stakes Section - Desktop */}
      <section className="relative hidden h-[518px] bg-[#0050AC] xl:block">
        <div className="absolute left-[110px] top-[43px]">
          <h2 className="text-white text-[41px] font-bold leading-[50px] mb-8 w-[1053px]">
            When the stakes are reputational, not just technical. Exposure becomes a matter
            of timing and trust.
          </h2>
          
          <p className="text-white text-[22px] leading-[34px] mb-8 w-[853px]">
            We guide advisory boards, compliance heads and risk committees across industries
            where context matters most, from financial services and healthcare to critical
            infrastructure, SaaS, defense and more
          </p>
          
          <p className="text-white text-[22px] font-bold leading-[34px] mb-12 w-[785px]">
            This is intelligence that clarifies not just what happened, but what could.
          </p>
          
          <button className="inline-flex items-center gap-2 bg-white text-[#002856] px-4 py-4 rounded border-2 border-white font-bold text-[15px] hover:bg-gray-50 transition-colors w-[284px] h-[58px]">
            <span>Request Private Assessment</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 26 26">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.49658 4.11867C10.6947 2.81759 11.7932 2.1665 13 2.1665C14.2068 2.1665 15.3053 2.8165 17.5034 4.11867L18.2466 4.5585C20.4447 5.86067 21.5432 6.51175 22.1466 7.58317C22.75 8.65567 22.75 9.95567 22.75 12.56V13.4397C22.75 16.0429 22.75 17.3451 22.1466 18.4165C21.5432 19.4879 20.4447 20.139 18.2466 21.4401L17.5034 21.881C15.3053 23.1821 14.2068 23.8332 13 23.8332C11.7932 23.8332 10.6947 23.1832 8.49658 21.881L7.75342 21.4401C5.55533 20.1401 4.45683 19.4879 3.85342 18.4165C3.25 17.344 3.25 16.044 3.25 13.4397V12.56C3.25 9.95567 3.25 8.65459 3.85342 7.58317C4.45683 6.51175 5.55533 5.86067 7.75342 4.5585L8.49658 4.11867ZM14.0833 17.3332C14.0833 17.6205 13.9692 17.896 13.766 18.0992C13.5629 18.3024 13.2873 18.4165 13 18.4165C12.7127 18.4165 12.4371 18.3024 12.234 18.0992C12.0308 17.896 11.9167 17.6205 11.9167 17.3332C11.9167 17.0459 12.0308 16.7703 12.234 16.5671C12.4371 16.364 12.7127 16.2498 13 16.2498C13.2873 16.2498 13.5629 16.364 13.766 16.5671C13.9692 16.7703 14.0833 17.0459 14.0833 17.3332ZM13 6.77067C13.2155 6.77067 13.4222 6.85627 13.5745 7.00865C13.7269 7.16102 13.8125 7.36768 13.8125 7.58317V14.0832C13.8125 14.2987 13.7269 14.5053 13.5745 14.6577C13.4222 14.8101 13.2155 14.8957 13 14.8957C12.7845 14.8957 12.5778 14.8101 12.4255 14.6577C12.2731 14.5053 12.1875 14.2987 12.1875 14.0832V7.58317C12.1875 7.36768 12.2731 7.16102 12.4255 7.00865C12.5578 6.85627 12.7845 6.77067 13 6.77067Z"/>
            </svg>
          </button>
        </div>
        
        {/* Background Image */}
        <div className="absolute right-[98px] top-[179px] w-[332px] h-[217px] border border-white"></div>
        <OptimizedImage className="absolute right-[82px] top-[164px] w-[332px] h-[217px] shadow-lg"
          src="/who-we-guide/backgrounds/reputational-stakes.webp" alt="" />
      </section>

      {/* Featured Articles Section - Responsive */}
      <section className="bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Article 1 */}
            <div className="group relative flex h-[400px] flex-col overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition-transform hover:scale-[1.02] sm:h-[450px] lg:h-[550px]" 
              style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/who-we-guide/articles/ai-powered-threats.webp')` }}>
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[32px] lg:leading-[38px]">
                    The Rise of AI-Powered Threats: What Security Teams Need to Know
                  </h3>
                  <button 
                    onClick={() => onNavigate?.('ai-threats')}
                    className="inline-flex items-center gap-2 self-start text-base font-bold text-white transition-colors hover:text-gray-200 sm:text-lg cursor-pointer">
                    <span>See Key Take-Aways</span>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 19 20">
                      <path stroke="currentColor" strokeWidth="3" d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584237 15.2667 0.678679L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535513 3.87891C0.629954 4.70194 1.37371 5.29257 2.19674 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group relative flex h-[400px] flex-col overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition-transform hover:scale-[1.02] sm:h-[450px] lg:h-[550px]" 
              style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/who-we-guide/articles/emerging-threat-actor.webp')` }}>
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[32px] lg:leading-[38px]">
                    How CISOs Can Respond to Emerging Threat Actor Activity in Under 24 Hours
                  </h3>
                  <button 
                    onClick={() => onNavigate?.('threat-actor')}
                    className="inline-flex items-center gap-2 self-start text-base font-bold text-white transition-colors hover:text-gray-200 sm:text-lg cursor-pointer">
                    <span>Download Guide</span>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 19 20">
                      <path stroke="currentColor" strokeWidth="3" d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584237 15.2667 0.678679L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535513 3.87891C0.629954 4.70194 1.37371 5.29257 2.19674 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group relative flex h-[400px] flex-col overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition-transform hover:scale-[1.02] sm:h-[450px] lg:h-[550px]" 
              style={{ backgroundImage: `url('/who-we-guide/articles/threat-intelligence-methodology.webp')` }}>
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <div>
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[32px] lg:leading-[38px]">
                    Where Threat Intelligence Turns Into Real-World Action
                  </h3>
                  <button 
                    onClick={() => onNavigate?.('threat-intelligence')}
                    className="inline-flex items-center gap-2 self-start text-base font-bold text-white transition-colors hover:text-gray-200 sm:text-lg cursor-pointer">
                    <span>Join Our Next Briefing</span>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 19 20">
                      <path stroke="currentColor" strokeWidth="3" d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584237 15.2667 0.678679L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535513 3.87891C0.629954 4.70194 1.37371 5.29257 2.19674 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeGuidePage;

// Mobile helpers
interface MobileAudienceSectionProps {
  title: string;
  paragraphs: string[];
  images: { frontSrc: string; backSrc: string };
  imagePosition: 'left' | 'right';
}

const MobileAudienceSection: React.FC<MobileAudienceSectionProps> = ({
  title,
  paragraphs,
  images,
  imagePosition,
}) => {
  const image = (
    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
      <MobileImagePair frontSrc={images.frontSrc} backSrc={images.backSrc} />
    </div>
  );

  return (
    <article className="mx-auto mb-8 flex max-w-4xl flex-col gap-6 rounded-3xl bg-[#0050AC] p-6 text-white shadow-lg sm:p-8">
      {imagePosition === 'left' && image}
      <div className="space-y-4 text-base leading-7 sm:text-lg sm:leading-8">
        <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {imagePosition === 'right' && image}
    </article>
  );
};

const MobileImagePair: React.FC<{ frontSrc: string; backSrc: string }> = ({ frontSrc, backSrc }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-48 w-40 sm:h-56 sm:w-48" aria-hidden>
      <OptimizedImage
        src={backSrc}
        alt=""
        loading="lazy"
        className={`absolute left-6 top-8 h-36 w-24 rounded-2xl object-cover shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out sm:h-44 sm:w-28 ${
          inView ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
        }`}
      />
      <OptimizedImage
        src={frontSrc}
        alt=""
        loading="lazy"
        className={`absolute left-0 top-0 h-40 w-28 rounded-2xl border-2 border-white object-cover shadow-[0_16px_32px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out sm:h-48 sm:w-32 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      />
    </div>
  );
};

function AnimatedExecImagePair(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute right-[170px] top-[-10px] w-[460px] h-[420px] overflow-visible pointer-events-none"
      aria-hidden
    >
      {/* Back image (b), lower-right and slightly smaller */}
      <OptimizedImage
        src="/images/Who We guide Page-1b.webp"
        alt=""
        className={`${inView ? 'translate-x-0 opacity-100' : 'translate-x-28 opacity-0'}
          transition-transform duration-[900ms] ease-out absolute left-[150px] top-[120px] w-[352px] h-[352px] object-cover z-10 drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
      />

      {/* Front image (a), upper-left and above */}
      <OptimizedImage
        src="/images/Who We guide Page-1a.webp"
        alt=""
        className={`${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
          transition-transform duration-[700ms] ease-out absolute left-[0px] top-[-20px] w-[376px] h-[376px] object-cover z-20 drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
      />
    </div>
  );
}

function AnimatedOpsImagePair(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-[88px] top-[10px] w-[460px] h-[420px] overflow-visible pointer-events-none"
      aria-hidden
    >
      {/* Back image (2b) */}
      <OptimizedImage
        src="/images/Who We guide Page-2b.webp"
        alt=""
        className={`${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
          transition-transform duration-[900ms] ease-out absolute left-[150px] top-[70px] w-[360px] h-[370px] object-cover z-30 drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]`}
      />

      {/* Front image (2a) */}
      <OptimizedImage
        src="/images/Who We guide Page-2a.webp"
        alt=""
        className={`${inView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
          transition-transform duration-[700ms] ease-out absolute left-[20px] top-[-20px] w-[360px] h-[360px] object-cover z-10 drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
      />
    </div>
  );
}

function AnimatedResearchersImagePair(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-[88px] top-[10px] w-[460px] h-[420px] overflow-visible pointer-events-none"
      aria-hidden
    >
      {/* Back image (3b) */}
      <OptimizedImage
        src="/images/Who We guide Page-3b.webp"
        alt=""
        className={`${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
          transition-transform duration-[900ms] ease-out absolute left-[150px] top-[90px] w-[360px] h-[370px] object-cover z-30 drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]`}
      />

      {/* Front image (3a) */}
      <OptimizedImage
        src="/images/Who We guide Page-3a.webp"
        alt=""
        className={`${inView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
          transition-transform duration-[700ms] ease-out absolute left-[20px] top-[-20px] w-[360px] h-[360px] object-cover z-10 drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
      />
    </div>
  );
}
