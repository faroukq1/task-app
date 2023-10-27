import React from 'react';
import styled from 'styled-components';
import DashboardTasks from './DashboardTasks';
import TasksTimer from './TasksTimer';
import DashboardCalendar from './DashboardCalendar';
import DashboardChat from './DashboardChat';
import DashboardTaskProgress from './DashboardTaskProgress';
import { useDashboardContext } from '../Context/DashboardContext';
const DashboardContent = () => {
  const { getCompanyList } = useDashboardContext();
  return (
    <Wrapper>
      {getCompanyList()
        .slice(0, 2)
        .map((link, index) => (
          <DashboardTaskProgress key={index} company={link} />
        ))}
      <DashboardCalendar />
      <DashboardTasks />
      <TasksTimer />
      <DashboardChat />
      <DashboardChat />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-areas: 'taskProgress task calendar';
`;
export default DashboardContent;
