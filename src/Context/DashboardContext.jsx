import { useState, useContext, createContext, useEffect } from 'react';
export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState('DASHBOARD');
  const [profiles, setProfiles] = useState([]);
  const [taskTimer, setTaskTimer] = useState([]);
  // get timer list from task
  const getTimerList = () => {
    const newList = tasks.map((item) => {
      return {
        id: item.id,
        name: item.name,
        company: item.company,
        time: { ...item.taskTimer },
      };
    });
    setTaskTimer(newList);
  };
  useEffect(() => {
    getTimerList();
  }, [tasks]);
  // get company task details
  const getCompanyTaskDetails = (companyName) => {
    const companyTasks = tasks.filter((item) => item.company === companyName);
    const companyTasksNumber = companyTasks.length;
    const companyTaskDone = companyTasks.filter((item) => item.done);
    const companyTasksDoneNumber = companyTaskDone.length;
    const companyLogo = companyTasks[0]?.companyPic;
    return {
      companyName,
      companyTasksNumber,
      companyTasksDoneNumber,
      companyLogo,
    };
  };
  // get company list
  const getCompanyList = () => {
    const companyNameList = tasks?.map((item) => item.company);
    const set = new Set(companyNameList);
    return Array.from(set);
  };
  // make task valid
  const changeTaskState = (id) => {
    const newTaskList = [];
    tasks.map((task) => {
      task.id === id
        ? ((task.done = !task.done), newTaskList.push(task))
        : newTaskList.push(task);
    });
    setTasks(newTaskList);
  };
  // make task cheked only
  const makeTaskChecked = (id) => {
    const newTaskList = [];
    tasks.map((task) => {
      task.id === id
        ? ((task.done = true), newTaskList.push(task))
        : newTaskList.push(task);
    });
    setTasks(newTaskList);
  };
  // change page
  const makePageActive = (pageName) => setActive(pageName);
  // get task length
  const getTaskLength = () => tasks.length;

  return (
    <DashboardContext.Provider
      value={{
        tasks,
        setTasks,
        changeTaskState,
        makeTaskChecked,
        active,
        setActive,
        makePageActive,
        getCompanyTaskDetails,
        profiles,
        setProfiles,
        getCompanyList,
        getTaskLength,
        taskTimer,
        setTaskTimer,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
