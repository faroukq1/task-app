import DashboardBar from '../Component/DashboardBar';
import ProjectsCard from '../Component/ProjectsCard';
import { useProjectContext } from '../Context/ProjectContext';
import AddTask from '../Component/AddTask';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from '../style/ProjectsStyle';
import AddTaskBar from '../Component/AddTaskBar';
const Projects = () => {
  const { projectStatus, isAddTaskOpen } = useProjectContext();

  return (
    <Wrapper>
      <DashboardBar />
      <div className="container">
        <AddTaskBar />
        <div className="main">
          {projectStatus.map((item) => {
            const { id, status, info } = item;
            return <ProjectsCard key={id} status={status} info={info} />;
          })}
        </div>
      </div>
      {isAddTaskOpen ? <AddTask /> : null}
      <ToastContainer />
    </Wrapper>
  );
};

export default Projects;
