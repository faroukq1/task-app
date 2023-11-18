import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useProjectContext } from '../Context/ProjectContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdWindow } from 'react-icons/md';
import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';
const AddTaskBar = () => {
  const { isAddTaskOpen, setIsAddTaskOpen } = useProjectContext();
  const { active } = useDashboardContext();
  console.log(active);
  return (
    <Wrapper>
      <div className="grid">
        <button className={active === 'MY TASK' ? 'make-it-active' : null}>
          <RxHamburgerMenu />
        </button>
        <button className={active === 'PROJECTS' ? 'make-it-active' : null}>
          <MdWindow />
        </button>
      </div>
      <button onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}>
        <AiOutlinePlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 2rem 0;
  button {
    background-color: #fd7b38;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    cursor: pointer;
    svg {
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
  }
  .grid {
    display: flex;
    gap: 0.25rem;
    background-color: white;
    border-radius: 0.5rem;
    button {
      background-color: transparent;
      border-radius: 0.25rem;
      svg {
        color: #4e5057;
        font-size: 20px;
      }
    }
    .make-it-active {
      background-color: #fd7b38;
      svg {
        color: white;
      }
    }
  }
`;

export default AddTaskBar;
