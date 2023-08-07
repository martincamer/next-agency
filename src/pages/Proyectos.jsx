import { Link } from 'react-router-dom';
import { Container, Button } from '../components';
import { proyectos } from '../content/proyectos';

export const Proyectos = () => {
	return (
		<>
			<Container
				width={
					'w-[1220px] mx-auto max-w-full py-[150px] max-md:py-[60px] flex flex-col gap-32 max-md:gap-12'
				}
			>
				<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
					<p className="text-sm text-gray-700">NUESTRO TRABAJO</p>
					<h4 className="text-[40px] max-md:text-[25px]">
						Creamos productos digitales que posicionan su marca.
					</h4>
				</div>

				<div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 max-md:gap-10 max-md:px-2">
					{proyectos.map(p => (
						<Link to={`/proyectos/${p.slug}`}>
							<img
								className="w-full h-[300px] max-md:h-[250px] object-cover hover:animate-wiggle cursor-pointer"
								src={p.imagen_principal}
								alt=""
							/>
							<div className="mt-4">
								<p className="uppercase text-sm text-gray-700">{p.categoria}</p>
								<p className="text-lg font-semibold">{p.titulo}</p>
							</div>
						</Link>
					))}
				</div>
				<Container
					width={'w-[1220px] mx-auto pt-[0px] pb-[150px] max-md:pb-[80px'}
				>
					<div className="space-y-4 w-[60%] max-w-full max-md:w-full">
						<p className="text-sm text-gray-800">PRODUCTOS Y SERVICIOS</p>
						<h3 className="text-4xl max-md:text-[25px]">
							Construyamos o mejoremos su producto digital
						</h3>
					</div>
					<div className="mt-9 flex gap-3">
						<Button
							style={
								'bg-terciary text-white hover:bg-white hover:border-[1px] hover:text-black hover:border-black transition-all duration-300 ease max-md:text-[12px] max-md:py-[10px] flex items-center'
							}
						>
							Contacto
						</Button>
						<Button
							style={
								'bg-white border-[1px] border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease max-md:text-[12px] max-md:py-[10px]'
							}
						>
							Agendar una cita
						</Button>
					</div>
				</Container>
			</Container>
		</>
	);
};
