import styled from 'styled-components';

export default styled.div`
  padding: 16px;

  section {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    position: relative;

    div {
      position: relative;
      overflow: hidden;
    }

    div img {
      width: 100%;
      height: 230px;
      object-fit: cover;
      box-shadow: 0 12px 10px 0 rgba(0, 0, 0, 0.09);
      transition: all 300ms ease-out;
    }

    div img:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  @media (max-width: 1600px) {
    section {
      grid-template-columns: 1fr 1fr;
      width: 80%;
      margin: 0 auto;

      div img {
        height: 100%;
      }
    }
  }

  @media (max-width: 1200px) {
    section {
      grid-template-columns: 1fr;
      width: 80%;
      margin: 0 auto;

      div img {
        height: 100%;
      }
    }
  }
`;
