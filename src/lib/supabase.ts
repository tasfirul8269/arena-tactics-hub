
import { createClient } from '@supabase/supabase-js';

// Get environment variables with empty string fallbacks to prevent URL construction errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create the Supabase client only if URL is available
export const supabase = supabaseUrl 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Check if Supabase is configured before using it
const checkSupabaseConfig = () => {
  if (!supabase) {
    console.error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
    throw new Error('Supabase configuration is missing');
  }
  return supabase;
};

// Auth helpers
export const signUp = async (email: string, password: string, metadata?: { full_name?: string }) => {
  const client = checkSupabaseConfig();
  return await client.auth.signUp({
    email,
    password,
    options: {
      data: metadata
    }
  });
};

export const signIn = async (email: string, password: string) => {
  const client = checkSupabaseConfig();
  return await client.auth.signInWithPassword({
    email,
    password
  });
};

export const signOut = async () => {
  const client = checkSupabaseConfig();
  return await client.auth.signOut();
};

export const getCurrentUser = async () => {
  const client = checkSupabaseConfig();
  const { data } = await client.auth.getUser();
  return data.user;
};

// Database helpers
export const fetchTeams = async () => {
  const client = checkSupabaseConfig();
  const { data, error } = await client
    .from('teams')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const fetchTeamById = async (id: number) => {
  const client = checkSupabaseConfig();
  const { data, error } = await client
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
  const client = checkSupabaseConfig();
  const { data, error } = await client
    .from('games')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const fetchGameById = async (id: number) => {
  const client = checkSupabaseConfig();
  const { data, error } = await client
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
  const client = checkSupabaseConfig();
  const { data, error } = await client
    .from('tournaments')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const fetchUserNotifications = async (userId: string) => {
  const client = checkSupabaseConfig();
  const { data, error } = await client
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const markNotificationAsRead = async (notificationId: number) => {
  const client = checkSupabaseConfig();
  const { error } = await client
    .from('notifications')
    .update({ read: true })
    .eq('id', notificationId);
  
  if (error) throw error;
  return true;
};

export const saveMapStrategy = async (teamId: number, mapName: string, markers: any[], routePoints: any[]) => {
  const client = checkSupabaseConfig();
  const { error } = await client
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
  const client = checkSupabaseConfig();
  const { data, error } = await client
    .from('team_strategies')
    .select('*')
    .eq('team_id', teamId)
    .eq('map_name', mapName)
    .single();
  
  if (error && error.code !== 'PGRST116') throw error; // Ignore "not found" error
  return data;
};
