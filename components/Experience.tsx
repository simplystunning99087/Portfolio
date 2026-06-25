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
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Leadership & Community
        </h2>

        <div className="space-y-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-primary"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {role.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">{role.organization}</p>
                  <p className="text-secondary text-sm">{role.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border border-accent rounded-lg bg-accent/5">
          <h3 className="text-xl font-semibold text-accent mb-4">
            Looking for Opportunities
          </h3>
          <p className="text-foreground mb-4">
            Available for virtual internship immediately (part-time or full-time until July 6, 2026) and open to on-site internships in Chennai.
          </p>
          <p className="text-secondary">
            Eager to apply my skills in AI/ML, embedded systems, and full-stack development in a real-world product environment where I can contribute meaningfully to shipping intelligent solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
