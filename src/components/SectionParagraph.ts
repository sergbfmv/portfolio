import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionParagraph = styled.p `
  ${font({weight: 400, Fmax: 32, Fmin: 20})}
  
  text-align: center;
  font-style: normal;
  margin-bottom: 60px;

  @media ${theme.media.mobile} {
    margin-bottom: 25px;
  }
`
