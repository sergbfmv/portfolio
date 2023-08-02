import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {FlexWrapper} from "../../components/FlexWrapper";
import {mainItems} from '../header/Header';
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {DesktopMenu} from "../header/headerMenu/desktopMenu/DesktopMenu";
import { font } from '../../styles/Common';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrapper>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        {/*<Logo/>*/}
                        <Group>
                            <Phone>+91 12345 09876</Phone>
                            <Email>info@example.com</Email>
                            <div><SocialLinks/></div>
                        </Group>
                    </FlexWrapper>
                    <FlexWrapper justify={'space-between'} margin={'60px 0 0 0'}>
                        <DesktopMenu menuItems={mainItems}/>
                        <CRight>Designed and built by <span>Pavan
                            MG</span> with <span>Love</span> & <span>Coffee</span></CRight>
                    </FlexWrapper>
                </Wrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  color: ${theme.colors.fontSecondary};

  @media screen and (max-width: 891px) {
    padding: 20px 0;
  }
`

const Wrapper = styled.span `
  position: relative;
  
  &:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background-color: #42446E;
    left: 0;
    top: 50%;
  }
`

const Group = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  @media ${theme.media.mobile} {
    & > div {
      display: none;
  }
}
`

const Phone = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 18})}
  align-self: center;
`

const Email = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 18})}
  align-self: center;
`

const CRight = styled.span`
  ${font({weight: 400, lineHeight: '26px', Fmin: 12, Fmax: 18})}
  align-self: center;
  margin-left: 10px;
  
  span {
    background: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }
`
