import { createContext, useEffect, useState } from 'react';

const UseContextNext = createContext();

function NextContextProvider({ children }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<UseContextNext.Provider value={{ loading }}>
			{children}
		</UseContextNext.Provider>
	);
}

export { NextContextProvider };

export default UseContextNext;
