import styled from 'styled-components';
import { useDashboardContext } from '../Context/DashboardContext';

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

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  width: 100%;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  svg,
  p {
    color: #5d5f66;
    font-weight: bold;
  }
  svg {
    font-size: 1.25rem;
  }
`;
export default Page;
