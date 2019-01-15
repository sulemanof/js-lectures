import './styles.css';
import { get } from 'lodash';
import $ from 'jquery';
import getWeather from './getWeather';

const input = $('#input');
const button = $('#button');
const tbody = $('#tbody');
const tdata = $('#tableData');

const createRawData = ({ current, location }) => {
  if (!location || !current) return;

  const name = get(location, 'name');
  const { country } = location;
  const { temp_c: celsium, temp_f: farenheit } = current;

  const raw = `<tr><td>${name}</td><td>${country}</td><td>${celsium}</td><td>${farenheit}</td></tr>`;

  tbody.append(raw);
  input.val('');

  if (!tdata.hasClass('visible')) {
    tdata.addClass('visible');
  }
};

button.on('click', () => getWeather(input.val()).then(createRawData));

$('#position').on('click', () => {
  navigator.geolocation.getCurrentPosition(({ coords }) => getWeather(`${coords.latitude},${coords.longitude}`).then(createRawData));
});
