import { Link } from 'react-router-dom';

export const Button = ({ url, children, style }) => {
	return (
		<Link
			to={url}
			className={`${style} px-10 py-5 text-sm`}
		>
			{children}
		</Link>
	);
};
