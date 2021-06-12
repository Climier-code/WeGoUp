import React from 'react';
import styled from '@emotion/styled';
import {mail} from 'react-icons-kit/icomoon/mail'
import { Icon } from "react-icons-kit";
import {github} from 'react-icons-kit/icomoon/github'


const AboutBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15rem;
    height: 18rem;
    border: solid 0.15rem;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem;
    border: solid 0.15rem;
    box-shadow: 0.5rem 0.5rem;
    padding: 2rem;
    font-weight: 700;
    font-size: 1rem;

`;

function About () {
    return (
        <AboutBlock>
            이 홈페이지는 다양한 곳에 투자하고 있는 여러분들의 돈이 복사되기를 원하며 만들게 되었습니다.<br /><br />
            한국, 미국, 비트코인에 대한 최신 정보들을 보실 수 있도록 담았습니다. <br /><br />
            궁금한 점이나 문의 점이 있으시면 아래로 연락주세요.<br /><br />

            <a href="mailto:ikowhddus@naver.com"><Icon size={"40"} icon={mail} /></a>
            <a href="https://github.com/Climier-code"><Icon size={"40"} icon={github} /> </a>
        </AboutBlock>
    )
}

export default About;