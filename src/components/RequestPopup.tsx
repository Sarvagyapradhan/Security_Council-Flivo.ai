import React, { useState } from 'react';

interface RequestPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestPopup: React.FC<RequestPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    jobTitle: '',
    firstName: '',
    companyName: '',
    lastName: '',
    jobFunction: '',
    phone: '',
    countryRegion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      email: '',
      jobTitle: '',
      firstName: '',
      companyName: '',
      lastName: '',
      jobFunction: '',
      phone: '',
      countryRegion: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const base = import.meta.env.VITE_API_BASE || '';
      const response = await fetch(`${base}/api/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message || 'Failed to submit request');
      }

      setSubmitMessage('Thanks! Our team will reach out shortly.');
      resetForm();

      setTimeout(() => {
        setSubmitMessage(null);
        onClose();
      }, 1500);
    } catch (err: unknown) {
      const message =
        err instanceof Error && err.message ? err.message : 'Something went wrong. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-[920px] bg-[#0050AC] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0050AC" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-10 sm:px-12 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] gap-8 lg:gap-10">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-bold leading-tight tracking-tight lg:whitespace-nowrap">Ready for Clarity Over Assumptions?</h2>
              <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-[340px]">
                We don’t speculate. We reveal what’s already at risk, mapped to the exact threat domains we operate in. Before you act, you need visibility. That’s where we come in.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold">Or give us a call</h3>
                <p className="text-lg sm:text-xl lg:text-[24px] font-semibold">+44 (0) 33 3060 3806</p>
                <div className="text-sm sm:text-base lg:text-[18px] leading-7">
                  <p>8 a.m. – 7 p.m. ET</p>
                  <p>8 a.m. – 5 p.m. GMT</p>
                  <p className="font-semibold">Monday through Friday</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="text-white lg:-ml-4">
              <form onSubmit={handleSubmit} className="mt-20 space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 placeholder-gray-500"
                    required
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 placeholder-gray-500"
                    required
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 placeholder-gray-500"
                    required
                  />
                  <div className="relative">
                    <select
                      name="jobFunction"
                      value={formData.jobFunction}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 appearance-none"
                      aria-label="Job Function"
                      required
                    >
                      <option value="">Job Function</option>
                      <option value="executive">Executive</option>
                      <option value="security">Security</option>
                      <option value="it">IT</option>
                      <option value="operations">Operations</option>
                      <option value="other">Other</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0D2F7A]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.185l3.71-3.954a.75.75 0 011.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 placeholder-gray-500"
                    required
                  />
                  <div className="relative">
                    <select
                      name="countryRegion"
                      value={formData.countryRegion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 rounded-md border border-white/60 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#0D2F7A] text-gray-900 appearance-none"
                      aria-label="Country/Territory/Region"
                      required
                    >
                      <option value="">Country/Territory/Region</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="in">India</option>
                      <option value="other">Other</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0D2F7A]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.185l3.71-3.954a.75.75 0 011.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-1 space-y-2">
                  {submitMessage && (
                    <p className="text-sm text-green-200">{submitMessage}</p>
                  )}
                  {submitError && (
                    <p className="text-sm text-red-200">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-white text-[#0050AC] font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Contact Us'}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPopup;
