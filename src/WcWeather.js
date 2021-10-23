import { html, LitElement } from 'lit';
import styles from './WcWeather.style.js';
import { getTemperature, getIcon } from './service.js';

export class WcWeather extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      city: { type: String },
      weather: { attribute: false },
    };
  }

  constructor() {
    super();
    this.city = 'Cali';
    this.regionNames = new Intl.DisplayNames(['es'], { type: 'region' });
    this.weather = {
      city: '',
      countryCode: '',
      description: '',
      feelsLike: '',
      humidity: '',
      icon: '01d',
      temperature: '',
      wind: '',
    };
  }

  firstUpdated() {
    this.cityInput = this.renderRoot.getElementById('city');
  }

  updated(changedProperties) {
    if (changedProperties.has('city')) {
      getTemperature(this.city).then(data => {
        this.weather = data;
      });
    }
  }

  search(event) {
    event.preventDefault();
    this.city = this.cityInput.value;
    this.cityInput.value = '';
  }

  getCountry(countryCode) {
    return this.regionNames.of(countryCode);
  }

  render() {
    return html`
      <h2>${this.city}</h2>
      <form @submit=${this.search}>
        <input placeholder="Buscar ciudad" type="text" id="city" />
        <button type="submit">&#9906;</button>
      </form>
      <hr />
      <div class="container">
        <div class="info-city">
          <span class="city">
            ${this.weather.city}, ${this.getCountry(this.weather.countryCode)}
          </span>
          <span class="description">${this.weather.description}</span>
          <span>Viento: ${this.weather.wind} KM/h</span>
          <span>Humedad: ${this.weather.humidity}%</span>
        </div>
        <div class="weather">
          <img
            src=${getIcon(this.weather.icon)}
            alt=${this.weather.description}
          />
          <div class="temp">
            <span class="real"
              >Temperatura: ${this.weather.temperature} °C</span
            >
            <span class="feels-like"
              >Sensación térmica: ${this.weather.feelsLike} °C</span
            >
          </div>
        </div>
      </div>
    `;
  }
}
