import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {SectionParagraph} from "../../../components/SectionParagraph";
import {Container} from "../../../components/Container";


const skillData = [
    {iconId: 'html'},
    {iconId: 'css'},
    {iconId: 'js'},
    {iconId: 'ts'},
    {iconId: 'react'},
    {iconId: 'redux'},
    {iconId: 'git'},
    {iconId: 'vscode'},
    {iconId: 'github'},
    {iconId: 'styledComponent'},
    {iconId: 'figma'},
    {iconId: 'storyBook'},
]
export const Skills: React.FC = () => {
    return (
        <StyleSkills id='tech'>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((skill, index) => {
                        return <Skill iconId={skill.iconId} key={index} />
                    })}
                </FlexWrapper>
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`
  position: relative;
`

