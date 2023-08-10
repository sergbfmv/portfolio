import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Contacts: React.FC = () => {
    return (
        <StyledContacts id='contacts'>
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
    padding: 250px 0;
`

const Title = styled.h2 `
  ${font({family:'\'DM Sans\', sans-serif', weight: 700, Fmin: 20, Fmax: 58})}
  letter-spacing: -1px;
`

const MailTitle = styled.h3`
  ${font({family:'\'DM Sans\', sans-serif', weight: 700, Fmin: 30, Fmax: 58})}
  text-align: center;
  letter-spacing: -1px;
  background: ${theme.colors.fontAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
