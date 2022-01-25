import { useCallback, useState } from 'react';
import NavList from '../NavList';
import {
  BurgerItem,
  HeaderWrapper,
  InvisibleInput,
  LabelForNavs,
  LogInBlock, LogInLink,
  LogoNavWrapper, RegisterButton,
  TitleLogo,
} from './style';

const navs = [
  'Home',
  'Services',
  'Clinic',
  'Doctors',
  'Contact',
];

function Header() {
  const [activeId, setActiveNavId] = useState(0);
  const [isActiveBurger, setActiveBurger] = useState(false);

  const clickNavHandler = useCallback((id) => setActiveNavId(id), []);

  const clickBurgerHandler = () => setActiveBurger((prev) => !prev);

  return (
    <HeaderWrapper>
      <LogoNavWrapper>
        <TitleLogo>Modsen Health</TitleLogo>
        <nav>
          <InvisibleInput isActiveBurger={isActiveBurger} onChange={clickBurgerHandler} />
          <LabelForNavs>
            <NavList activeId={activeId} clickNavHandler={clickNavHandler} navs={navs} />
            <BurgerItem />
          </LabelForNavs>
        </nav>
      </LogoNavWrapper>
      <LogInBlock>
        <LogInLink>Log In</LogInLink>
        <RegisterButton type="button">Register</RegisterButton>
      </LogInBlock>
    </HeaderWrapper>
  );
}

export default Header;
