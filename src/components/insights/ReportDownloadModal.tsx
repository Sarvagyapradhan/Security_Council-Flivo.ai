import React from 'react';

interface ReportDownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const ReportDownloadModal: React.FC<ReportDownloadModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30" onClick={onClose} />

      {/* Modal */}
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
        <h3 className="mb-2 text-xl font-bold text-[#002856]">Get the Full Report</h3>
        <p className="mb-4 text-sm leading-6 text-slate-700">
          Enter your details to receive the complete PDF with methodology, data tables and analyst commentary.
        </p>

        <form className="space-y-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Work Email</label>
            <input type="email" className="w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Company</label>
            <input type="text" className="w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your company" />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
            <button type="submit" className="rounded-md bg-[#0000D3] px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800">Download</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportDownloadModal;



