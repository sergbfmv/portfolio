import React from 'react';
import styled from 'styled-components';
import {theme} from "../../../styles/Theme";

export const NavMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNavMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledNavMenu>
    );
};

const StyledNavMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px; 
    justify-content: center;
  }
`

const ListItem = styled.li`
  &:hover {
    background-image: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Link = styled.a`
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.fontSecondary};
`


