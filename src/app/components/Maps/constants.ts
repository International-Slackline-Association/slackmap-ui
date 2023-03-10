export const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN as string;

export const defaultMapSettings = {
  mapboxAccessToken: MAPBOX_TOKEN,
  attributionControl: false,
  pitchWithRotate: false,
  maxPitch: 0,
  fog: {
    'horizon-blend': 0.1,
    color: 'grey',
    'high-color': 'black',
  } as any,
};

export const defaultMapViewState = {
  latitude: 35.92263245263329,
  longitude: -39.41644394307363,
  zoom: 1,
  bearing: 0,
  pitch: 0,
};

const baseUrl = process.env.REACT_APP_APP_DATA_BASE_URL;
export const geoJsonURL = {
  linePoints: baseUrl + '/geojson/lines/points.geojson',
  lines: baseUrl + '/geojson/lines/all.geojson',
  spotPoints: baseUrl + '/geojson/spots/points.geojson',
  spots: baseUrl + '/geojson/spots/all.geojson',
  guidePoints: baseUrl + '/geojson/guides/points.geojson',
  guides: baseUrl + '/geojson/guides/all.geojson',
  clustersAll: baseUrl + '/geojson/clusters/all.geojson',
  clustersLinesSpots: baseUrl + '/geojson/clusters/lines-spots.geojson',
  clustersLinesGuides: baseUrl + '/geojson/clusters/lines-guides.geojson',
  clustersSpotsGuides: baseUrl + '/geojson/clusters/spots-guides.geojson',

  groups:
    'https://raw.githubusercontent.com/International-Slackline-Association/slackline-data/master/communities/groups/groups.geojson',
  managedAreas:
    'https://raw.githubusercontent.com/International-Slackline-Association/slackline-data/master/communities/organizations/managedAreas.geojson',
};

export const mapStyles = {
  streets: 'mapbox://styles/mapbox/streets-v11',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
  satellite: 'mapbox://styles/mapbox/satellite-v9',
  light: 'mapbox://styles/mapbox/light-v11',
  dark: 'mapbox://styles/mapbox/dark-v11',
  outdoors: 'mapbox://styles/mapbox/outdoors-v11',
};
