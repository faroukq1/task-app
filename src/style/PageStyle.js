import styled from 'styled-components';
const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  width: 100%;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  svg,
  p {
    color: #5d5f66;
    font-weight: bold;
  }
  svg {
    font-size: 1.25rem;
  }
`;
export default Wrapper;
