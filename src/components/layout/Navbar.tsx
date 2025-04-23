
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border/40 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-rajdhani font-bold text-2xl bg-gradient-to-r from-primary to-esports-accent bg-clip-text text-transparent">
            ARENA TACTICS HUB
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/tournaments" className="text-foreground/80 hover:text-foreground transition-colors">
            Tournaments
          </Link>
          <Link to="/teams" className="text-foreground/80 hover:text-foreground transition-colors">
            Teams
          </Link>
          <Link to="/games" className="text-foreground/80 hover:text-foreground transition-colors">
            Games
          </Link>
          <Link to="/login">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
