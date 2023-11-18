import styled from 'styled-components';
const Wrapper = styled.section`
  .container {
    height: 750px;
    overflow-y: auto;
  }
  border-radius: 2rem;
  .add-task {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 2rem 0;
    button {
      background-color: #fd7b38;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: transparent;
      cursor: pointer;
      svg {
        font-size: 20px;
        color: white;
        font-weight: bold;
      }
    }
  }
  .main {
    margin: 1rem 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export default Wrapper;
