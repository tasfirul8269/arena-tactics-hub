
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// This is a placeholder for the interactive map component with Mapbox GL
const MapStrategy = () => {
  const [activeMap, setActiveMap] = useState("erangel");
  const [activeMode, setActiveMode] = useState<"none" | "marker" | "route">("none");
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem('mapboxToken') || '');
  const [showTokenInput, setShowTokenInput] = useState(!localStorage.getItem('mapboxToken'));
  
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const routeSource = useRef<string>("route");
  
  // Handle token input
  const handleTokenSubmit = () => {
    if (mapboxToken) {
      localStorage.setItem('mapboxToken', mapboxToken);
      setShowTokenInput(false);
      initializeMap();
      toast.success("Mapbox token saved");
    } else {
      toast.error("Please enter a valid token");
    }
  };

  // Initialize map
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;
    
    if (map.current) return; // Map already initialized
    
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [0, 0], // Center based on the selected map
      zoom: 3,
    });
    
    // Add navigation control
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );
    
    // Initialize route source
    map.current.on('load', () => {
      if (!map.current) return;
      
      map.current.addSource(routeSource.current, {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: []
          }
        }
      });
      
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: routeSource.current,
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#F84C4C',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });
    });
    
    // Setup click events for the map
    map.current.on('click', (e) => {
      if (!map.current) return;
      
      if (activeMode === "marker") {
        // Add marker
        const marker = new mapboxgl.Marker({ color: '#F84C4C' })
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(map.current);
        
        markers.current.push(marker);
        toast.success("Marker placed");
      } else if (activeMode === "route") {
        // Add point to the route
        const source = map.current.getSource(routeSource.current) as mapboxgl.GeoJSONSource;
        const currentData = source._data as any;
        
        if (!currentData.geometry) {
          // Initialize with first point
          source.setData({
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [[e.lngLat.lng, e.lngLat.lat]]
            }
          });
        } else {
          // Add point to existing line
          const coordinates = currentData.geometry.coordinates;
          coordinates.push([e.lngLat.lng, e.lngLat.lat]);
          
          source.setData({
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates
            }
          });
          
          toast.success("Route point added");
        }
      }
    });
  };
  
  // Update map center when active map changes
  useEffect(() => {
    if (!map.current) return;
    
    // Different center points for different maps
    let center;
    switch (activeMap) {
      case "erangel":
        center = [30, 40];
        break;
      case "miramar":
        center = [-10, 20];
        break;
      case "sanhok":
        center = [90, 10];
        break;
      default:
        center = [0, 0];
    }
    
    map.current.flyTo({ center, essential: true });
  }, [activeMap]);
  
  // Initialize map on component mount if token exists
  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);
  
  // Toggle active mode
  const toggleMode = (mode: "marker" | "route") => {
    setActiveMode(activeMode === mode ? "none" : mode);
  };
  
  // Clear all markers and routes
  const clearAll = () => {
    if (!map.current) return;
    
    // Clear markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];
    
    // Clear route
    const source = map.current.getSource(routeSource.current) as mapboxgl.GeoJSONSource;
    if (source) {
      source.setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: []
        }
      });
    }
    
    toast.success("Map cleared");
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
        {showTokenInput ? (
          <div className="p-4 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">To use the interactive map, please enter your Mapbox public token:</p>
            <input 
              type="text" 
              value={mapboxToken} 
              onChange={(e) => setMapboxToken(e.target.value)}
              className="border p-2 rounded-md w-full"
              placeholder="Enter your Mapbox public token"
            />
            <Button onClick={handleTokenSubmit} className="bg-primary w-fit">
              Save Token
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              You can get a free Mapbox token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
            </p>
          </div>
        ) : (
          <div className="relative aspect-video bg-muted">
            <div ref={mapContainer} className="absolute inset-0">
              {!mapboxToken && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/80 backdrop-blur-sm">
                  <p className="text-foreground/70">
                    Mapbox token required for interactive map
                  </p>
                </div>
              )}
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button 
                size="sm" 
                className={`${activeMode === "marker" ? "bg-primary" : "bg-primary/80"}`} 
                title="Place Marker"
                onClick={() => toggleMode("marker")}
              >
                📍 Place Marker
              </Button>
              <Button 
                size="sm" 
                className={`${activeMode === "route" ? "bg-primary" : "bg-primary/80"}`} 
                title="Draw Route"
                onClick={() => toggleMode("route")}
              >
                ✏️ Draw Route
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-background/50" 
                title="Clear All"
                onClick={clearAll}
              >
                🗑️ Clear
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapStrategy;
