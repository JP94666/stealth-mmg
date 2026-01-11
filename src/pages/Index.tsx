import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { Team } from "@/components/Team";
import { Publications } from "@/components/Publications";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Research />
        <Team />
        <Publications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
