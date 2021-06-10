import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../moudles';
import {getNewsAsync} from '../../moudles/news';
import NewsItem from '../../components/News/NewsItem';
import axios from 'axios';

type NewsListProps = {
    national:string
}

function NewsList({national}:NewsListProps) {
    const {data, loading, error } =useSelector((state:RootState) => state.dailynews.newsContent);
    const dispatch = useDispatch();

    const onNews = (national: string) => {
        dispatch(getNewsAsync.request(national));
    };


    useEffect(() => {
        onNews(national);
    },[]);

    return (
        <div>
            {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && data.articles.map(article => (
                <NewsItem key={article.title} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} />
            ))}
        </div>
    );
}

export default NewsList;