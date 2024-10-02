import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Son = memo((numero, increment) => {
	console.log('Render Son... ');
	return (
		<button className="btn btn-primary mr-3" onClick={() => increment(numero)}>
			{numero}
		</button>
	);
});
