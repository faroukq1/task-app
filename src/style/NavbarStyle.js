import styled from 'styled-components';
const Wrapper = styled.nav`
  position: relative;
  background-color: white;
  border-radius: 1rem;
  display: grid;
  grid-auto-rows: auto 1fr;
  transition: 1s all ease;
  .logo-container {
    display: flex;
    justify-content: center;
    img {
      width: 90px;
    }
  }
`;
export default Wrapper;
