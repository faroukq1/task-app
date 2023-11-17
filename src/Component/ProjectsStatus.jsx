import React from 'react';
import ProjectsCard from './ProjectsCard';
import Wrapper from '../style/PrrojectsStatusStyle';
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

export default ProjectsStatus;
