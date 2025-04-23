import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/tournaments/create" element={<CreateTournamentPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/create" element={<CreateTeamPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
