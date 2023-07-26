import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <Title>For any questions please mail me:</Title>
                    <MailTitle>sergbfmv@gmail.com</MailTitle>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 30vh;
`

const Title = styled.h2 `
  font-family: 'DM Sans';
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
`

const MailTitle = styled.h3`
  text-align: center;
  font-family: 'DM Sans';
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
  background: ${theme.colors.fontAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
