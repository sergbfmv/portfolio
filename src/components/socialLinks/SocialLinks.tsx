import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './SocialLinks_Styles'


const socialItemsData = [
    {iconId: 'instagram'},
    {iconId: 'tg'},
    {iconId: 'linkedin'},
]
export const SocialLinks: React.FC = () => {
    return (
        <S.SocialLinks>
            <S.SocialList>
                {socialItemsData.map((s, index) => {
                    return (
                        <S.SocialItem key={index}>
                            <S.SocialLink href="">
                                <Icon iconId={s.iconId} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    )
                })}
            </S.SocialList>
        </S.SocialLinks>
    );
};

