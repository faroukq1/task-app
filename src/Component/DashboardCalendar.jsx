import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Wrapper from '../style/DashboardCalendarStyle';
const DashboardCalendar = () => {
  return (
    <Wrapper>
      <Calendar />
    </Wrapper>
  );
};

export default DashboardCalendar;
