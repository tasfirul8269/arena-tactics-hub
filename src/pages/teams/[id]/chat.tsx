
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

const TeamChatPage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  
  // This would be fetched from the backend in a real app
  const messages = [
    { id: 1, sender: "Player 1", content: "Hey team!", timestamp: "10:00 AM" },
    { id: 2, sender: "Player 2", content: "Ready for practice?", timestamp: "10:01 AM" },
    { id: 3, sender: "Player 3", content: "Let's go!", timestamp: "10:02 AM" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // This would send the message to the backend in a real app
    setMessage("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="min-h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Team Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 mb-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{msg.sender}</span>
                    <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                  </div>
                  <p className="text-muted-foreground">{msg.content}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TeamChatPage;
