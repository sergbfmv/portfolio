import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  @media screen and (max-width: 891px) {
    padding: 20px 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const Logo = styled.img`
  width: 100px;
  height: 60px;
`

export const S = {
    Header,
    Wrapper,
    Logo
}