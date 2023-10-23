import React from 'react';
import styled from 'styled-components';
import DashboardBar from '../Component/DashboardBar';
import DashboardContent from '../Component/DashboardContent';
const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardBar />
      <DashboardContent />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Dashboard;
