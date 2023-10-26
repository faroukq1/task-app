import React from 'react';
import styled from 'styled-components';
import DashboardBar from '../Component/DashboardBar';
import { AiOutlinePlus } from 'react-icons/ai';
import ProjectsStatus from '../Component/ProjectsStatus';

const Projects = () => {
  return (
    <Wrapper>
      <DashboardBar />
      <div className="add-task">
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="main">
        <ProjectsStatus />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: 1px solid red;
  .add-task {
    display: flex;
    justify-content: flex-end;
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
  }
`;
export default Projects;
