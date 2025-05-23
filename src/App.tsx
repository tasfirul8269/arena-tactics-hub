import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/dashboard";
import TournamentsPage from "./pages/tournaments";
import CreateTournamentPage from "./pages/tournaments/create";
import TeamsPage from "./pages/teams";
import CreateTeamPage from "./pages/teams/create";
import GamesPage from "./pages/games";
import TeamDetailsPage from "./pages/teams/[id]";
import TeamChatPage from "./pages/teams/[id]/chat";
import TeamStrategyPage from "./pages/teams/[id]/strategy";
import TournamentDetailsPage from "./pages/tournaments/[id]";
import GameDetailsPage from "./pages/games/[id]";
import NotificationsPage from "./pages/notifications";
import AdminPage from "./pages/admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tournaments/create" element={<CreateTournamentPage />} />
            <Route path="/tournaments/:id" element={<TournamentDetailsPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/create" element={<CreateTeamPage />} />
            <Route path="/teams/:id" element={<TeamDetailsPage />} />
            <Route path="/teams/:id/chat" element={<TeamChatPage />} />
            <Route path="/teams/:id/strategy" element={<TeamStrategyPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:id" element={<GameDetailsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
