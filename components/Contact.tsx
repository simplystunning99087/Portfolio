import { Github, Linkedin, Mail, FileText } from "lucide-react";

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
      icon: FileText,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-center">
          Let&apos;s Connect
        </h2>

        <p className="text-center text-secondary text-lg mb-16 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, internship opportunities, or just having a chat about AI, engineering, and technology.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border border-muted bg-light rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:bg-accent/5"
              >
                <div className="flex items-start gap-4">
                  {Icon && <Icon size={24} className="text-primary mt-1" />}
                  <div>
                    <p className="text-secondary text-sm">{contact.label}</p>
                    <p className="text-foreground font-semibold break-all">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="mailto:manimeets09@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
