import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: 25px;
    color: var(--temperature-comp-text-color, #000);
  }

  .info-city {
    display: flex;
    flex-direction: column;
  }

  .container {
    background: #6bbae7a1;
    border: 1px solid;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    padding: 12px;
  }

  .weather {
    display: flex;
  }

  .temp {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
