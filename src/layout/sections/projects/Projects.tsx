import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import proj1 from '../../../assets/images/proj1.webp'
import proj2 from '../../../assets/images/proj2.webp'
import proj3 from '../../../assets/images/proj3.webp'
import proj4 from '../../../assets/images/proj4.webp'
import {Container} from "../../../components/Container";

const projItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Things I’ve built so far</SectionParagraph>
                <TabMenu menuItems={projItems}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    <Project title={'Project Tile goes here'}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             techText={'HTML , JavaScript, SASS, React'}
                             src={proj1}
                    />
                    <Project title={'Project Tile goes here'}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             techText={'HTML , JavaScript, SASS, React'}
                             src={proj2}
                    />
                    <Project title={'Project Tile goes here'}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             techText={'HTML , JavaScript, SASS, React'}
                             src={proj3}
                    />
                    <Project title={'Project Tile goes here'}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                             techText={'HTML , JavaScript, SASS, React'}
                             src={proj4}
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`