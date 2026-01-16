import React from 'react';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
  const answerId = `faq-answer-${id}`;
  

  return (
    <div className="w-full max-w-[785px] flex flex-col gap-2">
      {/* Question Row */}
      <div className="flex items-stretch gap-2">
        <button 
          onClick={() => onToggle(id)}
          className="flex-1 flex items-center justify-center h-[64px] md:h-[82px] px-4 md:px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
          type="button"
        >
          <span className="text-white font-bold text-base md:text-[22px] leading-[22px] md:leading-[34px] text-center flex-1">
            {question}
          </span>
        </button>
        
        {/* Toggle Button */}
        {isOpen ? (
          <button
            onClick={() => onToggle(id)}
            className="w-[48px] md:w-[59px] h-[64px] md:h-[88px] rounded-lg border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            type="button"
            aria-label="Collapse answer"
            title="Collapse answer"
            aria-expanded="true"
            aria-controls={answerId}
          >
            <div className="w-[24px] h-[24px] md:w-[37px] md:h-[37px] relative flex items-center justify-center transition-transform -rotate-45">
              <div className="w-full h-px bg-white absolute"></div>
              <div className="w-px h-full bg-white absolute transition-opacity opacity-0"></div>
            </div>
          </button>
        ) : (
          <button
            onClick={() => onToggle(id)}
            className="w-[48px] md:w-[59px] h-[64px] md:h-[88px] rounded-lg border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            type="button"
            aria-label="Expand answer"
            title="Expand answer"
            aria-expanded="false"
            aria-controls={answerId}
          >
            <div className="w-[24px] h-[24px] md:w-[37px] md:h-[37px] relative flex items-center justify-center transition-transform">
              <div className="w-full h-px bg-white absolute"></div>
              <div className="w-px h-full bg-white absolute transition-opacity opacity-100"></div>
            </div>
          </button>
        )}
      </div>
      
      {/* Answer Row - Only show when open */}
      <div
        id={answerId}
        className={`flex items-center justify-center px-4 md:px-6 py-4 md:py-6 rounded-lg bg-[#F8F8F8] transition-all ${isOpen ? '' : 'hidden'}`}
        hidden={!isOpen}
      >
        <span className="text-[#002856] font-medium text-sm md:text-[16px] leading-[22px] md:leading-[24px] text-center max-w-[667px]">
          {answer}
        </span>
      </div>
    </div>
  );
};

export default FAQItem;
