import React from 'react';
import photo from '../../../assets/images/myPhoto.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id='home'>
            <Container>
                <FlexWrapper align='center' justify='space-around' wrap={'wrap'}>
                    <div>
                        <S.Text>Hi 👋, </S.Text>
                        <S.Text>I am </S.Text>
                        <S.Name>Sergey Ignatov</S.Name>
                        <S.MainTitle>
                            <p>A frontend developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A frontend dev', 'A web dev', 'A React dev'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt={'my photo'}/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

