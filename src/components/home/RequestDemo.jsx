
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CalendarCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

const RequestDemo = ({ onOpen }) => {
  return (
    <motion.section
      id="request-demo"
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 py-20"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 px-6 py-16 text-center text-white shadow-2xl shadow-emerald-600/20 sm:px-12">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-yellow-300" />
            See the magic in action
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Ready to Build Your
            <span className="block text-emerald-100">
              Perfect Resume?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-emerald-50/90 sm:text-base">
            Get a personalized walkthrough of our resume builder and
            discover how effortlessly you can create a professional
            resume that stands out.
          </p>

          {/* Button */}
          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="group mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:bg-emerald-50 hover:shadow-2xl"
          >
            <CalendarCheck size={19} />
            Request Your Free Demo
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </motion.button>

          {/* Trust Points */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-emerald-50/90">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              Free Personalized Demo
            </span>

            <span className="flex items-center gap-2">
              <Zap size={16} />
              Quick & Easy Setup
            </span>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default RequestDemo;
