
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MessageSquare, Map } from "lucide-react";

const TeamDetailsPage = () => {
  const { id } = useParams();
  
  // This would be fetched from the backend in a real app
  const team = {
    id: Number(id),
    name: id === "1" ? "Nova Esports" : "Team Elite",
    members: id === "1" ? 5 : 4,
    game: id === "1" ? "PUBG Mobile" : "Free Fire",
    achievements: id === "1" ? "3 Tournament Wins" : "Runner-up FFWS 2024",
    logo: "https://placehold.co/100x100",
    description: "A professional esports team competing at the highest level.",
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{team.name}</h1>
          <div className="flex gap-2">
            <Link to={`/teams/${id}/chat`}>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Team Chat
              </Button>
            </Link>
            <Link to={`/teams/${id}/strategy`}>
              <Button variant="outline">
                <Map className="mr-2 h-4 w-4" />
                Strategy Board
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Team Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <img src={team.logo} alt={team.name} className="w-32 h-32 rounded-lg" />
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Description</h3>
                    <p className="text-muted-foreground">{team.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Game</h3>
                    <p className="text-muted-foreground">{team.game}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Achievements</h3>
                    <p className="text-muted-foreground">{team.achievements}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Users className="h-4 w-4" />
                <span>{team.members} Members</span>
              </div>
              <div className="space-y-4">
                {Array.from({ length: team.members }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Player {index + 1}</p>
                      <p className="text-sm text-muted-foreground">Team Member</p>
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

export default TeamDetailsPage;
