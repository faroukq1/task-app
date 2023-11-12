import React from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';
import { nanoid } from 'nanoid';
import Timer from './Timer';
import { FaPlay } from 'react-icons/fa';

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

const Wrapper = styled.div`
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  width: 100%;
  max-height: 370px;
  overflow-y: auto;
  div {
    margin: 1rem 0;
  }
  .error {
    h1 {
      color: #474747;
    }
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
  }
  .company {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.5rem;
    h1 {
      color: #262c3f;
    }
    svg {
      cursor: pointer;
      font-size: 17px;
      color: #767b8e;
    }
  }
`;
export default TasksTimer;
