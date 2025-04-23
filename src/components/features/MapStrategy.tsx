
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// This is a placeholder for the interactive map component
// In a real implementation, we would integrate with Mapbox GL or similar
const MapStrategy = () => {
  const [activeMap, setActiveMap] = useState("erangel");

  return (
    <Card className="w-full border border-border/50 overflow-hidden">
      <CardHeader className="bg-card/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Battle Strategy</CardTitle>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant={activeMap === "erangel" ? "default" : "outline"}
              onClick={() => setActiveMap("erangel")}
              className={activeMap === "erangel" ? "bg-primary" : ""}
            >
              Erangel
            </Button>
            <Button 
              size="sm" 
              variant={activeMap === "miramar" ? "default" : "outline"}
              onClick={() => setActiveMap("miramar")}
              className={activeMap === "miramar" ? "bg-primary" : ""}
            >
              Miramar
            </Button>
            <Button 
              size="sm" 
              variant={activeMap === "sanhok" ? "default" : "outline"}
              onClick={() => setActiveMap("sanhok")}
              className={activeMap === "sanhok" ? "bg-primary" : ""}
            >
              Sanhok
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-video bg-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-foreground/70">
              Interactive map will be loaded here using Mapbox GL
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <Button size="sm" className="bg-primary" title="Place Marker">
              📍 Place Marker
            </Button>
            <Button size="sm" className="bg-primary/80" title="Draw Route">
              ✏️ Draw Route
            </Button>
            <Button size="sm" variant="outline" className="bg-background/50" title="Clear All">
              🗑️ Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapStrategy;
