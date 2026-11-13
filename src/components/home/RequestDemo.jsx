
import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  UserRound,
  Mail,
  Phone,
  BriefcaseBusiness,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  FileText,
  WandSparkles,
  Palette,
  X,
  Clock,
  Star,
  CircleCheck,
  AlertCircle,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  message: "",
};

const RequestDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Open modal from anywhere on Home page
  useEffect(() => {
    const openDemo = () => {
      setFormData(initialForm);
      setErrors({});
      setSuccess(false);
      setIsOpen(true);
    };

    window.addEventListener("open-demo-modal", openDemo);

    return () => {
      window.removeEventListener("open-demo-modal", openDemo);
    };
  }, []);

  // Lock background scroll + Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape" && !loading) {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, loading]);

  // Open Modal
  const openModal = () => {
    setFormData(initialForm);
    setErrors({});
    setSuccess(false);
    setIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    if (loading) return;

    setIsOpen(false);

    setTimeout(() => {
      setFormData(initialForm);
      setErrors({});
      setSuccess(false);
    }, 300);
  };

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.role) {
      newErrors.role = "Please select your current role";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Frontend demo simulation.
    // Replace with your backend API call.
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setIsOpen(false);

        setTimeout(() => {
          setFormData(initialForm);
          setErrors({});
          setSuccess(false);
        }, 300);

      }, 2500);

    }, 1200);
  };

  // Input Styles
  const inputClass = (field) =>
    `w-full rounded-xl border bg-slate-50/80 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
      errors[field]
        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:border-indigo-400 focus:ring-indigo-100"
    }`;

  // Error Component
  const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
        <AlertCircle size={13} />
        {message}
      </p>
    );
  };

  return (
    <>
      {/* ===================================== */}
      {/* REQUEST DEMO CTA SECTION */}
      {/* ===================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-indigo-50/40 py-20 sm:py-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-200/40 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white px-6 py-12 text-center shadow-[0_15px_60px_rgba(30,41,59,0.06)] sm:px-12 sm:py-16">

            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-violet-100/60 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-100/70 blur-[80px]" />

            <div className="relative z-10">

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-lg shadow-violet-200">
                <WandSparkles size={30} />
              </div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600 sm:text-sm">
                <Sparkles size={15} />
                Let's Explore Together
              </div>

              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
                Ready to Build Your{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Dream Resume?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Discover a smarter way to create professional resumes.
                Request a personalized demo and explore the power of AI-powered
                resume building.
              </p>

              <button
                type="button"
                onClick={openModal}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/80"
              >
                <Sparkles size={18} />
                Request a Free Demo
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-400">

                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-emerald-500" />
                  No commitment required
                </span>

                <span className="flex items-center gap-1.5">
                  <Zap size={15} className="text-amber-500" />
                  Quick & Easy Setup
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ===================================== */}
      {/* MODAL POPUP */}
      {/* ===================================== */}

      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-md animate-[fadeIn_0.3s_ease-out] sm:p-6"
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/30 bg-white shadow-2xl animate-[modalIn_0.35s_ease-out]"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              disabled={loading}
              aria-label="Close demo form"
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-500 shadow-md transition-all duration-200 hover:rotate-90 hover:bg-red-50 hover:text-red-500 disabled:opacity-50 sm:right-5 sm:top-5"
            >
              <X size={21} />
            </button>

            <div className="grid lg:grid-cols-5">

              {/* LEFT INFORMATION PANEL */}
              <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#172554] via-[#312E81] to-[#4F46A5] p-8 text-white sm:p-10 lg:col-span-2 lg:flex">

                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

                <div className="relative z-10">

                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
                    <FileText size={28} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[3px] text-indigo-200">
                    Your Career, Your Story
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                    Build a Resume That
                    <span className="mt-1 block bg-gradient-to-r from-cyan-300 to-violet-200 bg-clip-text text-transparent">
                      Opens Doors.
                    </span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-indigo-100/80">
                    Experience a smarter way to build resumes with powerful
                    tools and AI assistance.
                  </p>

                  <div className="mt-10 space-y-7">

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                        <Zap size={21} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Create in Minutes</h4>
                        <p className="mt-1 text-xs text-indigo-200">
                          Build professional resumes effortlessly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                        <WandSparkles size={21} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">AI-Powered Writing</h4>
                        <p className="mt-1 text-xs text-indigo-200">
                          Make every section sound professional.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                        <Palette size={21} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Beautiful Templates</h4>
                        <p className="mt-1 text-xs text-indigo-200">
                          Design a resume that stands out.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="relative z-10 mt-10 border-t border-white/15 pt-6">
                  <div className="flex gap-1 text-amber-300">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star key={item} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-medium">
                    Make your first impression unforgettable.
                  </p>
                </div>

              </div>


              {/* RIGHT FORM PANEL */}
              <div className="relative p-5 sm:p-9 lg:col-span-3 lg:p-10">

                {/* Mobile Heading */}
                <div className="mb-6 flex items-center gap-3 pr-10 lg:hidden">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
                    <WandSparkles size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Request a Demo</h3>
                    <p className="text-xs text-slate-500">
                      Let's build something great!
                    </p>
                  </div>
                </div>

                {success ? (

                  /* SUCCESS SCREEN */
                  <div className="flex min-h-[470px] flex-col items-center justify-center py-10 text-center">

                    <div className="relative mb-8 flex h-28 w-28 items-center justify-center">

                      <div className="absolute inset-0 animate-ping rounded-full bg-emerald-100/70" />
                      <div className="absolute inset-2 rounded-full bg-emerald-100" />

                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-xl shadow-emerald-200">
                        <CheckCircle2 size={38} />
                      </div>

                      <Sparkles className="absolute -right-1 top-1 text-amber-400" size={23} />
                      <Sparkles className="absolute -left-2 bottom-3 text-violet-400" size={19} />

                    </div>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600">
                      <CircleCheck size={15} />
                      SUCCESSFULLY SUBMITTED
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">
                      You're All Set, {formData.name.split(" ")[0]}!
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                      Thank you for your interest! Your demo request has been
                      submitted successfully. We're excited to connect with you.
                    </p>

                    <div className="mt-8 w-full max-w-sm rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-blue-50 p-5 text-left">

                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                          <Mail size={19} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-slate-500">
                            Email provided
                          </p>
                          <p className="break-all text-sm font-semibold text-slate-700">
                            {formData.email}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                          <Clock size={19} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">
                            Request Status
                          </p>
                          <p className="text-sm font-semibold text-emerald-600">
                            Successfully submitted
                          </p>
                        </div>
                      </div>

                    </div>

                    <p className="mt-7 text-xs text-slate-400">
                      Returning to homepage shortly...
                    </p>

                  </div>

                ) : (

                  <>
                    {/* Form Heading */}
                    <div className="mb-7">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <MessageSquare size={20} />
                      </div>

                      <h3
                        id="demo-modal-title"
                        className="text-2xl font-bold text-slate-800"
                      >
                        Let's Talk!
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Fill in your details to request your personalized demo.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>

                      {/* NAME + EMAIL */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>

                          <div className="relative">
                            <UserRound size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-indigo-400" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={inputClass("name")}
                            />
                          </div>

                          <ErrorMessage message={errors.name} />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Email Address <span className="text-red-500">*</span>
                          </label>

                          <div className="relative">
                            <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-violet-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className={inputClass("email")}
                            />
                          </div>

                          <ErrorMessage message={errors.email} />
                        </div>

                      </div>

                      {/* PHONE + ROLE */}
                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Phone Number <span className="text-red-500">*</span>
                          </label>

                          <div className="relative">
                            <Phone size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sky-500" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={(e) => {
                                const value = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);

                                setFormData((prev) => ({
                                  ...prev,
                                  phone: value,
                                }));

                                setErrors((prev) => ({
                                  ...prev,
                                  phone: "",
                                }));
                              }}
                              placeholder="10-digit mobile number"
                              className={inputClass("phone")}
                            />
                          </div>

                          <ErrorMessage message={errors.phone} />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Current Role <span className="text-red-500">*</span>
                          </label>

                          <div className="relative">
                            <BriefcaseBusiness size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-500" />

                            <select
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              className={`appearance-none ${inputClass("role")}`}
                              style={{ paddingLeft: "2.75rem" }}
                            >
                              <option value="">Select your role</option>
                              <option value="Student">Student</option>
                              <option value="Job Seeker">Job Seeker</option>
                              <option value="Working Professional">Working Professional</option>
                              <option value="Recruiter">Recruiter</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <ErrorMessage message={errors.role} />
                        </div>

                      </div>

                      {/* MESSAGE */}
                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Your Message <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                          <MessageSquare size={17} className="absolute left-3.5 top-4 text-violet-400" />

                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            maxLength={500}
                            placeholder="Tell us what you'd like to explore..."
                            className={`resize-none ${inputClass("message")}`}
                          />
                        </div>

                        <div className="mt-1 flex items-center justify-between">
                          <ErrorMessage message={errors.message} />
                          <span className="ml-auto text-xs text-slate-400">
                            {formData.message.length}/500
                          </span>
                        </div>
                      </div>

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Submitting Request...
                          </>
                        ) : (
                          <>
                            Request My Demo
                            <Send size={17} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      {/* Privacy */}
                      <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                        <ShieldCheck size={15} className="text-emerald-500" />
                        Your information is safe and secure.
                      </div>

                    </form>
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestDemo;
