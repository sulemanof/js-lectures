import $ from 'jquery';
import { get } from 'lodash';

import { getWeather } from './getWeather';

const input = $('#input');
const button = $('#button');
const tbody = $('#tbody');
const tdata = $('#tableData');

const createRawData = ({ current, location }) => {
  if (!location || !current) return;

  const name = get(location, 'name');
  const { country } = location;
  const { temp_c, temp_f } = current;

  const raw = `<tr><td>${name}</td><td>${country}</td><td>${temp_c}</td><td>${temp_f}</td></tr>`;

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
