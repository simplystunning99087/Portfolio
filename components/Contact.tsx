import { Github, Linkedin, Mail, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "manimeets09@gmail.com",
      href: "mailto:manimeets09@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+91 90257 80639",
      href: "tel:+919025780639",
      icon: Send,
    },
    {
      label: "GitHub",
      value: "github.com/simplystunning99087",
      href: "https://github.com/simplystunning99087",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "manivel-mughilan-6bb65036a",
      href: "https://linkedin.com/in/manivel-mughilan-6bb65036a",
      icon: Linkedin,
    },
    {
      label: "LeetCode",
      value: "ManCreateCodeDevelop",
      href: "https://leetcode.com/u/ManCreateCodeDevelop/",
      icon: ExternalLink,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background-secondary/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-accent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, internship opportunities, or just having a chat about AI, engineering, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative border border-primary/20 hover:border-primary/50 rounded-xl p-6 bg-gradient-to-br from-background-secondary/40 to-background/40 hover:from-background-secondary/60 hover:to-background/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon size={24} className="text-primary-light group-hover:text-accent-light transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground-secondary text-xs font-semibold uppercase tracking-wide">{contact.label}</p>
                    <p className="text-foreground font-semibold break-all text-sm mt-1 group-hover:text-primary-light transition-colors">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="mailto:manimeets09@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent-light text-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            <Mail size={20} />
            <span>Send Me an Email</span>
            <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}
