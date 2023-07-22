import React from 'react';
import styled from 'styled-components';
import {FlexWraper} from "../../../components/FlexWraper";
import {Icon} from "../../../components/icon/Icon";
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import {SectionParagraph} from "../../../components/SectionParagraph";

type SkillsPropsType = {
    title: string,
    paragraph: string
}
export const Skills = (props: SkillsPropsType) => {
    return (
        <StyleSkills>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionParagraph>{props.paragraph}</SectionParagraph>
            <FlexWraper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'html'} />
                <Skill iconId={'css'} />
                <Skill iconId={'js'} />
                <Skill iconId={'ts'} />
                <Skill iconId={'react'} />
                <Skill iconId={'redux'} />
                <Skill iconId={'git'} />
                <Skill iconId={'vscode'} />
                <Skill iconId={'github'} />
                <Skill iconId={'styledComponent'} />
                <Skill iconId={'figma'} />
                <Skill iconId={'storyBook'} />
            </FlexWraper>
        </StyleSkills>
    );
};

const StyleSkills = styled.section `
  background-color: #454e50;
  min-height: 100vh;
`

