import React, {FormEvent, useState, ChangeEvent} from 'react';
import styled from '@emotion/styled';


const BitcodeformBlock = styled.form`
    margin: 2rem auto;
    justify-content:center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
    }
    
`;

type SearchBitcoinFormProps = {
    onSubmitBitcoincode: (stockcode: string) => void;
}



function SearchBitcoinForm({onSubmitBitcoincode}: SearchBitcoinFormProps) {
    const [input, setInput] = useState('');

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitBitcoincode(input);
    };

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <BitcodeformBlock onSubmit={onSubmit}>
            <input onChange={onChange} value={input} placeholder="비트코인 코드를 입력해주세요." />
            <button type="submit">조회</button>
        </BitcodeformBlock>
    );
}

export default SearchBitcoinForm;