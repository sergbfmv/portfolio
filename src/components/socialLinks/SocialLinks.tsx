import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './SocialLinks_Styles'


const socialItemsData = [
    {
        iconId: 'instagram',
        href: 'https://www.instagram.com/serg_vale'
    },
    {
        iconId: 'tg',
        href: 'https://t.me/serg_vale'
    },
    {
        iconId: 'linkedin',
        href: 'https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%B8%D0%B3%D0%BD%D0%B0%D1%82%D0%BE%D0%B2-1656b1207/'
    },
]
export const SocialLinks: React.FC = () => {
    return (
        <S.SocialLinks>
            <S.SocialList>
                {socialItemsData.map((s, index) => {
                    return (
                        <S.SocialItem key={index}>
                            <S.SocialLink href={s.href} target='_blank'>
                                <Icon iconId={s.iconId} width={'30px'} height={'30px'} viewBox={'0 0 30 30'}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    )
                })}
            </S.SocialList>
        </S.SocialLinks>
    );
};

