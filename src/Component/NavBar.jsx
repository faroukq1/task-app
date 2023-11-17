import logo from '../assets/logo.png';
import { pages } from '../Data';
import Pages from './Pages';
import Wrapper from '../style/NavbarStyle';
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
