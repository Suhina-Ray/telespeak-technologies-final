import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, TrendingUp, UserCheck, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 50, label: "Clients" },
  { icon: TrendingUp, value: 50000, suffix: "+", label: "Leads Generated" },
  { icon: UserCheck, value: 50, suffix: "+", label: "Team Members" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
];

const AnimatedCounter = ({
  target,
  inView,
}: {
  target: number;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count.toLocaleString()}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="solutions"
      className="section-padding relative overflow-hidden"
    >
      {/* Glow bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that reflect our commitment to excellence
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                <AnimatedCounter target={stat.value} inView={isInView} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
