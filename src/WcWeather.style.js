import { css } from 'lit';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  :host {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    padding: 25px;
    color: var(--temperature-comp-text-color, #000);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #ffe5b5;
  }

  .container {
    background: #fffffb;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 90%;
    padding: 42px;
  }

  .info-city {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .city {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .description {
    text-transform: uppercase;
    background-color: #f3efec;
    padding: 4px 12px;
    border-radius: 25px;
    font-size: 14px;
    letter-spacing: 0.05em;
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
