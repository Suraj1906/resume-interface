
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send } from "lucide-react";

const DemoForm = ({ onClose }) => {
  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yahan baad mein backend API connect kar sakte ho
    alert("Demo request submitted successfully!");

    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Close form"
        >
          <X size={22} />
        </button>

        <div className="mb-6">
          <span className="text-sm font-semibold text-emerald-600">
            REQUEST A DEMO
          </span>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Let's Get Started!
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Fill in your details and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <textarea
            placeholder="Tell us about your requirements..."
            rows="3"
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Submit Request
            <Send size={17} />
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default DemoForm;
