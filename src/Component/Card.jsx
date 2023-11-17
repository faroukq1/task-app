import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Wrapper from '../style/Cardstyle';
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

export default Card;
