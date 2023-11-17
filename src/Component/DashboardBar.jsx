import React from 'react';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import Wrapper from '../style/DashboardBarStyle';
const DashboardBar = () => {
  return (
    <Wrapper>
      <form>
        <input type="text" name="search" id="search" placeholder="Search" />
        <AiOutlineSearch className="search-icon" />
      </form>

      <div className="avatar">
        <AiOutlineBell />
        <img
          src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
          alt="avatar pic"
        />
      </div>
    </Wrapper>
  );
};

export default DashboardBar;
