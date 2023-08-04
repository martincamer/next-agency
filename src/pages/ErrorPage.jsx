import { Container } from '../components';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
	return (
		<Container
			width={
				'w-[1220px] h-[500px] max-md:h-auto max-md:py-[150px] flex justify-center items-center'
			}
		>
			<div className="space-y-6 max-md:text-center">
				<h2 className="text-3xl max-md:text-2xl">
					Esta pagina no fue encontrada!
				</h2>

				<h4 className="text-7xl max-md:text-5xl font-extrabold">ERROR 404</h4>

				<div>
					<Link
						to={'/'}
						className="underline text-gray-600"
					>
						Volver al incio
					</Link>
				</div>
			</div>
		</Container>
	);
};
