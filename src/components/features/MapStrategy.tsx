
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Pencil, Trash2, Save } from "lucide-react";
import { saveMapStrategy } from "@/lib/supabase";

interface MapStrategyProps {
  initialMapData?: any;
  teamId: number;
  onMapChange?: (mapName: string) => void;
}

const MapStrategy = ({ initialMapData, teamId, onMapChange }: MapStrategyProps) => {
  const [activeMap, setActiveMap] = useState("erangel");
  const [activeMode, setActiveMode] = useState<"none" | "marker" | "route">("none");
  const [isSaving, setIsSaving] = useState(false);
  
  // Map overlay and drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mapImageRef = useRef<HTMLImageElement | null>(null);
  const [markers, setMarkers] = useState<{ x: number; y: number }[]>([]);
  const [routePoints, setRoutePoints] = useState<{ x: number; y: number }[]>([]);
  
  // Map images for different maps
  const mapImages = {
    erangel: "https://i.imgur.com/PI3qYlK.jpg",
    miramar: "https://i.imgur.com/VqRKWz3.jpg",
    sanhok: "https://i.imgur.com/tn7sUkl.jpg",
  };

  // Handle map change
  useEffect(() => {
    if (onMapChange) {
      onMapChange(activeMap);
    }
  }, [activeMap, onMapChange]);

  // Load initial data if available
  useEffect(() => {
    if (initialMapData) {
      if (initialMapData.markers) {
        setMarkers(initialMapData.markers);
      }
      if (initialMapData.route_points) {
        setRoutePoints(initialMapData.route_points);
      }
    }
  }, [initialMapData]);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const mapImage = new Image();
    mapImageRef.current = mapImage;
    
    if (!canvas) return;
    
    // Set canvas dimensions to match image when it loads
    mapImage.onload = () => {
      canvas.width = mapImage.width;
      canvas.height = mapImage.height;
      drawAll();
    };
    
    mapImage.src = mapImages[activeMap as keyof typeof mapImages];
  }, [activeMap]);
  
  // Draw everything on the canvas
  const drawAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw map image
    const mapImage = mapImageRef.current;
    if (mapImage && mapImage.complete) {
      ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
    }

    // Draw markers
    markers.forEach(marker => {
      ctx.beginPath();
      ctx.arc(marker.x, marker.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw route
    if (routePoints.length > 1) {
      ctx.beginPath();
      ctx.moveTo(routePoints[0].x, routePoints[0].y);
      
      for (let i = 1; i < routePoints.length; i++) {
        ctx.lineTo(routePoints[i].x, routePoints[i].y);
      }
      
      ctx.strokeStyle = '#F84C4C';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw route points
      routePoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#F84C4C';
        ctx.fill();
      });
    }
  };

  // Update the canvas when markers or routes change
  useEffect(() => {
    drawAll();
  }, [markers, routePoints]);

  // Handle canvas click
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeMode === "none") return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    if (activeMode === "marker") {
      setMarkers(prev => [...prev, { x, y }]);
      toast.success("Marker placed");
    } else if (activeMode === "route") {
      setRoutePoints(prev => [...prev, { x, y }]);
      toast.success("Route point added");
    }
  };

  // Toggle active mode
  const toggleMode = (mode: "marker" | "route") => {
    setActiveMode(activeMode === mode ? "none" : mode);
  };
  
  // Clear all markers and routes
  const clearAll = () => {
    setMarkers([]);
    setRoutePoints([]);
    toast.success("Map cleared");
  };

  // Save strategy to database
  const saveStrategy = async () => {
    try {
      setIsSaving(true);
      await saveMapStrategy(teamId, activeMap, markers, routePoints);
      toast.success("Strategy saved successfully!");
    } catch (error: any) {
      toast.error("Failed to save strategy: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };

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
          <div className="relative w-full h-full overflow-hidden">
            <canvas 
              ref={canvasRef}
              onClick={handleCanvasClick}
              className="w-full h-full cursor-crosshair"
            />
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <Button 
              size="sm" 
              className={`${activeMode === "marker" ? "bg-primary" : "bg-primary/80"}`} 
              title="Place Marker"
              onClick={() => toggleMode("marker")}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Place Marker
            </Button>
            <Button 
              size="sm" 
              className={`${activeMode === "route" ? "bg-primary" : "bg-primary/80"}`} 
              title="Draw Route"
              onClick={() => toggleMode("route")}
            >
              <Pencil className="h-4 w-4 mr-2" />
              Draw Route
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-background/50" 
              title="Clear All"
              onClick={clearAll}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear
            </Button>
            <Button 
              size="sm" 
              variant="default" 
              className="bg-green-600 hover:bg-green-700" 
              title="Save Strategy"
              onClick={saveStrategy}
              disabled={isSaving}
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapStrategy;
