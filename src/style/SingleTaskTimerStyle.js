import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 0 1rem;
  border-radius: 0.5rem;
  overflow-y: auto;
  button {
    background-color: transparent;
    border-color: transparent;
  }
  svg {
    font-size: 20px;
    color: #767b8e;
    cursor: pointer;
  }
  .task-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font-weight: 500;
    }
  }
  .timer {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 15px;
    }
  }
`;

export default Wrapper;
