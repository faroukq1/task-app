import { useContext, useState } from 'react';
import { createContext } from 'react';
import { projectTaskStatus } from '../Data';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectStatus, setProjectStatus] = useState(projectTaskStatus);
  return (
    <ProjectContext.Provider value={{ projectStatus }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
