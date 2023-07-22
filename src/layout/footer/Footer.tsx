import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {Menu} from "../../components/menu/Menu";
import {FlexWraper} from "../../components/FlexWraper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWraper justify={'space-around'}>
                <Logo/>
                <Phone>+91 12345 09876</Phone>
                <Email>info@example.com</Email>
                <SocialLinks/>
            </FlexWraper>
            <FlexWraper justify={'space-around'}>
                <Menu/>
                <CRight>Designed and built by Pavan MG with Love & Coffee</CRight>
            </FlexWraper>
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