import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare, Upload } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCVSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("CV submitted successfully!");
  };

  return (
    <section id="contact" className="section-padding">
      {" "}
      <div className="container mx-auto" ref={ref}>
        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Ready to transform your business? Get in touch with our team and
              discover how TeleSpeak Technologies can accelerate your growth.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>

                <a
                  href="mailto:info@telespeaktechnologies.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  info@telespeaktechnologies.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>

                <span className="text-foreground">
                  Contact Number: +91 8777275756
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground resize-none"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-lg hover:scale-[1.02] transition-all"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* WORK WITH US SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold mb-4 text-center">
            Want to work with us?
          </h3>

          <p className="text-muted-foreground text-center mb-6">
            Drop your CV and our team will reach out if a suitable opportunity
            arises.
          </p>

          <form onSubmit={handleCVSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground"
            />

            <div className="flex items-center gap-3">
              <Upload size={18} />
              <input type="file" required />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-all"
            >
              Submit CV
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
