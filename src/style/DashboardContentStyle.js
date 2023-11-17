import styled from 'styled-components';
const Wrapper = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-areas: 'taskProgress task calendar';
  overflow-x: hidden;
  overflow-y: auto;
`;
export default Wrapper;
