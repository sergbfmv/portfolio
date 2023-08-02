import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import abstract from '../../../assets/images/Abstract.svg'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align='center' justify='space-around'  wrap={'wrap'}>
                    <div>
                        <Text>Hi 👋, </Text>
                        <Text>My name is </Text>
                        <Name>Sergey Ignatov</Name>
                        <MainTitle>I'm a frontend dev</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt={'my photo'}/>
                    </PhotoWrapper>
                    {/*<img src={abstract} />*/}
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  @media ${theme.media.tablet} {
    padding-top: 100px;
  }
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
`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmin: 36, Fmax: 56})}
  letter-spacing: -1px;
`

const Name = styled.h2`
  ${font({weight: 700, Fmin: 36, Fmax: 56})}
  background: ${theme.colors.fontAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
`

const Text = styled.p`
  ${font({weight: 700, Fmin: 36, Fmax: 56})}
  letter-spacing: -1px;
`
