import { useContext, useState } from 'react';
import { createContext } from 'react';
import { projectTaskStatus } from '../Data';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectStatus, setProjectStatus] = useState(projectTaskStatus);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  return (
    <ProjectContext.Provider
      value={{ projectStatus, isAddTaskOpen, setIsAddTaskOpen }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
