import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {SectionParagraph} from "../../../components/SectionParagraph";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyleSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'html'}/>
                    <Skill iconId={'css'}/>
                    <Skill iconId={'js'}/>
                    <Skill iconId={'ts'}/>
                    <Skill iconId={'react'}/>
                    <Skill iconId={'redux'}/>
                    <Skill iconId={'git'}/>
                    <Skill iconId={'vscode'}/>
                    <Skill iconId={'github'}/>
                    <Skill iconId={'styledComponent'}/>
                    <Skill iconId={'figma'}/>
                    <Skill iconId={'storyBook'}/>
                </FlexWrapper>
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`

`

