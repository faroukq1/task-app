import { nanoid } from "nanoid";
import React, { useState } from "react";
import styled from "styled-components";
import { useDashboardContext } from "../Context/DashboardContext";
import { useProjectContext } from "../Context/ProjectContext";
import { toast } from "react-toastify";

const AddTask = () => {
  const { getTaskLength, setTasks, tasks } = useDashboardContext();
  const { setIsAddTaskOpen } = useProjectContext();
  const [taskDetails, setTaskDetail] = useState({
    id: nanoid(),
    number: getTaskLength() + 1,
    name: "",
    done: false,
    text: "",
    companyPic: "ramdomPic",
    company: "",
    subName: "Inc.",
    taskTimer: {
      secound: 0,
      minite: 0,
      hour: 0,
      other: false,
    },
  });
  console.log(taskDetails.taskTimer.other);
  const tosty = () => {
    toast.success("task added successfully");
  };
  const setNewTaskList = () => {
    setTasks([...tasks, taskDetails]);
    setIsAddTaskOpen(false);
    tosty();
  };

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
            value={taskDetails.name}
            onChange={(e) =>
              setTaskDetail({ ...taskDetails, name: e.target.value })
            }
          />
        </div>
        <div className="text">
          <label htmlFor="taskInfo">task info</label>
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
          <label htmlFor="taskInfo">company</label>
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
                name="timer"
                id="timer"
                onChange={(e) => {
                  if (e.target.value === "other") {
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
                <option value="15">15min</option>
                <option value="30">30min</option>
                <option value="60">1h</option>
                <option value="other">other?</option>
              </select>
            </>
          )}
          {taskDetails.taskTimer.other && (
            <div className="set-custom-timer">
              <p>set Custom Timer</p>
              <div>
                <input
                  type="number"
                  name="secound"
                  id="secound"
                  value={taskDetails.taskTimer.secound}
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
                  type="minite"
                  name="minite"
                  id="minite"
                  value={taskDetails.taskTimer.minite}
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
                  type="hour"
                  name="hour"
                  id="hour"
                  value={taskDetails.taskTimer.hour}
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
              </div>
            </div>
          )}
        </div>
        <div className="button">
          <button onClick={setNewTaskList}>Add Task</button>
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
        width: calc(95% / 3);
      }
    }
  }
`;

export default AddTask;
