import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_Style'

type SkillPropsType = {
    iconId: string,
}
export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>
        </S.Skill>
    );
};
