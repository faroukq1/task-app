import React from "react";
import styled from "styled-components";
import SingleTaskTimer from "./SingleTaskTimer";
import { useDashboardContext } from "../Context/DashboardContext";
const TasksTimer = () => {
  const { taskTimerList } = useDashboardContext();
  if (taskTimerList.length === 0) {
    return (
      <Wrapper>
        <div className="error-box">
          <h3>You can set Timer here</h3>
        </div>
      </Wrapper>
    );
  }
  console.log(taskTimerList);
  return (
    <Wrapper>
      {taskTimerList.map((task, index) => {
        return <SingleTaskTimer key={index} {...task} titleIndex={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 450px;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  overflow-y: auto;
  .error-box {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-weight: bold;
      font-size: 20px;
      color: #171c27;
    }
  }
`;
export default TasksTimer;
