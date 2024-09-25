import React, { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Small = memo(({ value }) => {
	console.log(':(');
	return <small>{value}</small>;
});
