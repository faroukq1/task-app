import React from 'react';
import styled from 'styled-components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const ProjectsCard = () => {
  return (
    <Wrapper>
      <div className="slack">
        <h1>Slack</h1>
        <button>
          <BiDotsHorizontalRounded />
        </button>
      </div>
      <p>
        These porject will need a new brand Identity where they will get
        recognise.
      </p>
      <div className="phone-btn">
        <button>IOS APP</button>
        <button>ANDROID</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: #171e32;
  }
  .slack {
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      border-color: transparent;
    }
  }
`;

export default ProjectsCard;
