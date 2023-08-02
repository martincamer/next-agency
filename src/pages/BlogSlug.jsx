import { useParams } from 'react-router-dom';
import { Button, Container } from '../components';
import { blog } from '../content/blog';

export const BlogSlug = () => {
	const params = useParams();

	const workIndex = blog.findIndex(item => params.slug === item.slug);
	const work = blog[workIndex];

	return (
		<Container
			width={
				'w-[1220px] py-[150px] max-md:py-[60px] space-y-40 max-md:space-y-20'
			}
		>
			<div className="space-y-20 max-md:space-y-12">
				<div className="text-[40px] max-md:text-[25px]">{work.titulo}.</div>
				<div className="space-y-12">
					<div>
						<img
							className="w-full h-full object-cover"
							src={work.imagen}
							alt=""
						/>
					</div>
					<div
						className="flex flex-col gap-10"
						dangerouslySetInnerHTML={{ __html: work.descripcion }}
					/>
				</div>
			</div>
			<div className="pb-8">
				<div className="space-y-4 w-[60%] max-w-full max-md:w-full ">
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
			</div>
		</Container>
	);
};
