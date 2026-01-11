import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stealth Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="stealth-badge">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Stealth Research Lab
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-primary">Market</span>{" "}
            <span className="text-accent">Microstructure</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A maverick research lab operating at the intersection of simulation and market microstructure. 
            Leveraging <span className="font-mono text-primary">60TB+</span> of raw data and HPC workflows 
            to reveal what conventional analysis cannot.
          </motion.p>

          {/* Terminal-style tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary text-primary-foreground font-mono text-sm md:text-base px-6 py-4 rounded-sm inline-block mb-12"
          >
            <span className="text-accent">$</span> Building F1-inspired simulators to see what others miss
            <span className="animate-terminal-blink ml-1">_</span>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16"
          >
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">ITCH</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Protocol</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">60TB+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Raw Data</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">HPC</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Infrastructure</div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#research"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
