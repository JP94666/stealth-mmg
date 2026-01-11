import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Activity, Cpu, BarChart3 } from "lucide-react";

const researchAreas = [
  {
    icon: Database,
    title: "Full Depth-of-Book Analysis",
    description:
      "Analyzing terabytes of ITCH/EOBI data to uncover novel patterns in order book dynamics that conventional analysis misses.",
  },
  {
    icon: Activity,
    title: "Hot Potato Effect Research",
    description:
      "Studying event-level inventory transfer dynamics and rapid inventory turnover in equity markets through deterministic simulation.",
  },
  {
    icon: Cpu,
    title: "HPC Infrastructure",
    description:
      "Building terabyte-scale infrastructure using MetaCentrum HPC workflows to power our high-frequency data analysis.",
  },
  {
    icon: BarChart3,
    title: "Order Flow Imbalance",
    description:
      "Inferring static and dynamic order-flow imbalance from DMA screens using OCR and structured parsing methods.",
  },
];

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
            // Research Focus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Bridging Theory & Reality
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We bridge academic market microstructure theory with high-frequency data analysis, 
            applying a multi-disciplinary approach to uncover the complex dynamics of order flow 
            and liquidity that others overlook.
          </p>
        </motion.div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border p-8 hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 border border-primary/10 group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 border-l-2 border-accent pl-6 max-w-2xl"
        >
          <p className="text-lg italic text-muted-foreground mb-4">
            "LIMIT ≠ PASSIVE — and that simple truth shakes the foundations of market microstructure."
          </p>
          <cite className="font-mono text-sm text-primary not-italic">
            — SMMG Research Focus, 2025
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
