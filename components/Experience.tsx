export default function Experience() {
  const roles = [
    {
      title: "Management Team Member",
      organization: "Linux Club VIT, Chennai",
      period: "Oct 2025 – Present",
      description: "Contributing to Linux community initiatives and technical workshops.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Technical Team Member (Data Science)",
      organization: "IEEE Robotics & Automation Society VIT",
      period: "Oct 2025 – Present",
      description: "Applying ML and data science expertise to robotics and automation projects.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Operations Team Member",
      organization: "IEEE Photonics Society VIT",
      period: "Sep 2025 – Present",
      description: "Supporting operations and technical initiatives in photonics field.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Content Team Member",
      organization: "Arignar Anna Tamizh Mandram VIT",
      period: "Sep 2025 – Present",
      description: "Creating and curating technical content.",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      title: "Technical Team Member",
      organization: "CodeChef VIT-Chennai Chapter",
      period: "Sep 2025 – Jan 2026",
      description: "Participated in competitive programming events and community building.",
      color: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit mb-6">
            <span className="text-xs font-medium text-cyan-300">LEADERSHIP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Leadership & Community
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Active contributor to technical communities and student organizations at VIT Chennai.
          </p>
        </div>

        <div className="grid gap-4 mb-12">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-full blur-2xl -mr-16 -mt-16`} />
              
              <div className="relative space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-cyan-400/70 text-sm font-medium">{role.organization}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm">{role.period}</p>
                <p className="text-secondary">{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 space-y-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl" />
          <div className="relative space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300">
              Seeking Internship Opportunities
            </h3>
            <p className="text-foreground leading-relaxed">
              Available for <strong>virtual internship immediately</strong> (part-time or full-time until July 6, 2026) and open to <strong>on-site internships in Chennai</strong>.
            </p>
            <p className="text-secondary leading-relaxed">
              Eager to apply my skills in AI/ML, embedded systems, and full-stack development in a real-world product environment where I can contribute meaningfully to shipping intelligent solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
