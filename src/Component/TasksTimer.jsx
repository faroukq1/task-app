import React from 'react';
import styled from 'styled-components';
import SingleTaskTimer from './SingleTaskTimer';
import { useDashboardContext } from '../Context/DashboardContext';
const TasksTimer = () => {
  const { taskTimerList, setTaskTimerList } = useDashboardContext();
  return (
    <Wrapper>
      {taskTimerList.map((task, index) => {
        return <SingleTaskTimer key={task.id} {...task} titleIndex={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 450px;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  overflow-y: auto;
`;
export default TasksTimer;
