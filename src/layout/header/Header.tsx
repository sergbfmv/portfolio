import React, {useState} from 'react';
import {SocialLinks} from '../../components/socialLinks/SocialLinks';
import {Container} from "../../components/Container";
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/mobileMenu";
import mainLogo from '../../assets/images/logo1.svg'
import {S} from './Header_Styles'
import {animateScroll as scroll} from "react-scroll";


export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 891;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return() => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <a onClick={() => {scroll.scrollToTop()}}><S.Logo src={mainLogo}/></a>
                    <S.Wrapper>
                        {width < breakpoint ? <MobileMenu />
                                            : <DesktopMenu />}
                        <SocialLinks/>
                    </S.Wrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

