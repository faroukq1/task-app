import { useDashboardContext } from '../Context/DashboardContext';
import { useProjectContext } from '../Context/ProjectContext';
import { toast } from 'react-toastify';
import { BiArrowBack } from 'react-icons/bi';
import { nanoid } from 'nanoid';
import Wrapper from '../style/addTask';
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
    setTaskDetail({
      ...taskDetails,
      id: nanoid(),
      number: tasks.length + 2,
      name: '',
      company: '',
    });
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
export default AddTask;
