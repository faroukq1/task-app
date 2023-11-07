import React from "react";
import styled from "styled-components";
import { useDashboardContext } from "../Context/DashboardContext";
import { nanoid } from "nanoid";
import Timer from "./Timer";

const TasksTimer = () => {
  const { taskTimer } = useDashboardContext();
  return (
    <Wrapper>
      {taskTimer.map((item) => (
        <Timer key={nanoid()} {...item} />
      ))}
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
