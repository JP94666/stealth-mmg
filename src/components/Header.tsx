import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#team", label: "Team" },
  { href: "#publications", label: "Publications" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img
              src={logoFull}
              alt="SMMG Research"
              className="h-10 md:h-12 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors underline-animate"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/Stealth-Market-Microstructure-Group"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/Stealth-Market-Microstructure-Group"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
