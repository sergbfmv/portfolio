import React from 'react';
import styled from "styled-components";
import {SocialLinks} from '../../components/socialLinks/SocialLinks';
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import { NavMenu } from './navMenu/NavMenu';
import {FlexWrapper} from "../../components/FlexWrapper";
import logo from '../../assets/images/logo1.png'

export const mainItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <a href=''><Logo src={logo} /></a>
                    <Wrapper>
                        <NavMenu menuItems={mainItems}/>
                        <SocialLinks />
                    </Wrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img `
  width: 100px;
  height: 60px;
`