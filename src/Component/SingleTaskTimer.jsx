import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import styled from "styled-components";
import Timer from "./Timer";
import { useDashboardContext } from "../Context/DashboardContext";
const SingleTaskTimer = ({ title, timerList, titleIndex }) => {
  const { playFirstTask } = useDashboardContext();
  return (
    <Wrapper>
      <div className="play-timer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{title}</h3>
          <button onClick={() => playFirstTask(titleIndex)}>
            <AiOutlinePlayCircle />
          </button>
        </div>
        {timerList.map((item, index) => {
          return <Timer key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem 0;
  .play-timer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .active {
      background-color: #fff2ec;
      .play {
        color: #fd6d24;
        svg {
          color: #fd6d24;
        }
      }
    }
    h3 {
      font-size: 20px;
      color: #383f4f;
    }
    button {
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      svg {
        font-size: 30px;
        color: #e0e0e5;
      }
    }
  }
`;

export default SingleTaskTimer;
