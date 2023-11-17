import React from 'react';
import { useDashboardContext } from '../Context/DashboardContext';
import { nanoid } from 'nanoid';
import Timer from './Timer';
import { FaPlay } from 'react-icons/fa';
import Wrapper from '../style/TasksTimerStyle';
const TasksTimer = () => {
  const { taskTimer } = useDashboardContext();
  const getComapnies = Array.from(
    new Set([...taskTimer.map((item) => item.company)])
  );
  if (!taskTimer.length) {
    return (
      <Wrapper>
        <div className="error">
          <h1>no timer left</h1>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {getComapnies.map((company) => {
        return (
          <div key={nanoid()}>
            <div className="company">
              <h1>{company}</h1>
              <FaPlay />
            </div>
            {taskTimer.map(
              (item) =>
                item.company === company && <Timer {...item} key={nanoid()} />
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};
export default TasksTimer;
