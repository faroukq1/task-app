import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';

const AddTask = () => {
  const { getTaskLength } = useDashboardContext();
  const [taskDetails, setTaskDetail] = useState({
    id: nanoid(),
    number: getTaskLength() + 1,
    name: 'empty',
    done: false,
    companyPic: 'ramdomPic',
    company: 'empty',
    subName: 'Inc.',
  });
  console.log(taskDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="task-name">
          <label htmlFor="name">task name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="please enter task name"
            min={0}
            max={20}
          />
        </div>
        <div className="text">
          <label htmlFor="taskInfo">task info</label>
          <input
            type="text"
            name="info"
            id="info"
            placeholder="please enter task info"
          />
        </div>

        <div className="company">
          <label htmlFor="taskInfo">company</label>
          <input type="text" name="info" id="info" placeholder="company?" />
        </div>

        <div className="button">
          <button>Add Task</button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 22%;
  right: 3.5%;
  background-color: white;
  width: 24%;
  height: 45%;
  border-radius: 1rem;
  padding: 2rem;
  .task-name,
  .text,
  .company {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 1rem 0;
    label {
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 0.75rem;
    }
    input {
      width: 100%;
      height: 3rem;
      font-size: 17px;
      font-weight: bold;
      padding: 1rem;
    }
  }
  .button {
    width: 100%;
    button {
      padding: 0.5rem 3rem;
      margin: 0.25rem 0;
      border-color: transparent;
      border-radius: 1rem;
      background-color: #fd7733;
      color: white;
      font-weight: normal;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export default AddTask;
