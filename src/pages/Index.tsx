
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-esports-dark z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-esports-accent/20 opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="font-rajdhani font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-esports-accent">ARENA TACTICS HUB</span>
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

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-esports-accent">
              PLATFORM FEATURES
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  {/* Tournament icon would go here */}
                  <div className="h-6 w-6 text-primary">🏆</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tournament Management</h3>
                <p className="text-foreground/70">
                  Create custom tournaments with various formats, point systems, and brackets. Perfect for organizers of any size.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  {/* Team icon would go here */}
                  <div className="h-6 w-6 text-primary">👥</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Management</h3>
                <p className="text-foreground/70">
                  Build your roster, manage team profiles, and coordinate with your teammates all in one place.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  {/* Chat icon would go here */}
                  <div className="h-6 w-6 text-primary">💬</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Communication</h3>
                <p className="text-foreground/70">
                  Chat with your teammates, share strategies, and coordinate your gameplay in real-time.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  {/* Map icon would go here */}
                  <div className="h-6 w-6 text-primary">🗺️</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Strategy Maps</h3>
                <p className="text-foreground/70">
                  Plan your battle strategies with interactive maps for games like PUBG and Free Fire. Mark spots and draw routes together.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  {/* Leaderboard icon would go here */}
                  <div className="h-6 w-6 text-primary">📊</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Results & Statistics</h3>
                <p className="text-foreground/70">
                  Track tournament results, team standings, and player statistics all in one comprehensive dashboard.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  {/* Mobile icon would go here */}
                  <div className="h-6 w-6 text-primary">📱</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Compatible</h3>
                <p className="text-foreground/70">
                  Access Arena Tactics Hub on any device with our responsive web interface (and upcoming mobile app).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-esports-accent">
              SUPPORTED GAMES
            </span>
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Plan strategies and organize tournaments for today's most popular battle royale games.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game 1 - PUBG */}
            <Card className="group overflow-hidden border border-border/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Game image would go here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">PUBG</h3>
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Card>

            {/* Game 2 - Free Fire */}
            <Card className="group overflow-hidden border border-border/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Game image would go here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">Free Fire</h3>
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Card>

            {/* Game 3 - Fortnite */}
            <Card className="group overflow-hidden border border-border/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Game image would go here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">Fortnite</h3>
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Card>

            {/* Game 4 - Apex Legends */}
            <Card className="group overflow-hidden border border-border/50">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Game image would go here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">Apex Legends</h3>
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </Layout>
  );
};

export default Index;
