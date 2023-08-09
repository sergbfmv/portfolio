import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Skill = styled.div`
  width: 200px;
  flex-grow: 1;
  margin-bottom: 50px;
  
  @media ${theme.media.mobile} {
    margin-bottom: 10px;
    width: 150px;
  }
  
  //&:nth-child(1) {
  //  margin-bottom: 50px;
  //}
`

export const S = {
    Skill
}