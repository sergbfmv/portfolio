import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string,
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 200px;
  flex-grow: 1;
  margin-bottom: 50px;
  
  @media ${theme.media.mobile} {
    margin-bottom: 10px;
    width: 150px;
  }
  
  //&:nth-child(1) {
  //  margin-bottom: 50px;
  //}
`