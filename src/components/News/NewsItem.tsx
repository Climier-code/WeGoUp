import React from 'react';
import styled from '@emotion/styled';



const NewsItemBlock = styled.div`
    display: flex;
    border-radius: 1rem;
    border: solid 0.15rem;

    padding: 1rem;
    
    & + & {
        margin-top: 3rem;
    }
`;

const ImgBlock = styled.div`
    margin-right: 1rem;

    img {
        display: block;
        width: 80px;
        height: 50px;
        object-fit:cover;
    }
`;

const ContentBlock = styled.div`
    h2 {
        margin: 0;
        font-size: 1rem;
        a {
            color: black;
        }
    }

    p {
        margin: 0;
        font-size: 0.75rem;
        line-height: 1.5;
        margin-top:0.5rem;
        white-space: normal;
    }
`;

type articleProps = {
    title: string;
    description: string|null;
    url: string;
    urlToImage: string | null;
}

function NewsItem ({title, description, url, urlToImage}: articleProps) {
    return (
        <NewsItemBlock>
            {urlToImage && (
                <ImgBlock>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt={title} />
                    </a>
                </ImgBlock>
            )}
            <ContentBlock>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </ContentBlock>
        </NewsItemBlock>
    );
};

export default NewsItem;