import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-[1425px] h-[526px] bg-[#1E3A8A] relative">
      {/* Background Image */}
      <img
        src="/hero/background.jpg"
        alt="Security professionals working"
        className="absolute left-[420px] top-0 w-[921px] h-[526px] border-[10px] border-white object-cover"
        style={{ aspectRatio: '7/4' }}
      />
      
      {/* White Overlay Content Box */}
      <div className="absolute left-[62px] top-[84px] w-[945px] h-[364px] bg-white border-l-[20px] border-r-[20px] border-[#3985DE] flex flex-col justify-end items-start gap-8 px-12 py-[50px] pb-7">
        {/* Heading */}
        <h1 className="absolute left-12 top-[50px] w-[849px] h-[180px] text-[#002856] text-[56px] font-bold leading-[60px]">
          Independent Cyber Threat Research. Trusted by Leaders. Backed by Analysts.
        </h1>
        
        {/* Button */}
        <button className="absolute left-12 top-[262px] w-[317px] h-[74px] bg-[#0000D3] text-white flex items-center gap-2 px-6 rounded-md hover:bg-blue-800 transition-colors">
          <span className="text-[23.8px] font-semibold leading-[26px]">View Latest Research</span>
          <svg className="w-5 h-5 transform rotate-[-51.546deg]" fill="white" stroke="white" strokeWidth={3} viewBox="0 0 19 20">
            <path d="M1.82534 16.8982C1.31015 17.547 1.41842 18.4905 2.06717 19.0057C2.71592 19.5209 3.65947 19.4126 4.17466 18.7639L1.82534 16.8982ZM16.9279 1.9979C16.8335 1.17487 16.0897 0.584239 15.2667 0.67868L1.85473 2.21769C1.03171 2.31213 0.441071 3.05589 0.535512 3.87891C0.629954 4.70194 1.37371 5.29258 2.19673 5.19813L14.1185 3.83012L15.4865 15.7519C15.581 16.5749 16.3247 17.1656 17.1477 17.0711C17.9708 16.9767 18.5614 16.2329 18.467 15.4099L16.9279 1.9979ZM3 17.8311L4.17466 18.7639L16.6124 3.10173L15.4377 2.1689L14.2631 1.23607L1.82534 16.8982L3 17.8311Z" fill="white"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
