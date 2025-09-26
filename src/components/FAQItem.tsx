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
    <div className="w-[785px] flex flex-col gap-2">
      {/* Question Row */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onToggle(id)}
          className="flex-1 flex items-center justify-center h-[82px] px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
          type="button"
        >
          <span className="text-white font-bold text-[22px] leading-[34px] text-center flex-1">
            {question}
          </span>
        </button>
        
        {/* Toggle Button */}
        {isOpen ? (
          <button
            onClick={() => onToggle(id)}
            className="w-[59px] h-[88px] rounded-lg border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            type="button"
            aria-label="Collapse answer"
            title="Collapse answer"
            aria-expanded="true"
            aria-controls={answerId}
          >
            <div className="w-[37px] h-[37px] relative flex items-center justify-center transition-transform -rotate-45">
              <div className="w-[37px] h-px bg-white absolute"></div>
              <div className="w-px h-[37px] bg-white absolute transition-opacity opacity-0"></div>
            </div>
          </button>
        ) : (
          <button
            onClick={() => onToggle(id)}
            className="w-[59px] h-[88px] rounded-lg border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            type="button"
            aria-label="Expand answer"
            title="Expand answer"
            aria-expanded="false"
            aria-controls={answerId}
          >
            <div className="w-[37px] h-[37px] relative flex items-center justify-center transition-transform">
              <div className="w-[37px] h-px bg-white absolute"></div>
              <div className="w-px h-[37px] bg-white absolute transition-opacity opacity-100"></div>
            </div>
          </button>
        )}
      </div>
      
      {/* Answer Row - Only show when open */}
      <div
        id={answerId}
        className={`flex items-center justify-center px-6 py-6 rounded-lg bg-[#F8F8F8] transition-all ${isOpen ? '' : 'hidden'}`}
        hidden={!isOpen}
      >
        <span className="text-[#002856] font-medium text-[16px] leading-[24px] text-center max-w-[667px]">
          {answer}
        </span>
      </div>
    </div>
  );
};

export default FAQItem;
