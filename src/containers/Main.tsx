/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import Anapji from "../backgroundImg/Anapji.jpg";
import Hangang from "../backgroundImg/Hangang.jpg";
import HangangNight from "../backgroundImg/Hangang-night.jpg";
import Jeju from "../backgroundImg/Jeju.jpg";
import Myeongdong from "../backgroundImg/Myeongdong.jpg";
import axios from "axios";

import moment from 'moment';
import 'moment/locale/ko';
import {useInterval} from 'react-use';
import styled from '@emotion/styled';

const GostockBlock = styled.button`
    color: rgba(30, 22, 54, 0.6);
    box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
    font-size: 20px;
    border-radius: 0.5rem;
    &:hover {
        box-shadow: #F2F2F2 0 80px 0px 2px inset;
    }
`;


type imageProps = {
    name: string;
    src: string;
}

const images:imageProps[] = [
    { name: "경주 안압지", src: Anapji },
    { name: "한강", src: Hangang },
    { name: "한강 밤", src: HangangNight },
    { name: "제주도", src: Jeju },
    { name: "서울 명동", src: Myeongdong },
];

function Main () {
    const [imgNumber, setImgNumber] = useState<number>(0);

    const [realTime, setRealTime] = useState(moment().format('YYYY-MM-DD HH:mm'));
    const [nowHour, setNowHour] = useState(moment().hour());
    const [timeCase, setTimecase] = useState<number>(1);

    

    useInterval(() => {
        setRealTime(moment().format('YYYY-MM-DD HH:mm'));
        setNowHour(moment().hour());

        if (6<=nowHour && nowHour <9) {
            setTimecase(1)
        }
        else if (9<=nowHour && nowHour <18) {
            setTimecase(2)
        }
        else if (18<=nowHour && nowHour<=23) {
            if (nowHour === 23 && 30 <= moment().minute()){
                setTimecase(4)
            }
            setTimecase(3)
        }
        else {
            setTimecase(4)
        }
    }, 1000);

    

    useEffect(() => {
        setImgNumber(Math.floor(Math.random() * images.length))
    },[])

    

    // const getAdvice = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://api.adviceslip.com/advice"
    //         );


    //         setAdvice(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     getAdvice();
    // }, []);

    return (
        <div
            css={css`
                height: 100vh;
                background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${images[imgNumber].src}) center;
                background-size: cover;
                color: white;
            `}
        >
            <div css={css`
                display: flex;
                justify-content: center;
                padding-top: 16rem;
                flex-direction: column;
                padding-left: 5rem;
                font-size: 2rem;

                @media screen and (max-width: 768px) {

                    font-size: 1.5rem;
                }
            `}>
                <div
                    css={css`
                        font-size: 6rem;
                        font-weight: 700;
                        @media screen and (max-width: 768px) {

                            font-size: 3rem;
                        }
                        
                    `}
                >
                    We go Up !<br />
                    
                </div>
                <br />{realTime}
                <br />
                {timeCase===1 ? "오늘 하루도 파이팅!" : timeCase===2 ? <div>지금은 한국 주식 장이 열리는 시간입니다.<br /><GostockBlock>한국 주식 정보</GostockBlock></div> : timeCase===3 ? "오늘 하루도 수고했어요:)" : <div>지금은 해외 주식 장이 열리는 시간입니다.<br /><GostockBlock>해외 주식 정보</GostockBlock></div>}
            </div>

            <div
                css={css`
                    position: absolute;
                    top: 0;
                    right: 0;
                `}
            >
                {`장소: ${images[imgNumber].name}`}
                
            </div>
            
            
        </div>
    );
};

export default Main;