import { useDashboardContext } from '../Context/DashboardContext';
import DashboardTask from './DashboardTask';
import { useProjectContext } from '../Context/ProjectContext';
import { Link } from 'react-router-dom';
import Wrapper from '../style/DashboardTasksStyle';
const DashboardTasks = () => {
  const { tasks, setActive } = useDashboardContext();
  const { setIsAddTaskOpen } = useProjectContext();
  const addTask = () => {
    setIsAddTaskOpen(true);
    setActive('PROJECTS');
  };
  if (!tasks || tasks?.length === 0) {
    return (
      <Wrapper>
        <div className="error">
          <p className="error-msg">please add some tasks</p>
          <Link to="projects">
            <button onClick={addTask}>Add Task here</button>
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>
        My Task <span className="task-number">{`(${tasks.length})`}</span>
      </h3>
      <div className="tasks">
        {tasks.map((task, index) => (
          <DashboardTask
            key={task.id}
            {...task}
            lastTask={index === tasks.length - 1 ? true : false}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default DashboardTasks;
