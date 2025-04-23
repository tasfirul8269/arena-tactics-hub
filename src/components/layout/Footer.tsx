
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-rajdhani font-bold text-xl mb-4 bg-gradient-to-r from-primary to-esports-accent bg-clip-text text-transparent">
              ARENA TACTICS HUB
            </h3>
            <p className="text-foreground/70 text-sm">
              The ultimate esports management platform for tournament organizers and teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-3">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tournaments" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Games
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@arenatacticshub.com" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  info@arenatacticshub.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/arenatacticshub" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.gg/arenatacticshub" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Arena Tactics Hub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary">
              <span className="sr-only">Twitter</span>
              {/* Icon would go here */}
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary">
              <span className="sr-only">Discord</span>
              {/* Icon would go here */}
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary">
              <span className="sr-only">YouTube</span>
              {/* Icon would go here */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
