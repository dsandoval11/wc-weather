import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './WcWeather.style.js';
import { getTemperature } from './service.js';

export class WcWeather extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      city: { type: String },
      loading: { attribute: false },
      weather: { attribute: false }
    };
  }

  constructor() {
    super();
    this.city = 'Cali';
    this.loading = false;
    this.weather = {};
  }

  updated(changedProperties) {
    if (changedProperties.has('city')) {
      this.loading = true;
      setTimeout(()=> {
        getTemperature(this.city).then(data => {
          this.weather = data;
          this.loading = false;
        });
      }, 0);
    }
  }

  render() {
    return html`
      <div class="container ${classMap({skeleton: this.loading})}">
        <div class="content">
          <div class="info-city">
            <span class="city">
              ${this.weather?.city}, ${this.weather?.country}
            </span>
            <span class="temperature">${this.weather?.temperature}°C</span>
            <span class="description">${this.weather?.description}</span>
          </div>
          <div class="weather">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/16/3313/3313952.png" alt="humidity">
              <span>${this.weather?.humidity}%</span>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/16/2985/2985511.png" alt="thermal sensation">
              <span>${this.weather?.feelsLike}°C</span>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/16/615/615579.png" alt="Wind">
              <span>${this.weather?.wind} KM/H</span>
            </div>
          </div>
        </div>
        <img
          class="weather-img"
          src=${this.weather?.icon}
          alt=${this.weather?.description}
        />
      </div>
    `;
  }
}
