import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Stats = () => {
  const stats = [
    { value: 150, suffix: "+", label: "Projects Managed" },
    { value: 12, suffix: "K+", label: "Tasks Completed" },
    { value: 300, suffix: "+", label: "Happy Teams" },
    { value: 99.9, suffix: "%", label: "Uptime" },
  ];

  const Counter = ({ value, suffix, isVisible }) => {
    const count = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
      if (!isVisible) {
        count.set(0);
        setDisplayValue("0");
        return;
      }

      const unsubscribe = count.on("change", (latest) => {
        if (value % 1 !== 0) {
          setDisplayValue(latest.toFixed(1));
        } else {
          setDisplayValue(Math.floor(latest).toString());
        }
      });

      const controls = animate(count, value, {
        duration: 1.4,
        ease: [0.12, 0.8, 0.25, 1],
      });

      return () => {
        unsubscribe();
        controls.stop();
      };
    }, [isVisible, value, count]);

    return (
      <span>
        {displayValue}
        {suffix}
      </span>
    );
  };

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-100 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`group relative px-6 py-8 sm:px-8 ${
                  index < 2
                    ? "border-b border-slate-200 dark:border-slate-800 lg:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "border-r border-slate-200 dark:border-slate-800"
                    : ""
                } lg:border-r lg:border-slate-200 lg:dark:border-slate-800 ${
                  index === 3 ? "lg:border-r-0" : ""
                }`}
              >
                {/* Number indicator */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-150" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* COUNTING NUMBER */}
                <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl dark:text-white">
                  <Counter
                    value={item.value}
                    suffix={item.suffix}
                    isVisible={isVisible}
                  />
                </h2>

                {/* LABEL */}
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-6 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-10 sm:left-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
