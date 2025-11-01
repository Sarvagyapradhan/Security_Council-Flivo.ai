import React from 'react';
import OptimizedImage from './OptimizedImage';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

interface EventCardProps {
  event: Event;
  showViewButton?: boolean;
  onViewResearch?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, showViewButton = false, onViewResearch }) => {
  return (
    <div className="w-[419px] h-[550px] relative overflow-hidden group transition-transform duration-300 ease-out hover:-translate-y-3">
      {/* Main Event Image */}
      <OptimizedImage
        src="/images/events/event-card.webp"
        alt={event.title}
        className="w-[418px] h-[550px] object-cover absolute left-0 top-0 transition-transform duration-500 ease-out group-hover:scale-105"
        eager
      />
      
      {/* Date/Location Header */}
      <div className="absolute left-0 top-[30px] w-[418px] h-[88px] bg-[#0050AC] border border-white shadow-lg flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-2">
        <div className="flex items-center gap-1 mb-1">
          <svg className="w-8 h-8" viewBox="0 0 33 32" fill="none">
            <path d="M26.5 3.5H24V3C24 2.60218 23.842 2.22064 23.5607 1.93934C23.2794 1.65804 22.8978 1.5 22.5 1.5C22.1022 1.5 21.7206 1.65804 21.4393 1.93934C21.158 2.22064 21 2.60218 21 3V3.5H12V3C12 2.60218 11.842 2.22064 11.5607 1.93934C11.2794 1.65804 10.8978 1.5 10.5 1.5C10.1022 1.5 9.72064 1.65804 9.43934 1.93934C9.15804 2.22064 9 2.60218 9 3V3.5H6.5C5.83696 3.5 5.20107 3.76339 4.73223 4.23223C4.26339 4.70107 4 5.33696 4 6V26C4 26.663 4.26339 27.2989 4.73223 27.7678C5.20107 28.2366 5.83696 28.5 6.5 28.5H26.5C27.163 28.5 27.7989 28.2366 28.2678 27.7678C28.7366 27.2989 29 26.663 29 26V6C29 5.33696 28.7366 4.70107 28.2678 4.23223C27.7989 3.76339 27.163 3.5 26.5 3.5ZM9 6.5C9 6.89782 9.15804 7.27936 9.43934 7.56066C9.72064 7.84196 10.1022 8 10.5 8C10.8978 8 11.2794 7.84196 11.5607 7.56066C11.842 7.27936 12 6.89782 12 6.5H21C21 6.89782 21.158 7.27936 21.4393 7.56066C21.7206 7.84196 22.1022 8 22.5 8C22.8978 8 23.2794 7.84196 23.5607 7.56066C23.842 7.27936 24 6.89782 24 6.5H26V9.5H7V6.5H9ZM7 25.5V12.5H26V25.5H7Z" fill="white"/>
          </svg>
          <span className="text-white font-normal text-[22px] leading-[34px]">{event.date}</span>
        </div>
        <span className="text-white font-normal text-[22px] leading-[34px] text-center px-4">{event.location}</span>
      </div>

      {/* Content Overlay */}
      <div className="absolute left-0 top-[289px] w-[418px] h-[261px] border border-white bg-gradient-to-b from-blue-900/10 to-blue-900/30 shadow-lg flex flex-col items-center justify-center text-center px-6 py-8 transition-all duration-300 ease-out group-hover:top-[262px] group-hover:h-[300px]">
        <div className="flex flex-col items-center gap-4 max-w-[374px]">
          <h3 className="text-white font-bold text-[32px] leading-[38px]">
            {event.title}
          </h3>
          <p className="text-white font-normal text-[16px] leading-[25px]">
            {event.description}
          </p>
          {showViewButton && (
            <button
              className="mt-2 inline-flex items-center gap-3 rounded-md bg-[#0000D3] px-6 py-4 font-bold text-white text-[18px] leading-[22px] transition-all duration-300 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:bg-blue-800"
              onClick={onViewResearch}
            >
              <span>View Latest Research</span>
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 10L10 6M7 6H10V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
