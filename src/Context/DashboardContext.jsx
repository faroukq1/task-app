<<<<<<< HEAD
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { RandomTasks, timerTasks, profilesData } from "../Data";
=======
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { RandomTasks, timerTasks } from '../Data';
>>>>>>> 8279d286e8b8451071b1f06ed3c18b74f284c550
export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [tasks, setTasks] = useState(RandomTasks);
  const [active, setActive] = useState('DASHBOARD');
  const [taskTimerList, setTaskTimerList] = useState(timerTasks);
  const [profiles, setProfiles] = useState(profilesData);
  // get company task details
  const getCompanyTaskDetails = (companyName) => {
    const companyTasks = tasks.filter((item) => item.company === companyName);
    const companyTasksNumber = companyTasks.length;
    const companyTaskDone = companyTasks.filter((item) => item.done);
    const companyTasksDoneNumber = companyTaskDone.length;
    const companyLogo = companyTasks[0].companyPic;
    return {
      companyName,
      companyTasksNumber,
      companyTasksDoneNumber,
      companyLogo,
    };
  };
<<<<<<< HEAD
=======

  console.log(getCompanyTaskDetails('google'));
>>>>>>> 8279d286e8b8451071b1f06ed3c18b74f284c550
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
        taskTimerList,
        setTaskTimerList,
        playFirstTask,
        getCompanyTaskDetails,
        profiles,
        setProfiles,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
