import { DECREMENT, INCREMENT_BY } from './counterAcTypes';

export const decrement = () => ({
	type: DECREMENT,
});

export const incrementBy = (value) => ({
	type: INCREMENT_BY,
	payload: value,
});
