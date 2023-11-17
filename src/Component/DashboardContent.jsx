import React from 'react';
import DashboardTasks from './DashboardTasks';
import TasksTimer from './TasksTimer';
import DashboardCalendar from './DashboardCalendar';
import DashboardChat from './DashboardChat';
import DashboardTaskProgress from './DashboardTaskProgress';
import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/DashboardContentStyle';
const DashboardContent = () => {
  const { getCompanyList } = useDashboardContext();
  return (
    <Wrapper>
      {getCompanyList().length ? (
        getCompanyList()
          .slice(0, 2)
          .map((link, index) => (
            <DashboardTaskProgress key={index} company={link} />
          ))
      ) : (
        <DashboardTaskProgress />
      )}
      <DashboardCalendar />
      <DashboardTasks />
      <TasksTimer />
      <DashboardChat />
    </Wrapper>
  );
};

export default DashboardContent;
