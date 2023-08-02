import { createContext } from 'react';

const UseContextNext = createContext();

export const NextContextProvider = ({ children }) => {
	return (
		<UseContextNext.Provider value={{}}>{children}</UseContextNext.Provider>
	);
};

export default UseContextNext;
