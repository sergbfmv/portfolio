import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/images/myPhoto.webp';
import {FlexWraper} from "../../components/FlexWraper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWraper align='center' justify='space-around'>
                <div>
                    <span>Hi 👋, </span>
                    <h2>My name is </h2>
                    <Name>Sergey Ignatov</Name>
                    <MainTitle>I'm frontend developer</MainTitle>
                </div>
                <Photo src={photo} alt={'my photo'} />
            </FlexWraper>
        </StyledMain>
    );
};

const StyledMain = styled.div `
  min-height: 100vh;
  background-color: #b8cea3;
`

const Photo = styled.img`
  width: 349px;
  height: 349px;
  border-radius: 230px;
  object-fit: cover;
`

const MainTitle = styled.h1 `

`

const Name = styled.h2 `

`
