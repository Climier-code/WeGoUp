import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from '@emotion/styled';
import { AdviceandStockBlock } from '../Stocks/USStockLoader';



function KRAdvice() {

    const [advice, setAdvice] = useState<string>("");

    const getAdvice = async () => {
        try {
            const response = await axios.get(`/request/helpful_text?apikey=guest`);

            setAdvice(response.data[1].respond);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <AdviceandStockBlock>
            {advice}
        </AdviceandStockBlock>

    );

}

export default KRAdvice;