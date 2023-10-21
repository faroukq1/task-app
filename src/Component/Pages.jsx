import Page from './Page';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDashboardContext } from '../Context/DashboardContext';

const Pages = ({ pages }) => {
  const { active, setActive } = useDashboardContext();
  return (
    <Wrapper>
      {pages.map((page) => (
        <Link to={page.path} key={page.id}>
          <Page {...page} />
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem 0 0 0;
  .active {
    background: linear-gradient(
      110deg,
      rgba(253, 118, 51, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    svg,
    p {
      color: #fd7733;
    }
    &::before {
      position: absolute;
      content: '';
      width: 3px;
      height: 8%;
      right: 0;
      background-color: #fd7733;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Pages;
