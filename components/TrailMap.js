import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

const greenMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-green.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-red.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blueMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-blue.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const violetMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-violet.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greyMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-grey.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blackMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-black.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const yellowMarkerIcon = new L.Icon({
  iconUrl: 'marker-icon-yellow.png',
  shadowUrl: 'marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function LeafletTrailMap() {
  return (
    <MapContainer
      center={[48.726733, 9.4874942]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '350px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.7293, 9.48204]} icon={blueMarkerIcon}>
        <Popup>
          <h2>Naddefatz</h2>
          <p>Unser Haus-Trail</p>
          <Link href="/trails/14796212" alt="Naddefatz Trail">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72597, 9.48086]} icon={greenMarkerIcon}>
        <Popup>
          <h2>The Herbert</h2>
          <p>Uphill zu Mammut und Mooskopf</p>
          <Link href="/trails/122407488" alt="The Herbert Trail">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72450, 9.47954]} icon={redMarkerIcon}>
        <Popup>
          <h2>Mammut</h2>
          <p>Schnell, Kurven, Wurzeln</p>
          <Link href="/trails/122407477" alt="Mammut Trail">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72473, 9.47916]} icon={violetMarkerIcon}>
        <Popup>
          <h2>Mooskopf</h2>
          <p>Fitness-Trail</p>
          <Link href="/trails/122407465" alt="Mooskopf Trail">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72943, 9.48492]} icon={greyMarkerIcon}>
        <Popup>
          <h2>Förstermord</h2>
          <p>Nach wahren Begebenheiten</p>
          <Link href="/trails/122407486" alt="Förstermord Trail">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.73049, 9.4911]} icon={blackMarkerIcon}>
        <Popup>
          <h2>Förstertod</h2>
          <p>Nach wahren Begebenheiten</p>
          <Link href="/trails/122407487" alt="Förstertod Trail">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72778, 9.52868]} icon={yellowMarkerIcon}>
        <Popup>
          <h2>Ebertrail</h2>
          <p>Dieser Trail kann gut in eine Runde eingebaut werden.</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

8/48.72778/9.52868
