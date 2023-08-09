import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import proj1 from '../../../assets/images/proj1.webp'
import proj2 from '../../../assets/images/proj2.webp'
import proj3 from '../../../assets/images/proj3.webp'
import proj4 from '../../../assets/images/proj4.webp'
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles'

const tabItems: Array<{title: string, status: TabStatusType}> = [
    {
        title: 'ALL',
        status: 'all'
    },
    {
        title: 'LANDING PAGE',
        status: 'landing'
    },
    {
        title: 'REACT',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    },
]

const projectsData = [
    {
        title: 'Social network',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techText: 'HTML , JavaScript, SASS, React',
        src: proj1,
        type: 'spa'
    },
    {
        title: 'Timer',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techText: 'HTML , JavaScript, SASS, React',
        src: proj2,
        type: 'react'
    },
    {
        title: 'ToDo list',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techText: 'HTML , JavaScript, SASS, React',
        src: proj3,
        type: 'spa'
    },
    {
        title: 'Mesto',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techText: 'HTML , JavaScript, SASS, React',
        src: proj4,
        type: 'spa'
    },
]
export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredProjects = projectsData

    if (currentFilterStatus === 'landing') {
        filteredProjects = projectsData.filter(work => work.type === 'landing')
    }

    if (currentFilterStatus === 'react') {
        filteredProjects = projectsData.filter(work => work.type === 'react')
    }

    if (currentFilterStatus === 'spa') {
        filteredProjects = projectsData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Projects id='projects'>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Things I’ve built so far</SectionParagraph>
                <TabMenu tabItems={tabItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    {filteredProjects.map((p, index) => {
                        return <Project title={p.title} text={p.text} techText={p.techText} src={p.src} key={index} />
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

