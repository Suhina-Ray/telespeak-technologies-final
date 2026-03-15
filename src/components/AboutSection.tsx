import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="gradient-text">TeleSpeak</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              TeleSpeak Technologies Pvt. Ltd. helps businesses scale using
              technology-driven outsourcing solutions. We combine innovation
              with operational excellence to deliver measurable results across
              BPO, digital marketing, and custom software development.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              "Your success is our mission” We provide dependable, round the
              clock support tailored to your business needs, backed by
              expertise, advanced processes, and a dedicated team. We offer
              solutions that prioritise accuracy, performance, and customer
              satisfaction. We stand for quality service, transparent
              communication, and long term partnership helping you stay ahead in
              a competitive market
            </p>
            <div className="flex flex-wrap gap-3">
              {["Innovation", "Reliability", "Scalability", "24/7 Support"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right - decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
