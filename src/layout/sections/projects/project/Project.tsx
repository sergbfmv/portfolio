import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Projects_Styles'

type ProjectPropsType = {
    title: string,
    text: string,
    techText: string,
    src: string,
    projDemoLink?: string,
    projCodeLink?: string
}
export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt={''}/>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.TechText>Tech stack: <S.LineText>{props.techText}</S.LineText></S.TechText>
                <FlexWrapper>
                    <S.Link href={props.projDemoLink} target='_blank'>
                        <Icon iconId={'link'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <S.LinkName>Live Preview</S.LinkName>
                    </S.Link>
                    <S.Link href={props.projCodeLink} target='_blank'>
                        <Icon iconId={'git-link'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <S.LinkName>View Code</S.LinkName>
                    </S.Link>
                </FlexWrapper>
            </S.Description>
        </S.Project>
    );
};

