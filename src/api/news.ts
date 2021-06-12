import axios from 'axios';
import {NewsAPIKEY} from '../key/apikey';

export async function getNews(national:string) {
    const response = await axios.get<News>(
        `https://newsapi.org/v2/top-headlines?country=${national}&category=business&pageSize=6&apiKey=${NewsAPIKEY}`
    );

    return response.data;
}

export interface News {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  null | string;
    publishedAt: Date;
    content:     null | string;
}

export interface Source {
    id:   null | string;
    name: string;
}