/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, {useState} from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { ComponentProps } from 'react';
import MenuOutlined from '@ant-design/icons';
import { Icon } from "react-icons-kit";
import {menu} from 'react-icons-kit/icomoon/menu'

type CategoriesType = string[]

const categories:CategoriesType = [
    "Home",
    "About",
    "Korea Stock",
    "USD Stock",
    "BitCoin"
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
    opacity:0.3;
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
        margin-left: 2rem

        font-size: 0.25rem;
    }
`;



function Header() {

    const [navon, setNavon] = useState<boolean>(false);

    const onClosenav = () => {
        setNavon(!navon);
    }

    return(
        <div>
            {!navon ? <CategoriesBeforeBlock> <div onClick={onClosenav}>
                <Icon size={"20"} icon={menu} />
            </div></CategoriesBeforeBlock> : <CategoriesBlock>
                    <Category key="X" onClick={onClosenav}>X</Category>
                    {categories.map(category => (
                        <Category key={category}>{category}</Category>
                    ))}
                </CategoriesBlock>}
        </div> 
    )
}

export default Header;
