import React from "react";

interface TimelineClockProps {
  time?: string;
  subtitle?: string;
}

const TimelineClock: React.FC<TimelineClockProps> = ({ time = "09:20", subtitle }) => (
  <div className="agenda-section3__clock">
    <img
      src="/event_page_components/Agenda/Section 3/Ellipse 28.png"
      alt="Clock outer ring"
      className="agenda-section3__clock-base"
    />
    <img
      src="/event_page_components/Agenda/Section 3/Rectangle 95.png"
      alt="Clock tick"
      className="agenda-section3__clock-accent"
    />
    <span className="agenda-section3__clock-time">{time}</span>
    {subtitle ? (
      <>
        <span className="agenda-section3__clock-divider" aria-hidden="true" />
        <span className="agenda-section3__clock-subtime">{subtitle}</span>
      </>
    ) : null}
  </div>
);

export default TimelineClock;
