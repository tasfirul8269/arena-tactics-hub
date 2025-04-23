
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MessageSquare, Map, Award, GamepadIcon, FileText } from "lucide-react";

const TeamDetailsPage = () => {
  const { id } = useParams();
  
  // This would be fetched from the backend in a real app
  const team = {
    id: Number(id),
    name: id === "1" ? "Nova Esports" : "Team Elite",
    members: [
      { id: 1, name: "John Doe", role: "Team Captain", joinedDate: "2023-01-15" },
      { id: 2, name: "Jane Smith", role: "IGL", joinedDate: "2023-02-20" },
      { id: 3, name: "Mike Johnson", role: "Support", joinedDate: "2023-03-10" },
      { id: 4, name: "Sarah Wilson", role: "Entry Fragger", joinedDate: "2023-04-05" },
      { id: 5, name: "Alex Brown", role: "Sniper", joinedDate: "2023-05-01" },
    ],
    achievements: [
      { id: 1, title: "PUBG Mobile Pro League - Winner", date: "2024-03" },
      { id: 2, title: "ESL Mobile Open - Runner Up", date: "2024-02" },
      { id: 3, title: "Mobile Gaming Championship - Top 4", date: "2024-01" },
    ],
    game: id === "1" ? "PUBG Mobile" : "Free Fire",
    logo: "https://placehold.co/100x100",
    description: "A professional esports team competing at the highest level.",
    stats: {
      tournamentsWon: 8,
      matchesPlayed: 156,
      winRate: "67%",
    }
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
          {/* Team Overview Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Team Overview
              </CardTitle>
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
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <GamepadIcon className="h-4 w-4" />
                      {team.game}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold">{team.stats.tournamentsWon}</p>
                      <p className="text-sm text-muted-foreground">Tournaments Won</p>
                    </div>
                    <div>
                      <p className="font-semibold">{team.stats.matchesPlayed}</p>
                      <p className="text-sm text-muted-foreground">Matches Played</p>
                    </div>
                    <div>
                      <p className="font-semibold">{team.stats.winRate}</p>
                      <p className="text-sm text-muted-foreground">Win Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Roster
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {team.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Card */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.achievements.map((achievement) => (
                  <Card key={achievement.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">{achievement.title}</p>
                          <p className="text-sm text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
