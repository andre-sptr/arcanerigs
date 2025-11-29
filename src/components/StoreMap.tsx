import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Store {
  id: number;
  name: string;
  address: string;
  coordinates: [number, number];
  rating: number;
  distance: number;
  hours: string;
  phone: string;
  inStock: boolean;
}

interface StoreMapProps {
  stores: Store[];
  onStoreClick?: (storeId: number) => void;
}

const StoreMap = ({ stores, onStoreClick }: StoreMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: stores[0]?.coordinates || [-122.4194, 37.7749],
        zoom: 10,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add markers for each store
      stores.forEach((store) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.cssText = `
          background-color: hsl(var(--primary));
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid hsl(var(--background));
          box-shadow: 0 0 20px rgba(var(--primary), 0.6);
        `;

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="color: #000; padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">${store.name}</h3>
            <p style="font-size: 12px; margin-bottom: 4px;">${store.address}</p>
            <p style="font-size: 12px; color: #666;">Rating: ${store.rating}⭐</p>
          </div>`
        );

        const marker = new mapboxgl.Marker(el)
          .setLngLat(store.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

        el.addEventListener('click', () => {
          onStoreClick?.(store.id);
        });
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      setShowTokenInput(true);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, stores, onStoreClick]);

  if (showTokenInput) {
    return (
      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-4">Enter Mapbox Token</h3>
        <p className="text-sm text-muted-foreground mb-4">
          To display the interactive map, please enter your Mapbox public token. 
          Get yours at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
        </p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="mt-2"
            />
          </div>
          <button
            onClick={() => setShowTokenInput(false)}
            disabled={!mapboxToken}
            className="px-4 py-2 bg-primary text-background rounded-lg font-semibold disabled:opacity-50"
          >
            Load Map
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default StoreMap;
