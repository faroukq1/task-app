import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  width: 100%;
  max-height: 370px;
  overflow-y: auto;
  div {
    margin: 1rem 0;
  }
  .error {
    h1 {
      color: #474747;
    }
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
  }
  .company {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.5rem;
    h1 {
      color: #262c3f;
    }
    svg {
      cursor: pointer;
      font-size: 17px;
      color: #767b8e;
    }
  }
`;
export default Wrapper;
