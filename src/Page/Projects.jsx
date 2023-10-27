import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardBar from '../Component/DashboardBar';
import { AiOutlinePlus } from 'react-icons/ai';
import ProjectsCard from '../Component/ProjectsCard';
import { useProjectContext } from '../Context/ProjectContext';
import AddTask from '../Component/AddTask';
const Projects = () => {
  const { projectStatus, isAddTaskOpen, setIsAddTaskOpen } =
    useProjectContext();

  return (
    <Wrapper>
      <DashboardBar />
      <div className="container">
        <div className="add-task">
          <button onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}>
            <AiOutlinePlus />
          </button>
        </div>
        <div className="main">
          {projectStatus.map((item) => {
            const { id, status, info } = item;
            return <ProjectsCard key={id} status={status} info={info} />;
          })}
        </div>
      </div>
      {isAddTaskOpen ? <AddTask /> : null}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    height: 750px;
    overflow-y: auto;
  }
  border-radius: 2rem;
  padding: 1rem 2rem;
  .add-task {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 2rem 0;
    button {
      background-color: #fd7b38;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: transparent;
      cursor: pointer;
      svg {
        font-size: 20px;
        color: white;
        font-weight: bold;
      }
    }
  }
  .main {
    margin: 1rem 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;
export default Projects;
