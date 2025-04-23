
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const fetchGames = async () => {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('active', true);

  if (error) {
    toast.error('Error fetching games');
    throw error;
  }
  return data;
};

export const fetchTeams = async () => {
  const { data, error } = await supabase
    .from('teams')
    .select(`
      *,
      game:games(*),
      members:team_members(*),
      achievements:team_achievements(*)
    `);

  if (error) {
    toast.error('Error fetching teams');
    throw error;
  }
  return data;
};

export const fetchTournaments = async () => {
  const { data, error } = await supabase
    .from('tournaments')
    .select(`
      *,
      game:games(*),
      registrations:tournament_registrations(
        team:teams(*)
      )
    `);

  if (error) {
    toast.error('Error fetching tournaments');
    throw error;
  }
  return data;
};
