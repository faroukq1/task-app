import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/PageStyle';
const Page = ({ Icon, name }) => {
  const { active, makePageActive } = useDashboardContext();
  return (
    <Wrapper
      className={active === name ? 'active' : ''}
      onClick={() => makePageActive(name)}
    >
      {Icon}
      <p>{name}</p>
    </Wrapper>
  );
};
export default Page;
