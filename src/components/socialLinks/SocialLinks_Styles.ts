import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SocialLinks = styled.div `
  margin-left: 50px;

  @media screen and (max-width: 891px) {
    margin-left: 0;
    margin-right: 70px;
  }
`

const SocialList = styled.ul `
    display: flex;
    gap: 20px;
`

const SocialItem = styled.li `

`

const SocialLink = styled.a `
    color: ${theme.colors.fontSecondary};
  
  &:hover {
    color: #FFF;
  }
`

export const S = {
    SocialLinks,
    SocialList,
    SocialItem,
    SocialLink,
}