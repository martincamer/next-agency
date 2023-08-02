import { blog } from '../content/blog';
import { Button, Container } from '../components';
import { Link } from 'react-router-dom';

export const Blog = () => {
	return (
		<Container width={'w-[1220px] py-[150px] max-md:py-[60px] space-y-20'}>
			<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
				<p className="text-sm text-gray-700">NUESTRO BLOG</p>
				<h4 className="text-[40px] max-md:text-[25px]">
					Ultimos blog subidos.
				</h4>
			</div>
			<div className="grid grid-cols-2 gap-10">
				{blog.map(b => (
					<Link
						to={`/blog/${b.slug}`}
						key={b._id}
						className="space-y-4"
					>
						<img
							src={b.imagen}
							className="hover:animate-wiggle"
							alt=""
						/>
						<h4 className="text-lg font-medium">{b.titulo}</h4>
					</Link>
				))}
			</div>
			<div className="space-y-4 w-[60%] max-w-full max-md:w-full">
				<p className="text-sm text-gray-800">PRODUCTOS Y SERVICIOS</p>
				<h3 className="text-4xl max-md:text-[25px]">
					Construyamos o mejoremos su producto digital
				</h3>
			</div>
			<div className="mt-9 flex gap-3">
				<Button
					style={
						'bg-terciary text-white hover:bg-white hover:border-[1px] hover:text-black hover:border-black transition-all duration-300 ease max-md:text-[12px]'
					}
				>
					Contacto
				</Button>
				<Button
					style={
						'bg-white border-[1px] border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease max-md:text-[12px]'
					}
				>
					Agendar una cita
				</Button>
			</div>
		</Container>
	);
};
