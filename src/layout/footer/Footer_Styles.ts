import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 20px 0;
  color: ${theme.colors.fontSecondary};
  position: relative;
`

const Wrapper = styled.span `
  position: relative;
  
  &:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background-color: #42446E;
    left: 0;
    top: 50%;
  }
`

const Group = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  @media ${theme.media.mobile} {
    & > div {
      display: none;
  }
}
`

const Phone = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 18})}
  align-self: center;
`

const Email = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 18})}
  align-self: center;
`

const CRight = styled.span`
  ${font({weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 18})}
  align-self: center;
  margin-left: 10px;
  
  span {
    background: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }
`

export const S = {
    Footer,
    Wrapper,
    Group,
    Phone,
    Email,
    CRight,
}