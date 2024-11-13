import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/slices/counterSlice';
import { fetchQuotes } from '../store/slices/fetchSlice';

export const MultipleCustomHook = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);
	const { data, isLoading, hasError } = useSelector((state) => state.fetch);

	useEffect(() => {
		dispatch(fetchQuotes(count));
	}, [count, dispatch]);

	return (
		<div>
			<h2>Breaking Bad Quotes + RTK cache ;)</h2>
			<p>Count: {count}</p>
			<hr />
			{isLoading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				data &&
				data.length > 0 && (
					<blockquote className="blockquote text-right">
						<p className="mb-0">"{data[0].quote}"</p>
						<cite className="blockquote-footer">{data[0].author}</cite>
					</blockquote>
				)
			)}

			{hasError && (
				<div className="alert alert-danger">Error fetching data</div>
			)}

			<button className="btn btn-primary" onClick={() => dispatch(increment())}>
				More quotes!
			</button>
		</div>
	);
};
