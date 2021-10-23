import { css } from 'lit';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  :host {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    padding: 25px;
    color: var(--temperature-comp-text-color, #202d5b);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #ffe5b5;
  }

  form {
    position: relative;
    margin-bottom: 24px;
  }

  input {
    border: none;
    border-bottom: 2px solid #202d5b;
    background: none;
    font-size: 24px;
    width: 600px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-family: 'Poppins', sans-serif;
    color: rgba(32, 45, 91, 0.3);
  }

  button {
    background: none;
    border: none;
    transform: rotate(-45deg);
    font-size: 28px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #202d5b;
    cursor: pointer;
  }

  .container {
    background: #fffffb;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    max-width: 800px;
    width: 90%;
    padding: 42px;
    position: relative;
    overflow: hidden;
  }

  .content {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
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

  .weather-img {
    position: absolute;
    top: -100px;
    right: -65px;
    width: 300px;
  }
`;
