import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

type ProjectPropsType = {
    title: string,
    text: string,
    techText: string,
    src: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={''}/>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechText>Tech stack: <LineText>{props.techText}</LineText></TechText>
                <Link href={'#'}>
                    <Icon iconId={'link'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                    <LinkName>Live Preview</LinkName>
                </Link>
                <Link href={'#'}>
                    <Icon iconId={'git-link'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                    <LinkName>View Code</LinkName>
                </Link>
            </Description>
        </StyledProject>
    );
};

const Link = styled.a`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */

  &:hover {
    text-decoration: underline;
  }
`
const StyledProject = styled.div`
  width: 330px;
  flex-grow: 1;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 20px;
  
  ${Link} {
    & + ${Link} {
    margin-left: 30px;
    }
  }
  
  @media ${theme.media.desctop} {
    max-width: 375px;
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
  margin-top: 17px;
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
  ${font({weight: 400, lineHeight: '26px', Fmin: 14, Fmax: 16})}
  margin-left: 10px;
  font-style: normal;
`