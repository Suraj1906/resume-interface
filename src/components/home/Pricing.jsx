
import React from "react";
import {
  UserRound,
  Crown,
  Check,
  X,
  Sparkles,
  FileText,
  Download,
  WandSparkles,
  Palette,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    subtitle: "Perfect to get started",
    price: "0",
    period: "Forever free",
    icon: UserRound,
    color: "emerald",
    button: "Get Started",
    popular: false,
    features: [
      { name: "1 Resume", included: true, icon: FileText },
      { name: "Basic resume templates", included: true, icon: Palette },
      { name: "Resume preview", included: true, icon: FileText },
      { name: "PDF Download", included: true, icon: Download },
      { name: "AI Content Enhancement", included: false, icon: Sparkles },
      { name: "Unlimited Resumes", included: false, icon: Zap },
    ],
  },
  {
    name: "Pro Plan",
    subtitle: "Everything you need to stand out",
    price: "499",
    period: "Per month",
    icon: Crown,
    color: "pro",
    button: "Upgrade to Pro",
    popular: true,
    features: [
      { name: "Unlimited Resumes", included: true, icon: FileText },
      { name: "Premium Templates", included: true, icon: Palette },
      { name: "Live Resume Preview", included: true, icon: Download },
      { name: "Unlimited PDF Downloads", included: true, icon: Download },
      { name: "AI Content Enhancement", included: true, icon: WandSparkles },
      { name: "Priority Access", included: true, icon: Zap },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-green-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
            <Sparkles size={15} />
            Simple & Transparent Pricing
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Start for free and upgrade whenever you're ready.
            Get everything you need to create a professional resume.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-7 md:grid-cols-2 md:gap-8">

          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPro = plan.popular;

            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-2 sm:p-8 ${
                  isPro
                    ? "border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-green-50 shadow-xl shadow-emerald-100/70"
                    : "border-slate-200 bg-white shadow-sm hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50"
                }`}
              >

                {/* Popular Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-5 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-200">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Icon */}
                <div className="mb-5 flex items-center justify-between">

                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    isPro
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {isPro && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                      <ShieldCheck size={16} />
                      Best Value
                    </div>
                  )}
                </div>

                {/* Plan Details */}
                <h3 className="text-xl font-bold text-slate-800">
                  {plan.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="my-6 flex items-end gap-2">

                  <span className="mb-1 text-2xl font-semibold text-slate-700">
                    ₹
                  </span>

                  <span className={`text-5xl font-extrabold tracking-tight ${
                    isPro ? "text-emerald-600" : "text-slate-800"
                  }`}>
                    {plan.price}
                  </span>

                  <span className="mb-1.5 text-sm text-slate-500">
                    / {plan.period}
                  </span>
                </div>

                <div className="mb-6 h-px bg-slate-200" />

                {/* Features */}
                <div className="mb-8 flex-grow space-y-4">

                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    What's included
                  </p>

                  {plan.features.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div
                        key={feature.name}
                        className="flex items-center gap-3"
                      >
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          feature.included
                            ? isPro
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-400"
                        }`}>
                          <FeatureIcon size={16} />
                        </div>

                        <span className={`flex-1 text-sm ${
                          feature.included
                            ? "font-medium text-slate-700"
                            : "text-slate-400"
                        }`}>
                          {feature.name}
                        </span>

                        {feature.included ? (
                          <Check size={17} className="shrink-0 text-emerald-500" />
                        ) : (
                          <X size={16} className="shrink-0 text-slate-300" />
                        )}
                      </div>
                    );
                  })}

                </div>

                {/* Button */}
                <button
                  type="button"
                  className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isPro
                      ? "bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-lg shadow-emerald-200 hover:-translate-y-0.5 hover:shadow-xl"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {plan.button}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>

              </div>
            );
          })}

        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
          <ShieldCheck size={17} className="text-emerald-500" />
          Simple pricing. No hidden charges.
        </div>

      </div>
    </section>
  );
};

export default Pricing;
