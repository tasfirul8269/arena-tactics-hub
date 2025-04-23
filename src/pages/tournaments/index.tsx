
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, Users, Calendar } from "lucide-react";

const TournamentsPage = () => {
  // This would be fetched from the backend in a real app
  const tournaments = [
    {
      id: 1,
      title: "PUBG Mobile Pro League",
      game: "PUBG Mobile",
      startDate: "2025-05-01",
      teams: 16,
      prizePool: "$50,000",
      status: "Registration Open",
    },
    {
      id: 2,
      title: "Free Fire World Series",
      game: "Free Fire",
      startDate: "2025-05-15",
      teams: 12,
      prizePool: "$25,000",
      status: "Coming Soon",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Tournaments</h1>
          <Link to="/tournaments/create">
            <Button>Create Tournament</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{tournament.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    <span>{tournament.game}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{tournament.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{tournament.teams} Teams</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-primary font-semibold">{tournament.prizePool}</span>
                    <Link to={`/tournaments/${tournament.id}`}>
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

export default TournamentsPage;
