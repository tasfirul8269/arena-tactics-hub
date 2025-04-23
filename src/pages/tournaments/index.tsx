
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, Users, Calendar } from "lucide-react";
import { fetchTournaments } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";

const TournamentsPage = () => {
  const { user } = useAuth();
  const { data: tournaments, isLoading } = useQuery({
    queryKey: ['tournaments'],
    queryFn: fetchTournaments,
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Tournaments</h1>
          {user && (
            <Link to="/tournaments/create">
              <Button>Create Tournament</Button>
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
            {tournaments?.map((tournament) => (
              <Card key={tournament.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{tournament.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="h-4 w-4" />
                      <span>{tournament.game?.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(tournament.start_date), 'PPP')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{tournament.registrations?.length || 0} / {tournament.max_teams} Teams</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-primary font-semibold">
                        ${tournament.prize_pool}
                      </span>
                      <Link to={`/tournaments/${tournament.id}`}>
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

export default TournamentsPage;
