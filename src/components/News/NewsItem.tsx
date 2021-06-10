import React from 'react';

type articleProps = {
    title: string;
    description: string|null;
    url: string;
    urlToImage: string | null;
}

function NewsItem ({title, description, url, urlToImage}: articleProps) {
    return (
        <div>
            {urlToImage && (
                <div>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt={title} />
                    </a>
                </div>
            )}
            <div>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;