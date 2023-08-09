import styled from "styled-components";

const Header = styled.header`
  background: rgba(25, 25, 25, .9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
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