import React, {FormEvent, useState, ChangeEvent} from 'react';

type SearchStockFormProps = {
    onSubmitStockcode: (stockcode: string) => void;
}



function SearchStockForm({onSubmitStockcode}: SearchStockFormProps) {
    const [input, setInput] = useState('');

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitStockcode(input);
    };

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <h3>종목 코드를 입력해주세요.</h3>
            <input onChange={onChange} value={input} placeholder="(ex.035420 or tsla)" />
            <button type="submit">조회</button>
        </form>
    );
}

export default SearchStockForm;