import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem 0 0 0;
  .active {
    background: linear-gradient(
      110deg,
      rgba(253, 118, 51, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    svg,
    p {
      color: #fd7733;
    }
    &::before {
      position: absolute;
      content: '';
      width: 3px;
      height: 8%;
      right: 0;
      background-color: #fd7733;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Wrapper;
