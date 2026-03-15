import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NexaRetail",
    text: "TeleSpeak transformed our customer support operations. Their team reduced our response time by 60% and boosted satisfaction scores dramatically.",
  },
  {
    name: "David Chen",
    role: "Marketing Director, CloudSync",
    text: "The digital marketing campaigns they ran for us generated a 300% ROI within the first quarter. Their data-driven approach is unmatched.",
  },
  {
    name: "Priya Sharma",
    role: "CTO, FinEdge Solutions",
    text: "Their web development team delivered our platform ahead of schedule with incredible quality. Truly a partner you can rely on.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Accreditions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What our partners say about working with us
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
