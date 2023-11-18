import styled from 'styled-components';
import DashboardBar from '../Component/DashboardBar';
import AddTaskBar from '../Component/AddTaskBar';
const MyTask = () => {
  return (
    <Wrapper>
      <DashboardBar />
      <AddTaskBar />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default MyTask;
