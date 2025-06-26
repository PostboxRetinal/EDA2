import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	useEffect(() => {
		setState({ data: null, isLoading: true, hasError: null });

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setState({
					data,
					isLoading: false,
					hasError: null,
				});
			})
			.catch(() => {
				setState({
					data: null,
					isLoading: false,
					hasError: 'Error fetching data',
				});
			});
	}, [url]);

	return state;
};
