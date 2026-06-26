import { Briefcase, Users } from "lucide-react";

export default function Experience() {
  const roles = [
    {
      title: "Management Team Member",
      organization: "Linux Club VIT, Chennai",
      period: "Oct 2025 – Present",
      description: "Contributing to Linux community initiatives and technical workshops.",
    },
    {
      title: "Technical Team Member (Data Science)",
      organization: "IEEE Robotics & Automation Society VIT",
      period: "Oct 2025 – Present",
      description: "Applying ML and data science expertise to robotics and automation projects.",
    },
    {
      title: "Operations Team Member",
      organization: "IEEE Photonics Society VIT",
      period: "Sep 2025 – Present",
      description: "Supporting operations and technical initiatives in photonics field.",
    },
    {
      title: "Content Team Member",
      organization: "Arignar Anna Tamizh Mandram VIT",
      period: "Sep 2025 – Present",
      description: "Creating and curating technical content.",
    },
    {
      title: "Technical Team Member",
      organization: "CodeChef VIT-Chennai Chapter",
      period: "Sep 2025 – Jan 2026",
      description: "Participated in competitive programming events and community building.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Leadership & Community
          </h2>
          <p className="text-foreground-secondary text-lg">Active contributions to technical communities</p>
        </div>

        <div className="space-y-4 mb-12">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="group relative border border-primary/20 hover:border-primary/50 rounded-xl p-6 bg-gradient-to-br from-background-secondary/50 to-background/50 hover:from-background-secondary/80 hover:to-background/60 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Briefcase size={20} className="text-primary-light" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-light transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-primary-light font-medium text-sm mt-1">{role.organization}</p>
                  <p className="text-foreground-secondary text-sm mt-2 mb-2">{role.period}</p>
                  <p className="text-foreground-secondary text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <Users size={24} className="text-accent-light mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-accent-light mb-3">
                Looking for Opportunities
              </h3>
              <p className="text-foreground mb-3 leading-relaxed">
                Available for virtual internship immediately (part-time or full-time until July 6, 2026) and open to on-site internships in Chennai.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                Eager to apply my skills in AI/ML, embedded systems, and full-stack development in a real-world product environment where I can contribute meaningfully to shipping intelligent solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
