import React, { useState } from 'react';
import styled from 'styled-components';
import { profilesData } from '../Data';
const DashboardChat = () => {
  const [profiles, setProfiles] = useState(profilesData);
  return (
    <Wrapper>
      <h1>Messages</h1>
      <div className="chat-holder">
        {profiles.map((profile) => {
          const { id, avatar, message, name } = profile;
          return (
            <div key={id}>
              <img className="chat-img" src={avatar} alt="photo" />
              <div>
                <h3>{name}</h3>
                <p>{message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  h1 {
    font-size: 20px;
    font-weight: 500;
    color: #383f4f;
  }
  .chat-holder {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 5px;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h3 {
          font-size: 15px;
        }
        p {
          color: #383f4f;
        }
      }
    }
    .chat-img {
      width: 60px;
      height: 60%;
      border-radius: 50%;
    }
  }
`;

export default DashboardChat;
