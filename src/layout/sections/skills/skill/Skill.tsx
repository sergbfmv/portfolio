import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string,
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}  />
        </StyledSkill>
    );
};

const StyledSkill = styled.div `
  background-color: rgba(255, 255, 255, 0.44);
  width: 15%;
  margin: 10px;
`