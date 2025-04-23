
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Trophy, GamepadIcon } from "lucide-react";

const TeamsPage = () => {
  // This would be fetched from the backend in a real app
  const teams = [
    {
      id: 1,
      name: "Nova Esports",
      members: 5,
      game: "PUBG Mobile",
      achievements: "3 Tournament Wins",
      logo: "https://placehold.co/100x100",
    },
    {
      id: 2,
      name: "Team Elite",
      members: 4,
      game: "Free Fire",
      achievements: "Runner-up FFWS 2024",
      logo: "https://placehold.co/100x100",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Teams</h1>
          <Link to="/teams/create">
            <Button>Create Team</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <img src={team.logo} alt={team.name} className="w-16 h-16 rounded-full" />
                <CardTitle className="text-xl">{team.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{team.members} Members</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GamepadIcon className="h-4 w-4" />
                    <span>{team.game}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    <span>{team.achievements}</span>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Link to={`/teams/${team.id}`}>
                      <Button variant="outline" size="sm">View Team</Button>
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

export default TeamsPage;
