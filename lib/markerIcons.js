import L from 'leaflet';

const MARKER_COLORS = [
  'green',
  'red',
  'blue',
  'violet',
  'grey',
  'black',
  'yellow',
  'gold',
  'orange',
];

export const createMarkerIcon = (color) => {
  return new L.Icon({
    iconUrl: `marker-icon-${color}.png`,
    shadowUrl: 'marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

export const markerIcons = {
  green: createMarkerIcon('green'),
  red: createMarkerIcon('red'),
  blue: createMarkerIcon('blue'),
  violet: createMarkerIcon('violet'),
  grey: createMarkerIcon('grey'),
  black: createMarkerIcon('black'),
  yellow: createMarkerIcon('yellow'),
  gold: createMarkerIcon('gold'),
  orange: createMarkerIcon('orange'),
};
