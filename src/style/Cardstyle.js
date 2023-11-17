import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-weight: 600;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      svg {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
    button {
      border-color: transparent;
      padding: 0.25rem 1rem;
      cursor: pointer;
      font-weight: bold;
    }
  }
  .iphone {
    color: #fd6618;
    background-color: #fff2ec;
  }
  .android {
    color: #58c597;
    background-color: #ebf8f2;
  }
  .branding {
    color: #5d65b1;
    background-color: #eeeff7;
  }
  .website {
    color: #07afd8;
    background-color: #e6f7fb;
  }
`;

export default Wrapper;
