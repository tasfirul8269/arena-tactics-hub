
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-esports-purple/20 to-esports-accent/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Esports Experience?
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Join Arena Tactics Hub today and take your tournament organization and team management to the next level.
        </p>
        <Link to="/register">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            Get Started Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
