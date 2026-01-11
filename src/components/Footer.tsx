import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoFull} alt="SMMG Research" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              A maverick approach to market microstructure research.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Stealth-Market-Microstructure-Group"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/smmg-research"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} SMMG Research. Barcelona, Spain.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">Stealth</span> Market Microstructure Group
          </p>
        </div>
      </div>
    </footer>
  );
}
