import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { RandomTasks, timerTasks } from '../Data';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [tasks, setTasks] = useState(RandomTasks);
  const [active, setActive] = useState('DASHBOARD');
  const [taskTimerList, setTaskTimerList] = useState(timerTasks);
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
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
