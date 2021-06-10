/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import Anapji from "../backgroundImg/Anapji.jpg";
import Hangang from "../backgroundImg/Hangang.jpg";
import HangangNight from "../backgroundImg/Hangang-night.jpg";
import Jeju from "../backgroundImg/Jeju.jpg";
import Myeongdong from "../backgroundImg/Myeongdong.jpg";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import moment from 'moment';
import 'moment/locale/ko';
import {useInterval} from 'react-use';



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
    const [advice, setAdvice] = useState<string>('');
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
                background: url(${images[imgNumber].src}) center;
                background-size: cover;
                color: white;
            `}
        >
            <div
                css={css`
                    font-size: 4rem;
                    font-weight: 700;
                    display: flex;
                    justify-content: center;
                    padding-top: 5rem;
                `}
            >
                우리의 돈은 복사될 것입니다.<br />
                {realTime}
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
            {timeCase===1 ? "일찍 일어나셨군요. 오늘 하루도 파이팅!" : timeCase===2 ? <button>한국 장으로</button> : timeCase===3 ? "저녁 먹고 조금만 쉽시다." : <button>해외 장으로</button>}
            <div
                css={css`
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    animation: blink-effect 2s ease-in-out infinite;

                    @keyframes blink-effect {
                        0% {
                            opacity: 0;
                        }

                        50% {
                            bottom: 1rem;
                        }
                    }
                `}
            >
                <Icon size={"20%"} icon={ic_keyboard_arrow_down} />
            </div>
        </div>
    );
};

export default Main;