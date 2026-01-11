import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Pankaj Jat",
    role: "Founding Researcher & Systems Architect",
    location: "Barcelona, Spain (Remote)",
    bio: "Leads market microstructure research using terabytes of full depth-of-book (ITCH) data. Architects the group's research infrastructure and oversees engineering of high-performance data pipelines. Principal technical advisor on strategic research methodology and technology decisions.",
    skills: ["Python", "C++", "Systems Architecture", "HPC", "ITCH/EOBI Data"],
    linkedin: "https://www.linkedin.com/in/pankaj-jat-666p",
    education: "B.Tech Computer Science, IIIT Kota (2024-2028)",
  },
  {
    name: "David M.",
    role: "Principal & Co-Founder",
    location: "Barcelona, Spain",
    bio: "Seasoned practitioner with deep expertise in market dynamics and trading infrastructure. Brings decades of industry experience bridging theoretical models with real-world trading operations. Passionate about F1-level precision in market analysis.",
    skills: ["Market Microstructure", "Trading Strategy", "Financial Research", "Strategic Advisory"],
    linkedin: "#",
    education: "Universitat de Barcelona",
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
            // The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Research Principals
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A collaboration between engineering precision and trading experience, 
            united by the mission to reveal what conventional market analysis cannot see.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card border border-border p-8 hover:border-accent/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="font-mono text-sm text-accent">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.location}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/5 hover:bg-accent/10 border border-primary/10 hover:border-accent/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Education */}
              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Education
                </span>
                <p className="text-sm text-primary mt-1">{member.education}</p>
              </div>

              {/* Skills */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
