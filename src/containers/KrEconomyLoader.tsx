import React,{useEffect} from 'react';
import NewsList from '../components/News/NewsList';

function KrEconomyLoader() {


    return (
        <div>
            <NewsList national="kr" />
        </div>
    );
}

export default KrEconomyLoader;