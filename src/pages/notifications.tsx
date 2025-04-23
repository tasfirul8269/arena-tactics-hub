
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const NotificationsPage = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "New Tournament Invitation",
      message: "Your team has been invited to participate in PMPL Spring 2024",
      date: "2024-04-23",
      read: false,
    },
    {
      id: 2,
      title: "Strategy Meeting",
      message: "Team meeting scheduled for map strategy discussion",
      date: "2024-04-22",
      read: true,
    },
    {
      id: 3,
      title: "Match Result",
      message: "Congratulations! Your team won the last scrimmage",
      date: "2024-04-21",
      read: true,
    },
  ]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card key={notification.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 mt-2 rounded-full ${notification.read ? 'bg-muted' : 'bg-primary'}`} />
                      <div>
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotificationsPage;
