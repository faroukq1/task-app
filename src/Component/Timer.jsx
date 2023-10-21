import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdOutlineTimer } from 'react-icons/md';
import { AiOutlinePause } from 'react-icons/ai';
import styled from 'styled-components';
import { convertTime } from '../functions';
const Timer = ({ title, time, play }) => {
  const [countDown, setCountDown] = useState({
    ...convertTime(time),
    stop: true,
  });
  let timeOut;
  const playCountDown = () => {
    timeOut = setInterval(() => {
      const { hour, min, sec, stop } = countDown;
      if (hour <= 0 && min <= 0 && sec <= 0) {
        setCountDown({ hour: 0, min: 0, sec: 0, done: true });
        return clearInterval(timeOut);
      }
      if (sec <= 0) {
        const newMin = min - 1;
        setCountDown({ ...countDown, min: newMin, sec: 59 });
        return clearInterval(timeOut);
      }
      if (min < 0) {
        const newHour = hour - 1;
        setCountDown({ ...countDown, hour: newHour, min: 59 });
        return clearInterval(timeOut);
      }
      if (sec > 0 && !stop) {
        const newSec = sec - 1;
        setCountDown({ ...countDown, sec: newSec });
        return clearInterval(timeOut);
      }
    }, 1000);
  };
  const stopCountDown = () => {
    setCountDown({ ...countDown, stop: true });
    clearInterval(timeOut);
  };
  const startContDown = () => {
    setCountDown({ ...countDown, stop: false });
    playCountDown();
  };

  useEffect(() => {
    if (!countDown.stop) {
      startContDown();
    }
    if (countDown.stop) {
      stopCountDown();
    }
  }, [countDown.sec, countDown.min, countDown.hour, countDown.stop]);

  return (
    <Wrapper className={play ? 'active' : {}}>
      <MdOutlineTimer className="play" />
      <div className="timer-details">
        <p>{title.length < 20 ? title : `${title.substring(0, 20)}...`}</p>
        <div className="timer">
          <span>{`${countDown.hour}h${countDown.min}m${countDown.sec}s`}</span>
          <button
            onClick={countDown.stop ? startContDown : stopCountDown}
            className="play"
          >
            {countDown.stop ? <BsFillPlayFill /> : <AiOutlinePause />}
          </button>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem;
  background-color: #f7f6f4;
  border-radius: 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  svg {
    color: #656a7f;
  }
  .timer-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #656a7f;
      font-size: 15px;
    }
    gap: 1rem;
    .timer {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      svg,
      span {
        color: #656a7f;
        font-size: 14px;
      }
    }
  }
  button {
    background-color: transparent;
    border-color: transparent;
    display: flex;
  }
`;

export default Timer;
