import styled from 'styled-components';
import logo from '../assets/logo.png';
import { pages } from '../Data';
import Pages from './Pages';
export const NavBar = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <img src={logo} alt="this is logo" />
      </div>
      <Pages pages={pages} />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background-color: white;
  border-radius: 1rem;
  display: grid;
  grid-auto-rows: auto 1fr;
  transition: 1s all ease;
  .logo-container {
    display: flex;
    justify-content: center;
    img {
      width: 90px;
    }
  }
`;
