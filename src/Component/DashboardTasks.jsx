import React, { useState } from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';
import DashboardTask from './DashboardTask';
import { useProjectContext } from '../Context/ProjectContext';
import { Link } from 'react-router-dom';
const DashboardTasks = () => {
  const { tasks } = useDashboardContext();
  const { setIsAddTaskOpen } = useProjectContext();
  if (!tasks || tasks?.length === 0) {
    return (
      <Wrapper>
        <div className="error">
          <p className="error-msg">please add some tasks</p>
          <Link to="projects">
            <button onClick={() => setIsAddTaskOpen(true)}>
              Add Task here
            </button>
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>
        My Task <span className="task-number">{`(${tasks.length})`}</span>
      </h3>
      <div className="tasks">
        {tasks.map((task, index) => (
          <DashboardTask
            key={task.id}
            {...task}
            lastTask={index === tasks.length - 1 ? true : false}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: task;
  width: 100%;
  height: 350px;
  max-height: 450px;
  overflow-y: auto;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  .tasks {
    margin: 1rem 0;
  }
  h3 {
    color: #383f4f;
    margin: 0 1rem;
  }
  .task-number {
    color: #e0e0e5;
    font-size: 20px;
    margin-left: 0.5rem;
  }
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .error-msg {
      font-weight: bold;
      color: #383f4f;
      font-size: 20px;
    }
    button {
      background-color: #fd7733;
      color: #5d5f66;
      font-weight: bold;
      border-color: transparent;
      padding: 0.25rem 1.5rem;
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`;
export default DashboardTasks;
