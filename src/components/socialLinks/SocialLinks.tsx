import React from 'react';
import styled from 'styled-components';
import {Icon} from "../icon/Icon";

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
                        <Icon iconId={'tg'} width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} />
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
  
`

const SocialList = styled.ul `
    display: flex;
    gap: 20px;
`

const SocialItem = styled.li `

`

const SocialLink = styled.a `

`