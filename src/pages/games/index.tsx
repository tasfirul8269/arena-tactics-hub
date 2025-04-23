
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GamepadIcon, Users, Trophy } from "lucide-react";

const GamesPage = () => {
  // This would be fetched from the backend in a real app
  const games = [
    {
      id: 1,
      name: "PUBG Mobile",
      players: "100 players per match",
      activeTournaments: 3,
      activeTeams: 24,
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Free Fire",
      players: "50 players per match",
      activeTournaments: 2,
      activeTeams: 18,
      image: "https://placehold.co/300x200",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Games</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-xl mt-4">{game.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GamepadIcon className="h-4 w-4" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    <span>{game.activeTournaments} Active Tournaments</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{game.activeTeams} Teams</span>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Link to={`/games/${game.id}`}>
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GamesPage;
