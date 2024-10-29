import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHook = () => {
    const { counter, handleAdd } = useCounter(1);
    const { data, isloading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/`
    );

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {isloading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                data && data.length > 0 && (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">"{data[0].quote}"</p>
                        <cite className="blockquote-footer">{data[0].author}</cite>
                    </blockquote>
                )
            )}

            {hasError && (
				<div className="alert alert-danger">Error fetching data</div>      
            )}

            <button className="btn btn-primary" onClick={handleAdd}>
                More quotes!
            </button>
        </div>
    );
};