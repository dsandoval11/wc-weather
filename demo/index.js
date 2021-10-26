import { html, render } from 'lit';
import '../wc-weather.js';

let wcWeather;
let input;

const search = (event) => {
  event.preventDefault();
  wcWeather.city = input.value;
  input.value = '';
}

render(
  html`
    <form @submit=${search}>
      <input placeholder="Buscar ciudad" type="text" id="city" />
      <button type="submit">&#9906;</button>
    </form>
    <wc-weather class="weather" city='Cali'>
    </wc-weather>
  `,
  document.querySelector('#demo')
);

wcWeather = document.querySelector('wc-weather')
input = document.querySelector('#city');
