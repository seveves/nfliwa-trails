import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { markerIcons } from '../lib/markerIcons';

export default function LeafletTrailMap() {
  return (
    <MapContainer
      center={[48.72661, 9.48137]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '350px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.7293, 9.48204]} icon={markerIcons.blue}>
        <Popup>
          <h2>Naddefatz</h2>
          <p>Unser Haus-Trail</p>
          <Link href="/trails/14796212">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.729123, 9.482666]} icon={markerIcons.orange}>
        <Popup>
          <h2>Wildraub</h2>
          <p>Flowiger Zubgringer für Brünnele und Förstermord</p>
          <Link href="/trails/14796212">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.728881, 9.484211]} icon={markerIcons.green}>
        <Popup>
          <h2>Brünnele</h2>
          <p>Kurven, Flow und ein paar Sprünge</p>
          <Link href="/trails/14796212">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72597, 9.48086]} icon={markerIcons.green}>
        <Popup>
          <h2>The Herbert</h2>
          <p>Uphill zu Mammut und Mooskopf</p>
          <Link href="/trails/122407488">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72450, 9.47954]} icon={markerIcons.red}>
        <Popup>
          <h2>Mammut</h2>
          <p>Schnell, Kurven, Wurzeln</p>
          <Link href="/trails/122407477">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72473, 9.47916]} icon={markerIcons.violet}>
        <Popup>
          <h2>Mooskopf</h2>
          <p>Fitness-Trail</p>
          <Link href="/trails/122407465">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.72943, 9.48492]} icon={markerIcons.grey}>
        <Popup>
          <h2>Förstermord</h2>
          <p>Nach wahren Begebenheiten</p>
          <Link href="/trails/122407486">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.73049, 9.4911]} icon={markerIcons.black}>
        <Popup>
          <h2>Förstertod</h2>
          <p>Nach wahren Begebenheiten</p>
          <Link href="/trails/122407487">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.725602, 9.478047]} icon={markerIcons.gold}>
        <Popup>
          <h2>Reichenbach I</h2>
          <p>Neu in 2025!</p>
          <Link href="/trails/122407487">
            Alle Trailinfos
          </Link>
        </Popup>
      </Marker>
      <Marker position={[48.722502, 9.469947]} icon={markerIcons.gold}>
        <Popup>
          <h2>Reichenbach II</h2>
          <p>Neu in 2025!</p>
          <Link href="/trails/122407487">
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