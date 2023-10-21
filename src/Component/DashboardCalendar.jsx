import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const DashboardCalendar = () => {
  return (
    <Wrapper>
      <Calendar />
    </Wrapper>
  );
};

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

export default DashboardCalendar;
