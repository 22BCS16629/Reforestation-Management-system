import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample reforestation sites data
const sites = [
  { id: 1, name: "Amazon Restoration", lat: -3.4653, lng: -62.2159, trees: 5000 },
  { id: 2, name: "Congo Basin Project", lat: -0.7893, lng: 15.6031, trees: 3200 },
  { id: 3, name: "Indonesian Forest", lat: -0.7893, lng: 113.9213, trees: 4100 }
];

function ForestMap() {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sites.map(site => (
          <Marker key={site.id} position={[site.lat, site.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{site.name}</h3>
                <p>Trees Planted: {site.trees}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ForestMap;