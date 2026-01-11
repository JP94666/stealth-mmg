import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Github, ExternalLink, ArrowUpRight } from "lucide-react";

const publications = [
  {
    title: "Foundations of Dealer Markets: A Replication and Analysis of the Treynor Model",
    date: "August 2025",
    venue: "Zenodo",
    description:
      "A computational replication of the foundational Treynor model, connecting academic dealer logic theory to modern order-driven markets.",
    link: "https://zenodo.org/records/13345447",
    type: "paper",
  },
  {
    title: "Myths in Market Microstructure Research I: Passive Liquidity Providers",
    date: "2025",
    venue: "SMMG Research",
    description:
      "Empirical dissection proving LIMIT ≠ PASSIVE using ITCH data and simulator validation. Revisiting decade-old intuitions with modern computational tools.",
    link: "#",
    type: "ongoing",
  },
];

const repositories = [
  {
    name: "NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
    description:
      "Market simulation demonstrating hot potato effect using ITCH NASDAQ tick data. Linking practices observed in forex to equities.",
    link: "https://github.com/Stealth-Market-Microstructure-Group/NASDAQ-ITCH-Simulation-Research-Hot-Potato-effect-in-Same-Cent",
    tags: ["Python", "ITCH", "Simulation"],
  },
  {
    name: "Imbalance-signal-generation-using-DMA-screens",
    description:
      "Research tool for inferring order-flow imbalance from DMA trading screens using OCR (Tesseract) and structured parsing.",
    link: "https://github.com/Stealth-Market-Microstructure-Group/Imbalance-signal-generation-using-DMA-screens",
    tags: ["Python", "OCR", "DMA"],
  },
];

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
            // Output
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Publications & Projects
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our research output spans academic papers, open-source tools, and experimental 
            simulators—all aimed at revealing the hidden operational dynamics of modern markets.
          </p>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Research Papers
          </h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.a
                key={pub.title}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="block bg-card border border-border p-6 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {pub.date}
                      </span>
                      <span className="w-1 h-1 bg-border rounded-full" />
                      <span className="font-mono text-xs text-accent">{pub.venue}</span>
                      {pub.type === "ongoing" && (
                        <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{pub.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
            <Github className="w-4 h-4" />
            Open Source
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {repositories.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + 0.1 * i }}
                className="bg-card border border-border p-6 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Github className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h4 className="font-mono text-sm font-semibold text-primary group-hover:text-accent transition-colors mb-2 break-all">
                  {repo.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{repo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 bg-primary/5 text-primary border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
