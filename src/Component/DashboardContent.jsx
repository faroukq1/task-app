import React from "react";
import styled from "styled-components";
import DashboardTasks from "./DashboardTasks";
import TasksTimer from "./TasksTimer";
import DashboardCalendar from "./DashboardCalendar";
import DashboardChat from "./DashboardChat";
import DashboardTaskProgress from "./DashboardTaskProgress";
const DashboardContent = () => {
  return (
    <Wrapper>
      <DashboardTaskProgress />
      <DashboardTaskProgress />
      <DashboardCalendar />
      <DashboardTasks />
      <TasksTimer />
      <DashboardChat />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-areas: "taskProgress task calendar";
`;
export default DashboardContent;
