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
    <section id="contact" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
          Let&apos;s Connect
        </h2>

        <p className="text-center text-secondary text-lg mb-12 max-w-2xl mx-auto">
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
                className="border border-secondary rounded-lg p-6 hover:border-accent transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/5"
              >
                <div className="flex items-start gap-4">
                  {Icon && <Icon size={24} className="text-accent mt-1" />}
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
            className="inline-block px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-primary transition-colors duration-200"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
