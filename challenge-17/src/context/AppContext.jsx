import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [state, setState] = useState({});

	const value = {
		test: 'Probando'
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
