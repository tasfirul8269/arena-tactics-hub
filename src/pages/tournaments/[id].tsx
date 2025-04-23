
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, BadgeDollarSign } from "lucide-react";

const TournamentDetailsPage = () => {
  const { id } = useParams();
  
  // This would be fetched from the backend in a real app
  const tournament = {
    id: Number(id),
    title: id === "1" ? "PUBG Mobile Pro League" : "Free Fire World Series",
    game: id === "1" ? "PUBG Mobile" : "Free Fire",
    startDate: id === "1" ? "2025-05-01" : "2025-05-15",
    teams: id === "1" ? 16 : 12,
    prizePool: id === "1" ? "$50,000" : "$25,000",
    description: "Join the biggest esports tournament of the year!",
    format: "Double Elimination",
    rules: [
      "Players must be 16+ years old",
      "Teams must have 4-5 players",
      "All players must use official game client"
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">{tournament.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Prize Pool</p>
                      <p className="font-semibold">{tournament.prizePool}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Teams</p>
                      <p className="font-semibold">{tournament.teams} Teams</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-semibold">{tournament.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeDollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Format</p>
                      <p className="font-semibold">{tournament.format}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{tournament.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Rules</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {tournament.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Register Team</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Team {index + 1}</p>
                      <p className="text-sm text-muted-foreground">5 Players</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TournamentDetailsPage;
