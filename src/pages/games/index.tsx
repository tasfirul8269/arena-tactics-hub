
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GamepadIcon, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchGames } from "@/lib/api";

const GamesPage = () => {
  const { data: games, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Games</h1>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="h-48 bg-muted" />
                <CardContent className="space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games?.map((game) => (
              <Card key={game.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={game.image_url || "https://placehold.co/300x200"}
                    alt={game.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="text-xl mt-4">{game.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GamepadIcon className="h-4 w-4" />
                      <span>{game.description}</span>
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
        )}
      </div>
    </Layout>
  );
};

export default GamesPage;
