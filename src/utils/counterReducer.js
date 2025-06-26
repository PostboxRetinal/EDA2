import { DECREMENT, INCREMENT_BY } from './counterAcTypes';

const initialState = {
	count: 0,
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		case INCREMENT_BY:
			return {
				...state,
				count: state.count + action.payload,
			};
		default:
			return state;
	}
};

export default counterReducer;
