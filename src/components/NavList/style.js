import styled, { css } from 'styled-components';

export const NavListWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 442px;

    @media(max-width: 1024px) {
      width: 320px;
    }
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 0px;
        transition: height .3s linear;
    }
`;

export const NavItem = styled.li`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    list-style: none;
    position: relative;
    cursor: pointer;
    color: ${({ isActive }) => (isActive ? '#215EE9' : '#7D8790')};

    @media(max-width:768px) {
      display: flex;
      align-self: center;
      justify-content: end;
      width: 95%;
      opacity: 0;
      visibility: hidden;
    }
   
    &:hover {
      color: #215EE9;
    }
    
  @media(min-width:768px ) {
    ${({ isActive }) => (isActive ? css`
    &::after {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      position: absolute;
      bottom: -100%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #215EE9;
         }
  ` : '')}
  }
`;
