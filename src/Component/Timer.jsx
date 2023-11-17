import { RiTimerFill } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlinePause } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/SingleTaskTimerStyle';
const SECOND_IN_MILISECOND = 1000;
const MINUTE_IN_HOUR = 60;
const SECOND_IN_MINUTE = 60;
const Timer = ({ id, name, time: { hour, secound, minite } }) => {
  const { makeTaskChecked } = useDashboardContext();
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
        makeTaskChecked(id);
        setTimer({
          ...timer,
          isFinished: true,
          isPaused: true,
        });
        return clearInterval(timeOut);
      }
      if (secound <= 0 && minite <= 0 && hour > 0) {
        const newhour = hour - 1;
        setTimer({ ...timer, hour: newhour, minite: MINUTE_IN_HOUR });
        return clearInterval(timeOut);
      }
      if (secound <= 0 && minite > 0) {
        const newMinite = minite - 1;
        setTimer({ ...timer, minite: newMinite, secound: SECOND_IN_MINUTE });
        return clearInterval(timeOut);
      }
      if (secound > 0) {
        const NEW_SECOND = secound - 1;
        setTimer({ ...timer, secound: NEW_SECOND });
        return clearInterval(timeOut);
      }
      return clearInterval(timeOut);
    }, SECOND_IN_MILISECOND);
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

export default Timer;
