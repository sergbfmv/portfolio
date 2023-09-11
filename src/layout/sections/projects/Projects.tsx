import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionParagraph} from "../../../components/SectionParagraph";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import proj1 from '../../../assets/images/proj1.webp'
import proj3 from '../../../assets/images/proj3.webp'
import proj4 from '../../../assets/images/proj4.webp'
import projBatman from '../../../assets/images/proj-Batman.webp'
import projCount from '../../../assets/images/projCount.webp'
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles'
import {AnimatePresence, motion} from "framer-motion"

const tabItems: Array<{ title: string, status: TabStatusType }> = [
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
        type: 'spa',
        id: 1
    },
    {
        title: 'Counter',
        text: 'This is sample project counter. You can add min and max value and save it in local storage for saving you count.',
        techText: 'HTML, CSS, JavaScript, React, React-router-dom',
        src: projCount,
        type: 'react',
        projDemoLink: 'https://sergbfmv.github.io/Batman/index.html',
        projCodeLink: 'https://github.com/sergbfmv/Counter',
        id: 2,

    },
    {
        title: 'ToDo list',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techText: 'HTML , JavaScript, SASS, React',
        src: proj3,
        type: 'spa',
        id: 3
    },
    {
        title: 'Mesto',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techText: 'HTML , JavaScript, SASS, React',
        src: proj4,
        type: 'spa',
        id: 4
    },
    {
        title: 'Batman',
        text: 'Landing page about Batman movie',
        techText: 'HTML , JavaScript, CSS',
        src: projBatman,
        type: 'landing',
        projDemoLink: 'https://sergbfmv.github.io/Batman/index.html',
        projCodeLink: 'https://github.com/sergbfmv/Batman',
        id: 5
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
                <TabMenu tabItems={tabItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} align={'flex-start'}>
                    <AnimatePresence>
                        {filteredProjects.map((p, index) => {
                            return (
                                <motion.div style={{width: '330px', flexGrow: 1, maxWidth: '375px'}}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                layout={true}
                                key={p.id}
                                >
                                    <Project title={p.title} text={p.text} techText={p.techText} src={p.src}
                                              key={p.id} projCodeLink={p.projCodeLink} projDemoLink={p.projDemoLink}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

