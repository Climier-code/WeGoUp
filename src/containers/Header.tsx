import React, {useState} from 'react';
import styled from '@emotion/styled';
import { Icon } from "react-icons-kit";
import {menu} from 'react-icons-kit/icomoon/menu'
import {Link} from 'react-router-dom';

type CategoriesType = CategoryType[]

type CategoryType = {
    name: string;
    text: string;
}

const categories:CategoriesType = [
    {
        "name":"",
        "text": "Home"
    },
    {
        "name":"about",
        "text": "About"
    },
    {
        "name":"krbusiness",
        "text": "Korea Stock"
    },
    {
        "name":"usbusiness",
        "text": "USD Stock"
    },
    {
        "name":"bitcoin",
        "text": "BitCoin"
    }
]

const CategoriesBeforeBlock = styled.div`
    position: fixed;
    left: 0;
    background: #BDBDBD;
    width: 3rem;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity:0.6;

    @media screen and (max-width: 768px) {
        top: 0;
        width: 100%;
        height: 3rem;
    }
`;

const CategoriesBlock = styled.div`
    position: fixed;
    left: 0;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    z-index: 990;
    font-weight: 500;
    background: #BDBDBD;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    animation: blink-effect 0.2s ease-in;

    @keyframes blink-effect {
        0% {
            width: 0;
            height: 100%;
        }
    }

    @media screen and (max-width: 768px) {

        animation: blink-mobile-effect 0.2s ease-in;

        @keyframes blink-mobile-effect {
            0% {
                width: 100%;
                height: 0;
            }
        }
    }
`;

const Category= styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    

    &:hover {
        color: #495057;
    }

    & + & {
        margin-top: 5rem;
    }

    @media screen and (max-width: 768px) {
        margin-left: 2rem;

        font-size: 0.25rem;
    }

    .default-link{
        text-decoration: none !important;
        color: white;

        &:hover {
            color: #495057;
        }
    }
`;



function Header() {

    const [navon, setNavon] = useState<boolean>(false);

    const onClosenav = () => {
        setNavon(!navon);
    }

    return(
        <div>
            {!navon ? 
            <CategoriesBeforeBlock>
                <div onClick={onClosenav}>
                    <Icon size={"20"} icon={menu} />
                </div>
            </CategoriesBeforeBlock> 
            : 
            <CategoriesBlock>
                <Category key="X" onClick={onClosenav}>X</Category>
                {categories.map(category => (
                    <Category key={category.name} onClick={onClosenav}>
                        <Link to={`/${category.name}`} className="default-link">
                            {category.text}
                        </Link>
                    </Category>
                ))}
            </CategoriesBlock>}
        </div> 
    )
}

export default Header;
