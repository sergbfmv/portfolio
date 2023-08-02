import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const MenuItem = styled.li`
  &:hover {
    background-image: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Link = styled.a`
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.fontSecondary};
`

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px; 
    justify-content: center;
  }
  
  @media screen and (max-width: 891px) {
    display: none;
  }
`

const MobileMenu = styled.nav`

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -98px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 3;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fontMain};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fontMain};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fontMain};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: none;
  background-color: ${theme.colors.primaryBg};

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const S = {
    MenuItem,
    Link,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
}