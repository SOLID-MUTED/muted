'use client';
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';

const Maps: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 51.505, lng: -0.09 });
  const [position, setPosition] = useState<{ lat: number; lng: number; accuracy: number } | null>(null);

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = pos.coords;
      setPosition({ lat: latitude, lng: longitude, accuracy });
      setCenter({ lat: latitude, lng: longitude });
    };

    const error = (err: GeolocationPositionError) => {
      if (err.code === 1) {
        alert('Error: Access is denied!');
      } else {
        alert('Error: Unknown!');
      }
    };

    const watchPosition = navigator.geolocation.watchPosition(success, error);

    return () => {
      navigator.geolocation.clearWatch(watchPosition);
    };
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={style}  // Menggunakan properti style dengan huruf kecil
      zoomControl={false}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
      {position && (
        <>
          <Marker position={[position.lat, position.lng]} />
          <Circle center={[position.lat, position.lng]} radius={position.accuracy} />
        </>
      )}
    </MapContainer>
  );
};

export default Maps;
