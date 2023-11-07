import { useContext, useState } from 'react';
import { createContext } from 'react';
import { projectTaskStatus } from '../Data';
import { nanoid } from 'nanoid';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectStatus, setProjectStatus] = useState(projectTaskStatus);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [taskDetails, setTaskDetail] = useState({
    id: nanoid(),
    number: 1,
    name: '',
    done: false,
    text: '',
    companyPic: 'ramdomPic',
    company: '',
    subName: 'Inc.',
    taskTimer: {
      secound: 0,
      minite: 15,
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
