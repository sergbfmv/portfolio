import React from 'react';
import {S} from '../HeaderMenu_Styles'
import {SocialLinks} from "../../../../components/socialLinks/SocialLinks";
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems} />
                <SocialLinks/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};



