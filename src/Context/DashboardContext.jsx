import { useState, useContext, createContext, useEffect } from 'react';
export const DashboardContext = createContext();

const test = [
  {
    id: 1212121,
    number: 1,
    name: 'just for test',
    done: false,
    text: 'just for test',
    companyPic: 'empty logo',
    company: 'google',
    subName: 'Inc.',
    taskTimer: {
      secound: 10,
      minite: 10,
      hour: 1,
      other: false,
    },
  },
  {
    id: 1212121,
    number: 1,
    name: 'just for test',
    done: false,
    text: 'just for test',
    companyPic: 'empty logo',
    company: 'google',
    subName: 'Inc.',
    taskTimer: {
      secound: 22,
      minite: 19,
      hour: 2,
      other: false,
    },
  },
];

export const DashboardProvider = ({ children }) => {
  const [tasks, setTasks] = useState(test);
  const [active, setActive] = useState('DASHBOARD');
  const [profiles, setProfiles] = useState([]);
  const [taskTimer, setTaskTimer] = useState([]);
  // get timer list from task
  const getTimerList = () => {
    const newList = tasks.map((item) => {
      return {
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
    tasks.map((task) =>
      task.id === id
        ? ((task.done = !task.done), newTaskList.push(task))
        : newTaskList.push(task)
    );
    setTasks(newTaskList);
  };
  // change page
  const makePageActive = (pageName) => setActive(pageName);
  // get task length
  const getTaskLength = () => tasks.length;
  // play task
  const playFirstTask = (titleIndex) => {
    const newTimerList = [...taskTimerList];
    newTimerList[titleIndex].timerList[0].play = true;
    setTaskTimerList(newTimerList);
  };
  return (
    <DashboardContext.Provider
      value={{
        tasks,
        setTasks,
        changeTaskState,
        active,
        setActive,
        makePageActive,
        playFirstTask,
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
