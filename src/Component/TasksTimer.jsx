import React from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';
import { nanoid } from 'nanoid';
import Timer from './Timer';

const TasksTimer = () => {
  const { taskTimer } = useDashboardContext();
  const getComapnies = Array.from(
    new Set([...taskTimer.map((item) => item.company)])
  );

  console.log(getComapnies);
  return (
    <Wrapper>
      {getComapnies.map((company) => {
        return (
          <div key={nanoid()}>
            <div className="company">
              <h1>{company}</h1>
            </div>
            {taskTimer.map(
              (item) =>
                item.company === company && (
                  <p>{`${item.time.hour} ${item.time.minite} ${item.time.hour}`}</p>
                )
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
`;
export default TasksTimer;

/*
      {taskTimer.map((item) => (
        <Timer key={nanoid()} {...item} />
      ))}

*/
