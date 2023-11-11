import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';
import { useProjectContext } from '../Context/ProjectContext';
import { toast } from 'react-toastify';
import { BiArrowBack } from 'react-icons/bi';
import { nanoid } from 'nanoid';
const AddTask = () => {
  const { setTasks, tasks } = useDashboardContext();
  const { setIsAddTaskOpen, taskDetails, setTaskDetail } = useProjectContext();
  const addNewTask = () => {
    if (!taskDetails.name) return toast.error('please provide name');
    if (!taskDetails.text) return toast.error('please provide a details');
    if (!taskDetails.company) return toast.error('please provide a company');
    setTasks([...tasks, taskDetails]);
    setIsAddTaskOpen(false);
    toast.success('task added successfully');
    setTaskDetail({ ...taskDetails, name: '', company: '', id: nanoid() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper style={taskDetails.taskTimer.other ? { height: '57%' } : {}}>
      <form onSubmit={handleSubmit}>
        <div className="task-name">
          <label>task name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="please enter task name"
            min={0}
            max={20}
            value={taskDetails.name}
            onChange={(e) =>
              setTaskDetail({ ...taskDetails, name: e.target.value })
            }
          />
        </div>
        <div className="text">
          <label>task info</label>
          <input
            type="text"
            name="info"
            id="info"
            value={taskDetails.test}
            placeholder="please enter task info"
            onChange={(e) =>
              setTaskDetail({ ...taskDetails, text: e.target.value })
            }
          />
        </div>

        <div className="company">
          <label>company</label>
          <input
            type="text"
            name="info"
            id="info"
            placeholder="company?"
            value={taskDetails.company}
            onChange={(e) =>
              setTaskDetail({ ...taskDetails, company: e.target.value })
            }
          />
        </div>
        <div className="set-timer">
          {!taskDetails.taskTimer.other && (
            <>
              <p>Sellect task time :</p>
              <select
                className="select-option"
                name="timer"
                id="timer"
                onChange={(e) => {
                  if (e.target.value === 'other') {
                    setTaskDetail({
                      ...taskDetails,
                      taskTimer: {
                        ...taskDetails.taskTimer,
                        other: true,
                      },
                    });
                    return;
                  }
                  setTaskDetail({
                    ...taskDetails,
                    taskTimer: {
                      ...taskDetails.taskTimer,
                      minite: e.target.value,
                    },
                  });
                }}
              >
                <option value="0">No Time</option>
                <option value="15">15min</option>
                <option value="30">30min</option>
                <option value="60">1h</option>
                <option value="other">other?</option>
              </select>
            </>
          )}
          {taskDetails.taskTimer.other && (
            <div className="set-custom-timer">
              <p>set Custom Timer :</p>
              <div>
                <input
                  type="number"
                  name="secound"
                  id="secound"
                  placeholder="sec"
                  value={
                    taskDetails.taskTimer.secound === 0
                      ? ''
                      : taskDetails.taskTimer.secound
                  }
                  onChange={(e) =>
                    setTaskDetail({
                      ...taskDetails,
                      taskTimer: {
                        ...taskDetails.taskTimer,
                        secound: e.target.value,
                      },
                    })
                  }
                  max={59}
                  min={0}
                />
                <input
                  type="number"
                  name="minite"
                  id="minite"
                  placeholder="min"
                  value={
                    taskDetails.taskTimer.minite === 0
                      ? ''
                      : taskDetails.taskTimer.minite
                  }
                  onChange={(e) =>
                    setTaskDetail({
                      ...taskDetails,
                      taskTimer: {
                        ...taskDetails.taskTimer,
                        minite: e.target.value,
                      },
                    })
                  }
                  max={59}
                  min={0}
                />
                <input
                  type="number"
                  name="hour"
                  id="hour"
                  placeholder="hour"
                  value={
                    taskDetails.taskTimer.hour === 0
                      ? ''
                      : taskDetails.taskTimer.hour
                  }
                  onChange={(e) =>
                    setTaskDetail({
                      ...taskDetails,
                      taskTimer: {
                        ...taskDetails.taskTimer,
                        hour: e.target.value,
                      },
                    })
                  }
                  max={59}
                  min={0}
                />
                <button
                  className="back"
                  onClick={() =>
                    setTaskDetail({
                      ...taskDetails,
                      taskTimer: { ...taskDetails.taskTimer, other: false },
                    })
                  }
                >
                  <BiArrowBack />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="button">
          <button onClick={addNewTask}>Add Task</button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 20%;
  right: 3.5%;
  background-color: white;
  width: 24%;
  height: 50%;
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
  .set-timer {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    p {
      font-weight: bold;
    }
    option {
      padding: 1rem;
    }
  }
  .set-custom-timer {
    width: 100%;
    p {
      font-weight: bold;
      margin: 0.5rem 0;
    }
    > div {
      display: flex;
      gap: 1rem;
      input {
        margin: 0.5rem 0;
        padding: 0.25rem;
        width: calc(97% / 3);
      }
    }
  }
  .back {
    background-color: #fd7733;
    border-color: transparent;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .select-option {
    padding: 0.25rem;
    border-color: transparent;
    background-color: #eee;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    outline: none;
  }
`;

export default AddTask;
