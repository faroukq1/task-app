import React from 'react';
import styled from 'styled-components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const Card = ({ title, text, iphone, android, branding, website }) => {
  return (
    <Wrapper>
      <div className="text">
        <h3>{title}</h3>
        <button>
          <BiDotsHorizontalRounded />
        </button>
      </div>
      <p>{text}</p>
      <div className="buttons">
        {iphone ? <button className="iphone">IOS APP</button> : null}
        {android ? <button className="android">ANDROID</button> : null}
        {branding ? <button className="branding">BRANDING</button> : null}
        {website ? <button className="website">WEBSITE</button> : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-weight: 600;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      svg {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
    button {
      border-color: transparent;
      padding: 0.25rem 1rem;
      cursor: pointer;
      font-weight: bold;
    }
  }
  .iphone {
    color: #fd6618;
    background-color: #fff2ec;
  }
  .android {
    color: #58c597;
    background-color: #ebf8f2;
  }
  .branding {
    color: #5d65b1;
    background-color: #eeeff7;
  }
  .website {
    color: #07afd8;
    background-color: #e6f7fb;
  }
`;
export default Card;
