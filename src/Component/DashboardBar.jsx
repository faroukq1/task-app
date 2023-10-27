import React from 'react';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import styled from 'styled-components';
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
const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin: 0 0 2rem 0;
  form {
    display: flex;
    align-items: center;
    position: relative;
    width: 30%;
    input {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      background-color: #f7f6f4;
      color: #8d8e92;
      border-color: transparent;
      outline: none;
      width: 100%;
    }
    .search-icon {
      position: absolute;
      right: 10px;
      font-size: 20px;
      color: #8d8e92;
    }
  }
  .avatar {
    display: flex;
    gap: 1rem;
    align-items: center;
    img {
      width: 36px;
      cursor: pointer;
    }
    svg {
      font-size: 24px;
      color: #8d8e92;
      cursor: pointer;
    }
  }
`;
export default DashboardBar;
