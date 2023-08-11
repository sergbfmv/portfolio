import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import abstract from '../../../assets/images/Abstract.svg'

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Photo = styled.img`
  width: 349px;
  height: 349px;
  border-radius: 230px;
  object-fit: cover;

  @media ${theme.media.tablet} {
    width: 310px;
    height: 310px;
  }

  @media ${theme.media.mobile} {
    width: 310px;
    height: 310px;
  }
`

const PhotoWrapper = styled.div `
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -5px;
    left: -10px;
    border-radius: 230px;
    background: ${theme.colors.fontAccent};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 628px;
    height: 628px;
    background-image: url(${abstract});
    transform: translate(-50%, -50%);
  }
`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmin: 36, Fmax: 56})}
  letter-spacing: -1px;
  margin-bottom: 20px;

  p {
    display: none;
  }
`

const Name = styled.h2`
  ${font({weight: 700, Fmin: 36, Fmax: 56})}
  background: ${theme.colors.fontAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
  margin-right: 10px;
`

const Text = styled.p`
  ${font({weight: 700, Fmin: 36, Fmax: 56})}
  letter-spacing: -1px;
`

export const S = {
    Main,
    Photo,
    PhotoWrapper,
    MainTitle,
    Name,
    Text,
}