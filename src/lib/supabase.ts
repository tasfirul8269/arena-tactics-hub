
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const signUp = async (email: string, password: string, metadata?: { full_name?: string }) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata
    }
  });
};

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data.user;
};

// Database helpers
export const fetchTeams = async () => {
  const { data, error } = await supabase
    .from('teams')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const fetchTeamById = async (id: number) => {
  const { data, error } = await supabase
    .from('teams')
    .select(`
      *,
      members:team_members(*),
      achievements:team_achievements(*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

export const fetchGames = async () => {
  const { data, error } = await supabase
    .from('games')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const fetchGameById = async (id: number) => {
  const { data, error } = await supabase
    .from('games')
    .select(`
      *,
      maps:game_maps(*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

export const fetchTournaments = async () => {
  const { data, error } = await supabase
    .from('tournaments')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const fetchUserNotifications = async (userId: string) => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const markNotificationAsRead = async (notificationId: number) => {
  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', notificationId);
  
  if (error) throw error;
  return true;
};

export const saveMapStrategy = async (teamId: number, mapName: string, markers: any[], routePoints: any[]) => {
  const { error } = await supabase
    .from('team_strategies')
    .upsert({
      team_id: teamId,
      map_name: mapName,
      markers: markers,
      route_points: routePoints,
      updated_at: new Date()
    });
  
  if (error) throw error;
  return true;
};

export const getTeamStrategy = async (teamId: number, mapName: string) => {
  const { data, error } = await supabase
    .from('team_strategies')
    .select('*')
    .eq('team_id', teamId)
    .eq('map_name', mapName)
    .single();
  
  if (error && error.code !== 'PGRST116') throw error; // Ignore "not found" error
  return data;
};
