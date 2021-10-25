import { css } from 'lit';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  :host {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif;
    min-width: 700px;
  }

  .container {
    background: #fffffb;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    width: 100%;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .content {
    display: flex;
    position: relative;
    z-index: 1;
  }

  .info-city {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    min-width: 370px;
  }

  .city {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
    text-shadow: rgb(165 165 165) 0px 2px 2px;
  }

  .temperature {
    font-size: 70px;
  }

  .description {
    text-transform: uppercase;
    background-color: #f3efec;
    padding: 8px 12px;
    border-radius: 25px;
    font-size: 14px;
    letter-spacing: 0.05em;
  }

  .weather {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .weather img {
    width: 15px;
    height: 15px;
  }

  .weather-img {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
  }

  .skeleton span {
    background: #e2e2e2;
    color: transparent;
    overflow: hidden;
    position: relative;
    text-indent: 100%;
    white-space: nowrap;
  }

  .skeleton span::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 0;
    height: 100%;
    width: 50px;
    background: linear-gradient(to right, #e2e2e2 25%, #d5d5d5 50%, #e2e2e2 100%);
    animation-name: gradient-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    filter: blur(5px);
  }

  @keyframes gradient-animation {
    from {
      left: 0%;
    }
    to {
      left: 100%;
    }
  }

`;
