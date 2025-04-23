
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapStrategy from "@/components/features/MapStrategy";
import { Map } from "lucide-react";
import { getTeamStrategy } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

const TeamStrategyPage = () => {
  const { id } = useParams();
  const [selectedMap, setSelectedMap] = useState("erangel");
  
  // Fetch team strategy data
  const { data: strategy, isLoading } = useQuery({
    queryKey: ['teamStrategy', id, selectedMap],
    queryFn: () => getTeamStrategy(Number(id), selectedMap),
    enabled: !!id
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
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
