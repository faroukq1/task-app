import styled from 'styled-components';
const Wrapper = styled.div`
background-color: white;
border-radius: 2rem;
display: flex; 
justify-content: center;
align-items: flex-start;
grid-area: calendar;
.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  border-color: transparent;
  border-radius: 1rem;
}
.react-calendar {
    width: 400px;
    p,
    span,
    abbr {
      color: #383f4f;
      text-decoration: none;

    }
    button {
      &:hover {
        background-color: #fd7733;
        abbr {
          background-color: #fd7733;
      }
      abbr {
        font-size: 15px;
      }
    }
  }
`;
export default Wrapper;
