import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      desc: "Sign up and access your workspace instantly.",
    },
    {
      step: "02",
      title: "Create Projects",
      desc: "Organize your work into projects.",
    },
    {
      step: "03",
      title: "Manage Tasks",
      desc: "Assign tasks, priorities and deadlines.",
    },
    {
      step: "04",
      title: "Track Progress",
      desc: "Monitor productivity with analytics.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-100 py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              How It Works
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl dark:text-white">
              Manage your work in 4 simple steps
            </h2>

            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              TeamFlow makes project management simple, fast and organized.
            </p>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[30px] hidden h-px bg-slate-300 lg:block dark:bg-slate-700" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-[30px] hidden h-px origin-left bg-blue-600 lg:block"
          />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Step marker */}
                <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-slate-300 bg-slate-100 font-mono text-sm font-bold text-slate-500 transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:group-hover:border-blue-600 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                  {item.step}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>

                {/* Small progress indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-1 w-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Step {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
