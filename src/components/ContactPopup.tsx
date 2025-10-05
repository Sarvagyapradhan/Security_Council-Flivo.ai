import React, { useState } from "react";
// Replacing external icon dependency to avoid missing module issues

type ContactPopupProps = {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  showTrigger?: boolean;
};

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onOpen, onClose, showTrigger = true }) => {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const open = typeof isOpen === "boolean" ? isOpen : localOpen;

  const handleOpen = () => {
    if (onOpen) {
      onOpen();
    } else {
      setLocalOpen(true);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setLocalOpen(false);
    }
  };

  return (
    <>
      {showTrigger && (
        <button
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-md" />
          <div className="relative z-10 w-[92%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-200">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[30%] h-48 md:h-[560px]">
                <img
                  src="/contact-bg.jpg"
                  alt="Analyst at workstation"
                  loading="lazy"
                  className="h-full w-full object-cover [object-position:22%_center] sm:[object-position:28%_center] md:[object-position:38%_center] lg:[object-position:42%_center]"
                />
              </div>

              <div className="w-full md:w-[70%] bg-[#0050AC] text-white p-6 relative md:h-[560px] flex flex-col">
                <button
                  onClick={handleClose}
                  aria-label="Close contact form"
                  className="absolute top-4 right-4 bg-white/90 text-[#0050AC] rounded-full p-1 shadow hover:bg-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Ready for Clarity Over Assumptions?
                  </h2>
                  <p className="text-sm md:text-base mb-8 text-blue-100">
                    We don’t speculate. We reveal what’s already at risk, mapped to the exact
                    threat domains we operate in. Before you act, you need visibility. That’s where
                    we come in.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Form submitted!");
                    }}
                    className="space-y-4"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email ID"
                      className="w-full p-3 rounded-md bg-white text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Enter your Company Name"
                      className="w-full p-3 rounded-md bg-white text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                    <div className="flex shadow-sm rounded-md overflow-hidden">
                      <span className="bg-gray-100 text-gray-700 px-4 flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Phone No"
                        className="w-full p-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex bg-white text-[#0050AC] font-semibold px-5 py-2.5 rounded-md hover:bg-gray-100 transition text-sm"
                      >
                        Contact Us
                        <span className="ml-2">→</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
