import styled from 'styled-components';
import { RiTimerFill } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlinePause } from 'react-icons/ai';
import { useEffect, useState } from 'react';
const Timer = ({ name, time: { hour, secound, minite } }) => {
  const [timer, setTimer] = useState({
    hour,
    minite,
    secound,
    isFinished: false,
    isPaused: true,
  });
  let timeOut;
  const playTimer = () => {
    const { hour, minite, secound } = timer;
    timeOut = setInterval(() => {
      if (minite === 0 && hour === 0 && secound === 0) {
        setTimer({ ...timer, isFinished: true, isPaused: true });
        return clearInterval(timeOut);
      }
      if (secound <= 0 && minite <= 0 && hour > 0) {
        const newhour = hour - 1;
        setTimer({ ...timer, hour: newhour, minite: 60 });
        return clearInterval(timeOut);
      }
      if (secound <= 0 && minite > 0) {
        const newMinite = minite - 1;
        setTimer({ ...timer, minite: newMinite, secound: 60 });
        return clearInterval(timeOut);
      }
      if (secound > 0) {
        const newSecound = secound - 1;
        setTimer({ ...timer, secound: newSecound });
        return clearInterval(timeOut);
      }
      return clearInterval(timeOut);
    }, 10);
  };
  const stopTimer = () => {
    clearTimeout(timeOut);
  };
  useEffect(() => {
    if (!timer.isPaused && !timer.isFinished) {
      playTimer();
    } else {
      stopTimer();
    }
    return () => {
      clearInterval(timeOut);
    };
  }, [timer.isPaused, timer.isFinished, timer]);
  if (minite === 0 && hour === 0 && secound === 0) return;
  return (
    <Wrapper>
      <div className="task-info">
        <RiTimerFill />
        <span>{name}</span>
      </div>
      <div className="timer">
        <span>{`${timer.hour}hr ${timer.minite}min ${timer.secound}sec`}</span>
        <button
          onClick={() => {
            const newIsPausedValue = !timer.isPaused;
            setTimer({ ...timer, isPaused: newIsPausedValue });
          }}
        >
          {timer.isPaused ? <FaPlay /> : <AiOutlinePause />}
        </button>
        <BiDotsVerticalRounded />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 0 1rem;
  border-radius: 0.5rem;
  overflow-y: auto;
  button {
    background-color: transparent;
    border-color: transparent;
  }
  svg {
    font-size: 20px;
    color: #767b8e;
    cursor: pointer;
  }
  .task-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font-weight: 500;
    }
  }
  .timer {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 15px;
    }
  }
`;

export default Timer;
