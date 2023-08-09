import React from 'react';
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {DesktopMenu} from "../header/headerMenu/desktopMenu/DesktopMenu";
import {S} from  './Footer_Styles'

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.Wrapper>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <S.Group>
                            <S.Phone>+91 12345 09876</S.Phone>
                            <S.Email>info@example.com</S.Email>
                            <div><SocialLinks/></div>
                        </S.Group>
                    </FlexWrapper>
                    <FlexWrapper justify={'space-between'} margin={'60px 0 0 0'}>
                        <DesktopMenu />
                        <S.CRight>Designed and built by <span>Pavan
                            MG</span> with <span>Love</span> & <span>Coffee</span></S.CRight>
                    </FlexWrapper>
                </S.Wrapper>
            </Container>
        </S.Footer>
    );
};


