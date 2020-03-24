import styled from 'styled-components';

export default styled.div`
  padding: 16px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type='text'] {
    width: 50%;
    height: 30px;
    line-height: 2;
    border: 0;
    font-size: 16px;
    padding: 8px;
    background: transparent;
    transition: all 100ms ease;
    border-bottom: 1px solid transparent;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  }

  input[type='text']::placeholder {
    color: #999;
  }

  input[type='text']:focus {
    outline: none;
    box-shadow: 0 12px 10px 0 rgba(0, 0, 0, 0.09);
  }

  input[type='text']:hover {
    box-shadow: 0 12px 10px 0 rgba(0, 0, 0, 0.09);
  }

  button {
    width: 300px;
    height: 30px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 32px;
    font-size: 1.5rem;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    transition: all 100ms ease;
  }

  button:focus {
    outline: none;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  }

  button:hover {
    box-shadow: 0 12px 10px 0 rgba(0, 0, 0, 0.09);
  }

  .tags {
    display: flex;
    list-style: none;
    min-height: 50px;
    width: 80%;
    max-width: 1000px;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 16px;
  }

  .tags li {
    font-size: 1.5rem;
    padding: 16px;
    height: 20px;
    border-radius: 32px;
    background: #f4f4f4;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    cursor: pointer;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    position: relative;
  }

  .tags li::after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: 'x';
    right: -8px;
    top: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f8f8f8;
  }
`;
