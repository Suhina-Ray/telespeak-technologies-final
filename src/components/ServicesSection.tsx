import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  PhoneCall,
  FileText,
  DollarSign,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Driving high quality leads and connecting your business with customers who matter.",
  },
  {
    icon: PhoneCall,
    title: "Chat & Email Support",
    description:
      "Real-time assistance and responsive communication for your clients.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description:
      "24/7 customer support to strengthen customer experience, improve efficiency, and build brand loyalty.",
  },
  {
    icon: FileText,
    title: "Medical Transcription",
    description:
      "Accurate and secure transcription services designed for healthcare professionals.",
  },
  {
    icon: DollarSign,
    title: "Medical Billing",
    description:
      "Efficient billing solutions that streamline revenue cycles and improve financial operations.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      {" "}
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {" "}
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Services</span>{" "}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Streamline your workflow with reliable BPO services that support
            your business operations and customer engagement.
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
