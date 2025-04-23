
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapStrategy from "@/components/features/MapStrategy";
import { Map } from "lucide-react";

const TeamStrategyPage = () => {
  const { id } = useParams();

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
            <MapStrategy />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TeamStrategyPage;
