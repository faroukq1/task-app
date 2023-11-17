import styled from 'styled-components';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  border-bottom: 1px solid #f7f6f4;
  padding: 0.75rem;
  .task-info {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 500;
      color: #383f4f;
    }
    button {
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      svg {
        font-size: 25px;
        color: #7c8193;
        text-decoration: line-through;
      }
    }
  }
  span {
    font-weight: bold;
  }
`;

export default Wrapper;
