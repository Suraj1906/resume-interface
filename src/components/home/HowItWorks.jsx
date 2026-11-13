
import React from "react";
import {
  LayoutTemplate,
  FilePenLine,
  Sparkles,
  FileDown,
  ArrowUpRight,
  CheckCircle2,
  WandSparkles,
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Template",
    description:
      "Start building your professional resume with a simple and intuitive resume creation experience.",
    icon: LayoutTemplate,
    miniIcons: [UserRound, GraduationCap],
    features: ["Quick resume setup", "Simple editing experience"],
    color: "emerald",
    badge: "GET STARTED",
  },
  {
    number: "02",
    title: "Build Your Sections",
    description:
      "Add your personal information, education, experience, skills and projects section by section.",
    icon: FilePenLine,
    miniIcons: [BriefcaseBusiness, Code2],
    features: ["Add multiple sections", "Customize your content"],
    color: "blue",
  },
  {
    number: "03",
    title: "Enhance with AI",
    description:
      "Make your resume stand out. Let AI transform your basic content into professional descriptions.",
    icon: Sparkles,
    miniIcons: [WandSparkles, Sparkles],
    features: ["AI content enhancement", "Professional wording"],
    color: "purple",
    featured: true,
  },
  {
    number: "04",
    title: "Preview & Download",
    description:
      "Review your completed resume, make final adjustments and download your job-ready PDF.",
    icon: FileDown,
    miniIcons: [CheckCircle2, FileDown],
    features: ["Live resume preview", "Download PDF"],
    color: "orange",
  },
];

const styles = {
  emerald: {
    icon: "bg-emerald-100 text-emerald-600",
    hover: "hover:from-emerald-50 hover:to-green-100",
    border: "hover:border-emerald-200",
    number: "group-hover:text-emerald-200",
    accent: "bg-emerald-500",
    mini: "bg-emerald-100/80 text-emerald-600",
  },
  blue: {
    icon: "bg-blue-100 text-blue-600",
    hover: "hover:from-blue-50 hover:to-indigo-100",
    border: "hover:border-blue-200",
    number: "group-hover:text-blue-200",
    accent: "bg-blue-500",
    mini: "bg-blue-100/80 text-blue-600",
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    hover: "hover:from-purple-50 hover:to-violet-100",
    border: "hover:border-purple-200",
    number: "group-hover:text-purple-200",
    accent: "bg-purple-500",
    mini: "bg-purple-100/80 text-purple-600",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    hover: "hover:from-orange-50 hover:to-amber-100",
    border: "hover:border-orange-200",
    number: "group-hover:text-orange-200",
    accent: "bg-orange-500",
    mini: "bg-orange-100/80 text-orange-600",
  },
};

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-[110px]" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-green-100/40 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
            <WandSparkles size={16} />
            Simple & Smart Process
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            How It{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            Create a professional resume in four simple steps.
            Build, customize and let AI make your content shine.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;
            const theme = styles[step.color];

            return (
              <div
                key={step.number}
                className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-xl ${theme.hover} ${theme.border}`}
              >

                {/* Top Accent */}
                <div className={`absolute left-0 top-0 h-1 w-0 ${theme.accent} transition-all duration-500 group-hover:w-full`} />

                {/* Featured Badge */}
                {step.featured && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-600">
                    <Sparkles size={12} />
                    AI Powered
                  </div>
                )}

                {/* Number + Main Icon */}
                <div className="mb-8 flex items-center justify-between">

                  <span className={`text-5xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-500 ${theme.number}`}>
                    {step.number}
                  </span>

                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.icon} shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>

                {/* Mini Icons */}
                <div className="mb-6 flex items-center gap-3">
                  {step.miniIcons.map((MiniIcon, index) => (
                    <div
                      key={index}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.mini} transition-transform duration-300 group-hover:-translate-y-1`}
                    >
                      <MiniIcon size={19} strokeWidth={1.8} />
                    </div>
                  ))}
                  <span className="text-xs font-medium text-slate-400">
                    Key features
                  </span>
                </div>

                {/* Features */}
                <div className="mt-auto space-y-3 border-t border-slate-200/70 pt-5">
                  {step.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 flex h-9 w-9 translate-x-2 items-center justify-center rounded-full bg-white text-slate-500 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>

              </div>
            );
          })}

        </div>

        

      </div>
    </section>
  );
};

export default HowItWorks;
