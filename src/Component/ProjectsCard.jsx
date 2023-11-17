import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Card from './Card';
import Wrapper from '../style/ProjectCardStyle';
const ProjectsCard = ({ info, status }) => {
  return (
    <Wrapper>
      <div className="slack">
        <h1>
          {status} <span>({info.length})</span>
        </h1>
        <button className="dots">
          <BiDotsHorizontalRounded />
        </button>
      </div>
      {info.map((item) => {
        const { id } = item;
        return <Card key={id} {...item} />;
      })}
    </Wrapper>
  );
};
export default ProjectsCard;
