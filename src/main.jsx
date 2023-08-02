import React from 'react';
import ReactDOM from 'react-dom/client';
import NextApp from './NextApp.jsx';
import { NextContextProvider } from './context/NextContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NextContextProvider>
			<NextApp />
		</NextContextProvider>
	</React.StrictMode>
);
