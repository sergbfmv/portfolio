import React from 'react';
import {S} from '../HeaderMenu_Styles'

// export const mainItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contacts']
export const mainItems = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Tech Stack',
        href: 'tech'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    }
]
export const Menu: React.FC = () => {
    return (
        <ul>
            {mainItems.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        to={item.href}
                        smooth={true}
                        activeClass='active'
                        spy={true}
                    >{item.title}</S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};
