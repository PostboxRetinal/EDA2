import { useState } from 'react';

export const useCounter = (initialState = 1) => {
	const [count, setCount] = useState(initialState);

	const handleAdd = () => {
		setCount(count + 1);
	};

	return { count, handleAdd };
};
