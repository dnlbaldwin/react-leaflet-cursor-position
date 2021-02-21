import CursorPosition from "react-leaflet-cursor-position";

import {
  LayersControl,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import "./App.css";

function App() {
  return (
    <MapContainer
      center={[45.4, -75.7]}
      zoom={11}
      minZoom={3}
      maxZoom={16}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      zoomControl={false}
    >
      <ZoomControl position="topright"></ZoomControl>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="ESRI Satellite">
          <TileLayer
            url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://wiki.openstreetmap.org/wiki/Esri"></a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="ESRI Clarity">
          <TileLayer
            url="https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://wiki.openstreetmap.org/wiki/Esri"></a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OSM Topo">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <CursorPosition />
    </MapContainer>
  );
}

export default App;