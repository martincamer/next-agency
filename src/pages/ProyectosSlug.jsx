import { useParams } from 'react-router-dom';
import { proyectos } from '../content/proyectos';
import { Container } from '../components/Container';

export const ProyectosSlug = () => {
	const params = useParams();

	console.log(params);

	const workIndex = proyectos.findIndex(item => params.slug === item.slug);
	const work = proyectos[workIndex];

	return (
		<Container width={'w-[1220px]'}>
			{/* {work.imagenes.map((img, index) => (
				<img
					key={index}
					src={img}
					alt=""
				/>
			))} */}
			<div className="py-[150px] max-md:py-[60px] flex flex-col gap-28 max-md:gap-12">
				<div className="space-y-4">
					<p className="text-xs font-medium text-gray-800">NUESTRO TRABAJO</p>
					<h2 className="text-[40px] font-medium max-md:text-[25px]">
						{work?.titulo}.
					</h2>
				</div>

				<div className="space-y-10">
					<div className="text-sm font-medium">
						<p className="text-sm text-gray-700">MARCA:</p>
						{work?.marca}
					</div>
					<div className="text-sm font-medium">
						<p className="text-sm text-gray-700">LOCALIDAD:</p>
						{work?.local}
					</div>
					<div className="text-sm font-medium">
						<p className="text-sm text-gray-700">INDUSTRIA:</p>
						{work?.titulo}
					</div>
					<div className="text-sm font-medium">
						<p className="text-sm text-gray-700">INDUSTRIA:</p>
						{work?.publicacion}
					</div>
				</div>

				<div>
					<img
						className="object-cover w-full h-full"
						src={work?.imagen_principal}
						alt=""
					/>
				</div>

				<div className="grid grid-cols-2 items-center justify-center mx-auto gap-20 max-md:flex max-md:flex-col max-md:gap-12">
					<div className="space-y-6">
						<div>
							<p className="font-semibold text-5xl mb-5 max-md:text-[25px]">
								TIPOGRAFIA
							</p>
							<span className="text-3xl font-medium max-md:text-2xl">
								{work?.tipografia_uno}
							</span>
						</div>
						<div className="space-y-2">
							<p className="text-lg">{work?.texto_tipografia_uno}</p>
							<p className="text-lg">{work?.texto_tipografia_dos}</p>
						</div>
					</div>
					<div>
						<img
							className="w-[400px] h-[400px] max-md:w-full max-md:h-full object-cover mx-auto"
							src="https://www.brumalab.com.co/wp-content/uploads/2023/04/Frame-2.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
