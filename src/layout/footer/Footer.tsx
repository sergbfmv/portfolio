import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import { mainItems } from '../header/Header';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-around'}>
                <Logo/>
                <Phone>+91 12345 09876</Phone>
                <Email>info@example.com</Email>
                <SocialLinks/>
            </FlexWrapper>
            <FlexWrapper justify={'space-around'}>
                <Menu menuItems={mainItems} />
                <CRight>Designed and built by Pavan MG with Love & Coffee</CRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #5d913f;
  min-height: 20vh;
`

const Phone = styled.span `

`

const Email = styled.span `

`

const CRight = styled.span `

`