import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      {" "}
      <div className="container mx-auto px-4 md:px-8 py-16">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.ico"
                alt="Telespeak Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-semibold text-lg text-foreground">
                TeleSpeak Technologies Pvt. Ltd.
              </span>
            </div>

            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Improving business operations through reliable BPO services,
              customer support, medical transcription, and billing solutions.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              86 Golaghata Road, Dakshindari, Ultadanga, Sreebhumi,
              <br />
              North 24 Parganas, West Bengal, India – 700048
            </p>
          </div>
          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Chat & Email Support</li>
              <li>Medical Transcription</li>
              <li>Medical Billing</li>
              <li>Lead Generation</li>
            </ul>
          </div>
        </div>
        <div className="neon-line mt-12 mb-8" />
        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 TeleSpeak Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
