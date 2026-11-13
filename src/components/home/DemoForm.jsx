
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Check,
  Sparkles,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

const inputAnimation = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const DemoForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
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
    setIsSubmitted(true);
  };

  const fields = [
    {
      icon: User,
      type: "text",
      placeholder: "Your full name",
      name: "name",
    },
    {
      icon: Mail,
      type: "email",
      placeholder: "Email address",
      name: "email",
    },
    {
      icon: Phone,
      type: "tel",
      placeholder: "10-digit phone number",
      name: "phone",
      pattern: "[0-9]{10}",
    },
  ];

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_25px_100px_-20px_rgba(0,0,0,0.35)]"
      >
        {/* Decorative gradient */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400" />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/80 p-2 text-slate-500 shadow-sm transition hover:rotate-90 hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close form"
        >
          <X size={20} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25 }}
              className="p-7 sm:p-9"
            >
              {/* Header */}
              <div className="mb-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                  <Sparkles size={25} />
                </div>

                <span className="text-xs font-bold tracking-[0.2em] text-emerald-600">
                  LET'S CONNECT
                </span>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                  Request a <span className="text-emerald-600">Demo.</span>
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  See how effortlessly you can create a professional resume.
                  Share your details and we'll get in touch!
                </p>
              </div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.09,
                    },
                  },
                }}
                className="space-y-4"
              >
                {fields.map((field) => {
                  const Icon = field.icon;

                  return (
                    <motion.div
                      key={field.name}
                      variants={inputAnimation}
                      transition={{ duration: 0.35 }}
                      className="group relative"
                    >
                      <Icon
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-emerald-600"
                      />

                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        pattern={field.pattern}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={inputAnimation}
                  className="group relative"
                >
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-4 text-slate-400 transition group-focus-within:text-emerald-600"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us what you're looking for..."
                    rows="3"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />
                </motion.div>

                {/* Submit button */}
                <motion.button
                  variants={inputAnimation}
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:shadow-xl hover:shadow-emerald-600/30"
                >
                  Request My Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.button>
              </motion.form>

              {/* Footer note */}
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={15} className="text-emerald-500" />
                Your information stays private and secure.
              </div>
            </motion.div>
          ) : (
            /* Success screen */
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center px-7 py-12 text-center sm:px-10"
            >
              {/* Animated success icon */}
              <div className="relative mb-7 flex h-28 w-28 items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, delay: 0.1 }}
                  className="absolute inset-0 rounded-full bg-emerald-100"
                />

                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 12,
                    delay: 0.3,
                  }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-xl shadow-emerald-500/30"
                >
                  <Check size={42} strokeWidth={3} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 }}
                >
                  <Sparkles
                    size={25}
                    className="absolute -right-5 -top-1 text-amber-400"
                  />
                  <Sparkles
                    size={20}
                    className="absolute -bottom-2 -left-5 text-emerald-500"
                  />
                </motion.div>
              </div>

              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mb-3 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-700"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Check size={13} />
                  REQUEST RECEIVED
                </span>
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="text-3xl font-extrabold tracking-tight text-slate-900"
              >
                You're All Set!
                <span className="ml-2 inline-block">🎉</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-3 max-w-sm text-sm leading-7 text-slate-500"
              >
                Thank you for your interest! Your demo request has been
                received successfully. We're looking forward to showing
                you what you can create with our platform.
              </motion.p>

              {/* Next step card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="mt-7 w-full rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                    <CalendarCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800">
                      What's next?
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-600">
                      Our team will review your request and reach out to
                      you soon with the next steps.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:shadow-xl"
              >
                Back to Home
                <ArrowRight size={17} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default DemoForm;
