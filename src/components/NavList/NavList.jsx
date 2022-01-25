import { NavItem, NavListWrapper } from './style';

function NavList({ navs, activeId, clickNavHandler }) {
  return (
    <NavListWrapper>
      {navs.map((nav, index) => (
        <NavItem
          key={nav}
          isActive={activeId === index}
          onClick={() => clickNavHandler(index)}
        >
          {nav}
        </NavItem>
      ))}
    </NavListWrapper>
  );
}

export default NavList;
