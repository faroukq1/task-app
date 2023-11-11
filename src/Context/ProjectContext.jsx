import { useContext, useState } from 'react';
import { createContext } from 'react';
import { projectTaskStatus } from '../Data';
import { nanoid } from 'nanoid';
import logo from '../assets/randomLogo.jpg';
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectStatus, setProjectStatus] = useState(projectTaskStatus);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [taskDetails, setTaskDetail] = useState({
    id: '',
    number: 1,
    name: '',
    done: false,
    text: '',
    companyPic: logo,
    company: '',
    subName: 'Inc.',
    taskTimer: {
      secound: 0,
      minite: 0,
      hour: 0,
      other: false,
    },
  });
  return (
    <ProjectContext.Provider
      value={{
        projectStatus,
        isAddTaskOpen,
        setIsAddTaskOpen,
        taskDetails,
        setTaskDetail,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
