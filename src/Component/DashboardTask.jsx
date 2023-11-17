import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/DashboardTaskStyle';
const DashboardTask = ({ lastTask, number, name, done, id }) => {
  const { changeTaskState } = useDashboardContext();
  return (
    <Wrapper style={lastTask ? { borderBottom: 'none' } : {}}>
      <span>{number}</span>
      <div className="task-info">
        <p style={done ? { textDecoration: 'line-through' } : {}}>{name}</p>
        <button onClick={() => changeTaskState(id)}>
          <AiOutlineCheckCircle style={done ? { color: 'green' } : {}} />
        </button>
      </div>
    </Wrapper>
  );
};
export default DashboardTask;
