import styled from 'styled-components';
const Wrapper = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1rem;
  p {
    color: #9397a6;
  }
  h1 {
    color: #171e32;
  }
  .dots {
    cursor: pointer;
    svg {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .slack {
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      border-color: transparent;
    }
    h1 {
      font-weight: 500;
      font-size: 20px;
    }
  }
  .phone-btn {
    display: flex;
    gap: 2rem;
    button {
      padding: 0.25rem 1.5rem;
      font-weight: bold;
      border-color: transparent;
      cursor: pointer;
      &:first-child {
        background-color: #ebf8f2;
        color: #448e46;
      }
      &:nth-child(2) {
        color: #fd6618;
        background-color: #fff2ec;
      }
    }
  }
`;

export default Wrapper;
