import styled from 'styled-components';
const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 20%;
  right: 3.5%;
  background-color: white;
  width: 24%;
  height: 50%;
  border-radius: 1rem;
  padding: 2rem;
  .task-name,
  .text,
  .company {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 1rem 0;
    label {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 0.75rem;
    }
    input {
      width: 100%;
      height: 3rem;
      font-size: 17px;
      font-weight: bold;
      padding: 1rem;
    }
  }
  .button {
    width: 100%;
    button {
      padding: 0.5rem 3rem;
      margin: 0.25rem 0;
      border-color: transparent;
      border-radius: 1rem;
      background-color: #fd7733;
      color: white;
      font-weight: normal;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .set-timer {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    p {
      font-weight: bold;
    }
    option {
      padding: 1rem;
    }
  }
  .set-custom-timer {
    width: 100%;
    p {
      font-weight: bold;
      margin: 0.5rem 0;
    }
    > div {
      display: flex;
      gap: 1rem;
      input {
        margin: 0.5rem 0;
        padding: 0.25rem;
        width: calc(97% / 3);
      }
    }
  }
  .back {
    background-color: #fd7733;
    border-color: transparent;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .select-option {
    padding: 0.25rem;
    border-color: transparent;
    background-color: #eee;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    outline: none;
  }
`;

export default Wrapper;
