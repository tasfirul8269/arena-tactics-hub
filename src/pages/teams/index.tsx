
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Trophy, GamepadIcon } from "lucide-react";
import { fetchTeams } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

const TeamsPage = () => {
  const { user } = useAuth();
  const { data: teams, isLoading } = useQuery({
    queryKey: ['teams'],
    queryFn: fetchTeams,
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Teams</h1>
          {user && (
            <Link to="/teams/create">
              <Button>Create Team</Button>
            </Link>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="h-32 bg-muted" />
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
            {teams?.map((team) => (
              <Card key={team.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <img 
                    src={team.logo_url || "https://placehold.co/100x100"} 
                    alt={team.name} 
                    className="w-16 h-16 rounded-full"
                  />
                  <CardTitle className="text-xl">{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{team.members?.length || 0} Members</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GamepadIcon className="h-4 w-4" />
                      <span>{team.game?.name || 'No Game Selected'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="h-4 w-4" />
                      <span>{team.achievements?.length || 0} Achievements</span>
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
        )}
      </div>
    </Layout>
  );
};

export default TeamsPage;
