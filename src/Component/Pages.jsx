import Page from './Page';
import { Link } from 'react-router-dom';
import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/PagesStyle';
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
export default Pages;
