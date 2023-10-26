import React from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard';

const ProjectsStatus = () => {
  return (
    <Wrapper>
      <div className="status">
        <h1>Working</h1>
        <span>(3)</span>
      </div>
      <ProjectsCard />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .status {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    h1 {
      color: #1e2538;
    }
    span {
      color: #878b9b;
    }
  }
`;
export default ProjectsStatus;
