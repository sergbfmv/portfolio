import React from 'react';
import styled from 'styled-components';
import {theme} from "../../../../styles/Theme";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
  &:hover {
    background-image: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${theme.colors.fontSecondary};

`