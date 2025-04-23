
import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapStrategy from "@/components/features/MapStrategy";
import { Map } from "lucide-react";
import { getTeamStrategy, supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TeamStrategyPage = () => {
  const { id } = useParams();
  const [selectedMap, setSelectedMap] = useState("erangel");
  
  // Check if Supabase is configured
  const isSupabaseConfigured = !!supabase;
  
  // Fetch team strategy data
  const { data: strategy, isLoading } = useQuery({
    queryKey: ['teamStrategy', id, selectedMap],
    queryFn: () => isSupabaseConfigured ? getTeamStrategy(Number(id), selectedMap) : null,
    enabled: !!id && isSupabaseConfigured
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {!isSupabaseConfigured && (
          <Alert className="mb-4" variant="destructive">
            <AlertDescription>
              Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.
            </AlertDescription>
          </Alert>
        )}
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              Strategy Board
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <MapStrategy 
              initialMapData={strategy} 
              teamId={Number(id)} 
              onMapChange={setSelectedMap}
            />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TeamStrategyPage;
