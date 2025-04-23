
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-esports-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-esports-accent/20 opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="font-rajdhani font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-esports-accent">
              ARENA TACTICS HUB
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-foreground/90">
            The Ultimate Esports Management Platform
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl">
            Create tournaments, build your team, chat with teammates, and develop winning strategies with our interactive map tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/tournaments/create">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Create Tournament
              </Button>
            </Link>
            <Link to="/teams/create">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                Register Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
