const input = document.getElementById('input');
const form = document.getElementById('form');
const positionButton = document.getElementById('position');
const clearButton = document.getElementById('clear');
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather();
});

positionButton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(({ coords }) => getWeather(`${coords.latitude},${coords.longitude}`));
});

clearButton.addEventListener('click', () => {
  tbody.innerHTML = '';
  tdata.classList.remove('visible');
});
