import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, incrementBy } from '../utils/counterActions';

const CounterComponent = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState(0);

	const handleInputChange = (event) => {
		setInputValue(Number(event.target.value));
	};

	const handleIncrementBy = () => {
		dispatch(incrementBy(inputValue));
	};

	return (
		<div className="counter">
			<h1 className="count">{count}</h1>
			<button className="button" onClick={() => dispatch(decrement())}>
				Decrement
			</button>
			<button className="button" onClick={handleIncrementBy}>
				{inputValue} by {inputValue} Increment
			</button>
			<input
				type="number"
				placeholder="Value"
				className="input"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default CounterComponent;
