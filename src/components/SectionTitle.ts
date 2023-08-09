import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2 `
  ${font({weight: 700, Fmax: 48, Fmin: 30})}
  
  text-align: center;
  font-style: normal;
  margin-bottom: 50px;
  
  @media ${theme.media.mobile} {
    margin-bottom: 25px;
  }
`