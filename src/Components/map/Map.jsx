import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

function Map({ position }) {
  return (
    <section className="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Your Current Location ⬇️</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
