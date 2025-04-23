
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Timer, Map } from "lucide-react";

const GameDetailsPage = () => {
  const { id } = useParams();

  // This would be fetched from the backend in a real app
  const game = {
    id: Number(id),
    name: id === "1" ? "PUBG Mobile" : "Free Fire",
    activeTournaments: id === "1" ? 3 : 2,
    activeTeams: id === "1" ? 24 : 18,
    matchDuration: id === "1" ? "30-35 minutes" : "15-20 minutes",
    maps: id === "1" ? ["Erangel", "Miramar", "Sanhok"] : ["Bermuda", "Purgatory", "Kalahari"],
    description: "Experience the thrill of battle royale gaming at its finest.",
    image: "https://placehold.co/600x300",
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{game.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={game.image} alt={game.name} className="w-full rounded-lg mb-6" />
                <p className="text-muted-foreground">{game.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Maps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {game.maps.map((map) => (
                    <Card key={map}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <Map className="h-5 w-5 text-primary" />
                          <span>{map}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Game Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{game.activeTournaments}</p>
                      <p className="text-sm text-muted-foreground">Active Tournaments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{game.activeTeams}</p>
                      <p className="text-sm text-muted-foreground">Active Teams</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{game.matchDuration}</p>
                      <p className="text-sm text-muted-foreground">Average Match Duration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GameDetailsPage;
