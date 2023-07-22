import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(217, 113, 113, 0.54);
  display: flex;
  justify-content: space-between;
`