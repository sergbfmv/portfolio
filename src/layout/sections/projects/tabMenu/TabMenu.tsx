import React from 'react';
import styled, {css} from 'styled-components';
import {theme} from "../../../../styles/Theme";

export type TabStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
    tabItems: Array<{ status: TabStatusType, title: string,}>,
    changeFilterStatus: (value: TabStatusType) => void,
    currentFilterStatus: string
}
export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
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

`

const Link = styled.a<{ active?: boolean }> `
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${theme.colors.fontSecondary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-image: ${theme.colors.fontAccent};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  ${props => props.active && css<{ active?: boolean }>`
    background-image: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}

  &:hover, &.active {
    background-image: ${theme.colors.fontAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
}
`