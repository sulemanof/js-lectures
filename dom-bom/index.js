const input = document.getElementById('input');
const button = document.getElementById('button');
const tbody = document.getElementById('tbody');
const tdata = document.getElementById('tableData');

const createRawData = ({ current, location }) => {
  if (!location || !current) return;
  const { name, country } = location;
  const { temp_c, temp_f } = current;

  const raw = `<tr><td>${name}</td><td>${country}</td><td>${temp_c}</td><td>${temp_f}</td></tr>`;

  tbody.innerHTML += raw;
  input.value = '';

  if (!tdata.classList.contains('visible')) {
    tdata.classList.add('visible');
  }
};

const getWeather = (value) => {
  fetch(`http://api.apixu.com/v1/current.json?key=39e2192ab5be4805b4c190756181912&q=${value || input.value}`)
    .then(response => response.json())
    .then(createRawData)
    .catch(error => console.error(error));
};

button.addEventListener('click', getWeather);

position.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(({coords}) => getWeather(`${coords.latitude},${coords.longitude}`));
});


//Add your Unwired Maps Access Token here (not the API token!)
unwired.key = mapboxgl.accessToken = 'pk.a5c3fbf2119bfb2275b62eddbccd76b3';
//Define the map and configure the map's theme
var map = new mapboxgl.Map({
    container: 'map',
    attributionControl: false, //need this to show a compact attribution icon (i) instead of the whole text
    style: unwired.getLayer("streets"), //get Unwired's style template
    zoom: 11,
    center: [78.4008997, 17.4206485]
});
            
//Add Unwired's Layer Control plugin            
//Define layers you want to add to the layer controls; the first element will be the default layer
var layers = ["streets", "earth", "hybrid"];
map.addControl(new unwiredLayerControl({
    key: unwired.key,
    layers: layers
}), 'top-left');

//Add Navigation controls to the map to the top-right corner of the map
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');


//Add a 'full screen' button to the map
map.addControl(new mapboxgl.FullscreenControl());

//Add a Scale to the map
map.addControl(new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'metric' //imperial for miles
}));

//Add Geolocation control to the map (will only render when page is opened over HTTPS)
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

