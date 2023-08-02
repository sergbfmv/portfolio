import React from 'react';
import styled from 'styled-components';
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <SocialList>
                <SocialItem>
                    <SocialLink href="">
                        <Icon iconId={'instagram'} width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="">
                        <Icon iconId={'tg'} width={'30px'} height={'30px'} viewBox={'0 0 50px 50px'} />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="">
                        <Icon iconId={'linkedin'} width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} />
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.div `
  margin-left: 50px;

  @media screen and (max-width: 891px) {
    margin-left: 0;
    margin-right: 70px;
  }
`

const SocialList = styled.ul `
    display: flex;
    gap: 20px;
`

const SocialItem = styled.li `

`

const SocialLink = styled.a `
    color: ${theme.colors.fontSecondary};
  
  &:hover {
    color: #FFF;
  }
`