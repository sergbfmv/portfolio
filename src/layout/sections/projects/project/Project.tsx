import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    title: string,
    text:string,
    techText: string,
    src: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src}  alt={''} />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechText>{props.techText}</TechText>
            <Link href={'#'}>Live Preview</Link>
            <Link href={'#'}>View Code</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div `
  max-width: 375px;
  width: 100%;
  background-color: #f1dc2b;
`

const Image = styled.img `
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Link = styled.a `

`

const Title = styled.h4 `

`

const Text = styled.p `

`

const TechText = styled.span `

`