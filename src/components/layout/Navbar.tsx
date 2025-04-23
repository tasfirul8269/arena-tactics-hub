
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageSquare, Bell, Settings, LogOut, HelpCircle, User } from "lucide-react";

const Navbar = () => {
  // This would come from your auth context in a real app
  const isLoggedIn = true;

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

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </Link>
              
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
