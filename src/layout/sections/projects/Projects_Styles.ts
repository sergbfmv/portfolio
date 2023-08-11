import {font} from "../../../styles/Common";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

const Projects = styled.section`
  position: relative;
  
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Link = styled.a`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  display: flex;
  align-items: center;
  margin-top: 15px;
  bottom: 20px;
  position: absolute;
  
  &:last-child {
    left: 170px;
  }
`
const Project = styled.div`
  //width: 330px;
  //flex-grow: 1;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 20px;
  height: 571px;
  position: relative;
  
  ${Link} {
    & + ${Link} {
    margin-left: 30px;
    }
  }
  
  @media ${theme.media.desctop} {
    //max-width: 375px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  object-position: left top;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const Description = styled.div`
  padding: 25px 30px;
`

const Title = styled.h4`
  ${font({weight: 500, lineHeight: '26px', Fmin: 20, Fmax: 28})}
  font-style: normal;
`

const Text = styled.p`
  ${font({weight: 300, lineHeight: '26px', Fmin: 14, Fmax: 18})}
  margin-top: 15px;
  margin-bottom: 12px;
  font-style: normal;
`

const TechText = styled.span`
  ${font({weight: 400, lineHeight: '26px', Fmin: 14, Fmax: 16})}
  display: block;
  font-size: 16px;
  font-style: normal;
`

const LineText = styled.span `
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
`

const LinkName = styled.span `
  ${font({weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 14})}
  margin-left: 10px;
  font-style: normal;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`

export const S = {
    Projects,
    Link,
    Project,
    Image,
    Description,
    Title,
    Text,
    TechText,
    LineText,
    LinkName,
}