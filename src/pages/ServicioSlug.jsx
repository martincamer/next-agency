import { useParams } from 'react-router-dom';
import { Button, Container } from '../components';
import { pages } from '../content/pages';
export const ServicioSlug = () => {
	const params = useParams();

	console.log(params);

	const workIndex = pages.findIndex(p => params.slug === p.slug);
	const page = pages[workIndex];

	return (
		<>
			<Container
				width={'w-[1220px] mx-auto max-w-full py-[150px] max-md:py-[60px]'}
			>
				<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
					<p className="text-sm text-gray-700">NUESTRO SERVICIO</p>
					<h4 className="text-[40px] max-md:text-[25px]">{page.title}</h4>
				</div>
			</Container>
			<Container width={'100% bg-six py-[150px] max-md:py-[60px]'}>
				<div className="w-[1000px] mx-auto max-w-full">
					<div
						className="text-4xl leading-[55px] max-md:text-lg max-md:text-justify"
						dangerouslySetInnerHTML={{ __html: page.desc }}
					/>
				</div>
			</Container>
			<Container width={'100% bg-terciary py-[150px] max-md:py-[60px]'}>
				<div className="w-[1220px] mx-auto max-w-full grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-10">
					<div
						style={{
							backgroundImage: `url(${page.back_image})`,
							height: '500px',
							width: '100%',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundAttachment: 'fixed',
						}}
					>
						<p className="text-8xl max-md:text-4xl text-white p-5">
							{page.text_image}
						</p>
					</div>
					<div className="flex justify-center items-center">
						<div
							className="text-xl space-y-5 text-gray-500 max-md:text-base max-md:text-justify"
							dangerouslySetInnerHTML={{ __html: page.desc_image }}
						/>
					</div>
				</div>
			</Container>
			{page.categoria === 'diseño' && (
				<>
					<Container
						width={
							'w-[1220px] max-w-full mx-auto grid grid-cols-2 max-md:grid-cols-1 pt-[150px] max-md:pt-[60px]'
						}
					>
						<div className="space-y-5 max-md:px-2">
							<p className="text-sm text-gray-700">FASE 01</p>
							<h4 className="text-[40px] max-md:text-[25px]">
								Diseño de experiencia
							</h4>
							<p className="text-gray-500">
								La estética y la funcionalidad son dos principios que no se
								deben descuidar cuando se habla del diseño de una página web.
							</p>
							<p className="text-gray-500">
								Es ahí donde resulta fundamental que sea diseñada, desarrollada
								y optimizada por manos profesionales.
							</p>
							<p className="text-gray-500">
								Nos especializamos en diseñar páginas web coherentes con la
								identidad visual de su marca. Además, le prestamos vital
								importancia a que la experiencia del usuario sea agradable y
								memorable.
							</p>
							<p className="text-gray-500">
								Todos las páginas web que diseñamos cumplen con ser responsive,
								es decir, funcionan y se visualizan correctamente desde
								cualquier dispositivo (computador, Tablet, celular).
							</p>
							<p className="text-gray-500">
								Estamos en constante crecimiento y creemos firmemente que nunca
								se deja de aprender. Es por eso por lo que traemos para su
								negocio un diseño web basado en metodologías contemporáneas y lo
								mejor del UI / UX.
							</p>
						</div>
						<div className="flex justify-center items-center">
							<img
								className="w-[400px] h-[400px] max-md:w-full max-md:h-full"
								src="/public/assets/img/animation_lkt5erp6.gif"
								alt=""
							/>
						</div>
					</Container>
					<Container
						width={
							'w-[1220px] max-w-full mx-auto py-[150px] max-md:py-10  grid grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse'
						}
					>
						<div className="flex justify-center items-center">
							<img
								className="w-[400px] max-w-full max-md:w-full max-md:h-ful"
								src="/public/assets/img/ezgif-2-f59c7fc733.gif"
								alt=""
							/>
						</div>

						<div className="space-y-5 max-md:px-2">
							<p className="text-sm text-gray-700">FASE 02</p>
							<h4 className="text-[40px] max-md:text-[25px]">
								Desarrollo front end
							</h4>
							<p className="text-gray-500">
								El principal propósito del desarrollo front-end es garantizar
								que la experiencia para el usuario final sea intuitiva y
								agradable.
							</p>
							<p className="text-gray-500">
								Que su página se vea bien es tan importante como el ofrecer a su
								usuario una navegabilidad fácil y acorde a lo que está buscando.
							</p>
							<p className="text-gray-500">Trabajamos con las tecnologías:</p>
							<ul className="list-disc px-10">
								<li className="text-gray-500">HTML</li>
								<li className="text-gray-500">CSS</li>
								<li className="text-gray-500">SASS</li>
								<li className="text-gray-500">JAVASCRIPT</li>
								<li className="text-gray-500">NEXT JS</li>
								<li className="text-gray-500">WORDPRESS</li>
							</ul>
						</div>
					</Container>
					<Container
						width={
							'w-[1220px] max-w-full mx-auto grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-10 max-md:py-[60px]'
						}
					>
						<div className="space-y-5 max-md:px-2">
							<p className="text-sm text-gray-700">FASE 03</p>
							<h4 className="text-[40px] max-md:text-[25px]">
								Desarrollo backend end
							</h4>
							<p className="text-gray-500">
								Nos encargamos de que su página web cuente con el mejor respaldo
								en términos de funcionalidad.
							</p>
							<p className="text-gray-500">
								El desarrollo back-end se refiere a la arquitectura interna del
								sitio, la cual garantiza y asegura el correcto desarrollo de
								cada una de las partes.
							</p>
							<p className="text-gray-500">
								Que su página web marche con agilidad es determinante a la hora
								de conectar con su público y materializar sus ventas.
							</p>
							<p className="text-gray-500">Trabajamos con las tecnologías:</p>
							<ul className="list-disc px-10">
								<li className="text-gray-500">NODE JS</li>
								<li className="text-gray-500">EXPRESS</li>
								<li className="text-gray-500">STRAPI CMS</li>
								<li className="text-gray-500">PHP</li>
								<li className="text-gray-500">LARAVEL</li>
								<li className="text-gray-500">MONGO DB</li>
								<li className="text-gray-500">POSTGRESQL</li>
							</ul>
						</div>
						<div className="flex justify-center items-center">
							<img
								className="w-[300px] max-md:w-[200px] max-md:h-[200px]"
								src="/public/assets/img/animation_lkt5ooia.gif"
								alt=""
							/>
						</div>
					</Container>
					<Container
						width={
							'w-[1220px] max-w-full mx-auto grid grid-cols-2 max-md:grid-cols-1 py-[150px] max-md:py-[60px] max-md:flex max-md:flex-col-reverse'
						}
					>
						<div className="flex justify-center items-center">
							<img
								className="w-[300px] max-md:w-[250px] max-md:h-[250px]"
								src="/public/assets/img/animation_lkt5ujru.gif"
								alt=""
							/>
						</div>
						<div className="space-y-5 max-md:px-2">
							<p className="text-sm text-gray-700">FASE 04</p>
							<h4 className="text-[40px] max-md:text-[25px]">
								Optimización y SEO
							</h4>
							<p className="text-gray-500">
								La administración correcta de su página web es fundamental. No
								basta solo con que cuente con una, es imprescindible que
								gestione su contenido y genere tráfico a través del
								posicionamiento en los motores de búsqueda, tales como Google.
							</p>
							<p className="text-gray-500">
								Un cliente nuevo por lo general no conoce el nombre de su página
								o URL. Lo que hace es dirigirse a Google para realizar una
								búsqueda que resuelva su inquietud. El SEO (Search Engine
								Optimization) consiste en una serie de estrategias que permiten
								que su página web se posicione de manera orgánica y aparezca en
								las primeras opciones de búsqueda.
							</p>
							<p className="text-gray-500">
								Está comprobado que los usuarios interactúan con los primeros
								resultados que arroja su búsqueda, por lo general no consultan
								los resultados de la segunda página en adelante.
							</p>
							<p className="text-gray-500">
								El empleo de palabras, preguntas y frases claves con las cuales
								interactúan los usuarios al momento de buscar en internet es
								fundamental en este paso.
							</p>
						</div>
					</Container>
				</>
			)}
			<Container
				width={
					page.categoria === 'diseño'
						? 'w-[1220px] mx-auto pt-[0px] pb-[150px] max-md:pb-[80px]'
						: 'w-[1220px] mx-auto py-[150px] max-md:py-[60px]'
				}
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
		</>
	);
};
