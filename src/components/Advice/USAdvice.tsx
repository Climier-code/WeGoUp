import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AdviceandStockBlock } from '../Stocks/USStockLoader';




function USAdvice() {

    const [advice, setAdvice] = useState<string>("");

    const getAdvice = async () => {
        try {
            const response = await axios.get(
                "https://api.adviceslip.com/advice"
            );

            setAdvice(response.data.slip.advice);
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

export default USAdvice;