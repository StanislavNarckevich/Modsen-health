import styled from 'styled-components';
import windIcon from '../../assets/icons/wind.svg';
import bellIcon from '../../assets/icons/bell.svg';
import burgerIcon from '../../assets/icons/burger.svg';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64.15%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleLogo = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  display: flex;
  align-self: flex-start;

  &::before {
    content: '';
    background-image: url(${windIcon});
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const RegisterButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 146px;
  height: 52px;
  color: #FFFFFF;
  background-color: #215EE9;
  border-radius: 40px;
  border: 0;
  box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08),
  0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
  0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
  0px 20px 26.1625px rgba(33, 94, 233, 0.04),
  0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
  0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);

  @media (max-width: 768px) {
    width: 136px;
  }
`;

export const LogInBlock = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: 18.3px;
    height: 18.3px;
    background-image: url(${bellIcon});
    margin-left: 61.83px;

    @media (max-width: 1024px) {
      margin-left: 15px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogInLink = styled.a.attrs({
  href: '#',
})`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #7D8790;
  margin-right: 40px;
  text-decoration: none;

  @media (max-width: 1024px) {
    margin-right: 15px;
  }
`;

export const InvisibleInput = styled.input.attrs((props) => ({
  type: 'checkbox',
  id: 'checkbox-menu',
  checked: props.isActiveBurger,
}))`
  display: none;

  @media (max-width: 768px) {
    &:checked + label ul li {
      opacity: 1;
      visibility: visible;
      transition: all .7s linear;
    }

    &:checked + label ul {
      height: 350px;
    }
  }
`;

export const LabelForNavs = styled.label.attrs({
  htmlFor: 'checkbox-menu',
})`
  flex-direction: column;
  display: flex;
  align-items: flex-end;
`;

export const BurgerItem = styled.div`
  background-image: url(${burgerIcon});
  width: 32px;
  height: 32px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
