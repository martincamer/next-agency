import { Link } from 'react-router-dom';
import { Button, Container } from '../components';

export const Procesos = () => {
	return (
		<>
			<Container width={'w-[1220px] py-[150px] max-md:py-[60px]'}>
				<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
					<p className="text-sm text-gray-700">NUESTRO TRABAJO</p>
					<h4 className="text-[40px] max-md:text-[25px]">
						Obtenga su experiencia digital deseada de manera eficiente.
					</h4>
				</div>
			</Container>
			<Container width={'w-full bg-terciary py-[150px] max-md:py-[60px]'}>
				<div className="w-[1220px] max-w-full grid grid-cols-2 max-md:grid-cols-1 mx-auto max-md:gap-8">
					<div className="space-y-5">
						<div>
							<h4 className="text-[40px] text-white max-md:text-[25px]">
								Agile methodology & design thinking.
							</h4>
						</div>
						<div className="space-y-5">
							<p className="text-gray-500 text-lg max-md:text-sm">
								Le ofrecemos un método de trabajo garantizado para que obtenga
								su producto digital tal y como lo desea, dentro del presupuesto
								y de los tiempos de entrega.
							</p>
							<p className="text-gray-500 text-lg max-md:text-sm">
								Los guiaremos en cada fase del proceso a través de las mejores
								herramientas de gestión de proyectos.
							</p>
							<p className="text-gray-500 text-lg max-md:text-sm">
								La metodología ágil permite gestionar los proyectos dividiendolo
								en fases. Esto implica un diálogo y una colaboración constante
								entre las partes.
							</p>
							<p className="text-gray-500 text-lg max-md:text-sm">
								Una vez iniciado el trabajo, los equipos pasan por un proceso de
								planificación, ejecución y evaluación.
							</p>
						</div>
					</div>
					<div className="w-full mx-auto flex justify-center items-center">
						<img
							className="w-[160px] h-[160px]"
							src="https://www.brumalab.com.co/wp-content/uploads/2023/04/011.gif"
							alt=""
						/>
					</div>
				</div>
			</Container>
			<Container width="w-[1220px] py-[150px] max-md:py-[60px] grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 items-center justify-center relative">
				<div className="space-y-6 max-md:space-y-4">
					<p className="text-sm text-gray-700">FASE 01</p>
					<h4 className="text-[40px] max-md:text-[25px]">
						Incorporación y puesta en marcha.
					</h4>
					<div className="space-y-2">
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							En Brumalab nos interesa conocer a fondo cada particularidad de su
							negocio. Por eso, al iniciar el proceso le designaremos un gestor
							de proyectos, quien será el encargado de guiarlo a través del
							proceso y las herramientas.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Queremos ser lo más transparentes y proteger su inversión.
						</p>
					</div>
					<p className="font-medium text-lg">Entregables de la fase</p>
					<ul className="list-disc text-sm text-gray-500 px-6">
						<li>Equipo de trabajo </li>
						<li>Herramientas de trabajo</li>
					</ul>
				</div>
				<div className="w-full flex justify-center items-center">
					<img
						src={
							'https://www.brumalab.com.co/wp-content/uploads/2023/04/fase1proceso_bruma.gif'
						}
						alt=""
					/>
				</div>
			</Container>
			<Container width="w-[1220px] pb-[150px] max-md:pb-[60px] grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 items-center justify-center relative max-md:flex max-md:flex-col-reverse">
				<div className="w-full flex justify-center items-center">
					<img
						src={
							'https://www.brumalab.com.co/wp-content/uploads/2023/04/fase2proceso_bruma.gif'
						}
						alt=""
					/>
				</div>
				<div className="space-y-6 max-md:space-y-4">
					<p className="text-sm text-gray-700">FASE 02</p>
					<h4 className="text-[40px] max-md:text-[25px]">
						Descubrir y planificar.
					</h4>
					<div className="space-y-2">
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Esta etapa funciona como una especie de taller. Conoceremos de la
							mano de ustedes la profundidad de su negocio, su identidad, sus
							objetivos comerciales y las necesidades de su público objetivo.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Asignaremos un diseñador UX que planifique unos objetivos, un
							alcance, un presupuesto y un calendario final que usted podrá
							revisar.
						</p>
					</div>
					<p className="font-medium text-lg">Entregables de la fase</p>
					<ul className="list-disc text-sm text-gray-500 px-6">
						<li>Alcance y calendario</li>
					</ul>
				</div>
			</Container>
			<Container width="w-[1220px] pb-[150px] max-md:pb-[60px] grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 items-center justify-center relative">
				<div className="space-y-6 max-md:space-y-4">
					<p className="text-sm text-gray-700">FASE 03</p>
					<h4 className="text-[40px] max-md:text-[25px]">Diseño UI / UX</h4>
					<div className="space-y-2">
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Durante esta fase los profesionales de Brumalab se encargarán de
							diseñar su producto digital de la mano de los comentarios y
							sugerencias que usted crea pertinentes.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Este trabajo colaborativo permitirá encontrar las soluciones de
							diseño que más se ajusten a sus objetivos finales.
						</p>
					</div>
					<p className="font-medium text-lg">Entregables de la fase</p>
					<ul className="list-disc text-sm text-gray-500 px-6">
						<li>Wireframes</li>
						<li>Diseño</li>
					</ul>
				</div>
				<div className="w-full flex justify-center items-center">
					<img
						src={
							'https://www.brumalab.com.co/wp-content/uploads/2023/04/fase3proceso_bruma.gif'
						}
						alt=""
					/>
				</div>
			</Container>
			<Container width="w-[1220px] pb-[150px] max-md:pb-[60px] grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 items-center justify-center relative max-md:flex max-md:flex-col-reverse">
				<div className="w-full flex justify-center items-center">
					<img
						src={
							'https://www.brumalab.com.co/wp-content/uploads/2023/04/fase4proceso_bruma.gif'
						}
						alt=""
					/>
				</div>
				<div className="space-y-6 max-md:space-y-4">
					<p className="text-sm text-gray-700">FASE 04</p>
					<h4 className="text-[40px] max-md:text-[25px]">Desarrollo</h4>
					<div className="space-y-2">
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Nuestros programadores se pondrán en la tarea de desarrollar lo
							que el diseñador se imaginó, con la garantía de que funcionará
							perfectamente y visualmente se verá bien.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Todo estará testeado para garantizar su calidad y que marche bien.
						</p>
					</div>
					<p className="font-medium text-lg">Entregables de la fase</p>
					<ul className="list-disc text-sm text-gray-500 px-6">
						<li>Front-end probado</li>
						<li>CMS conectado</li>
						<li>Back-end probado</li>
						<li>Integraciones conectadas</li>
					</ul>
				</div>
			</Container>
			<Container width="w-[1220px] pb-[150px] max-md:pb-[60px] grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 items-center justify-center relative ">
				<div className="space-y-6 max-md:space-y-4">
					<p className="text-sm text-gray-700">FASE 05</p>
					<h4 className="text-[40px] max-md:text-[25px]">Implementación</h4>
					<div className="space-y-2">
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Cuando su producto digital está aprobado, con el diseño que se
							imaginó y la funcionalidad correcta está listo para ser publicado.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Durante esta elegiremos el proveedor de almacenamiento (hosting)
							que más se ajuste a su requerimiento, de manera que su producto
							digital tenga un excelente rendimiento en dispositivos de mesa y
							móviles.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Del mismo modo nos encargaremos de que el motor principal de
							búsqueda Google lo lea adecuadamente.
						</p>
					</div>
					<p className="font-medium text-lg">Entregables de la fase</p>
					<ul className="list-disc text-sm text-gray-500 px-6">
						<li>Proveedor de alojamiento seleccionado</li>
						<li>Optimización del rendimiento</li>
						<li>Pruebas del entorno final</li>
						<li>Publicación del sitio web</li>
					</ul>
				</div>
				<div className="w-full flex justify-center items-center">
					<img
						src={
							'https://www.brumalab.com.co/wp-content/uploads/2023/04/fase5proceso_bruma.gif'
						}
						alt=""
					/>
				</div>
			</Container>
			<Container width="w-[1220px] pb-[150px] max-md:pb-[60px] grid grid-cols-2 max-md:grid-cols-1 max-md:gap-12 items-center justify-center relative max-md:flex max-md:flex-col-reverse">
				<div className="w-full flex justify-center items-center">
					<img
						src={'https://www.brumalab.com.co/wp-content/uploads/2023/04/6.gif'}
						alt=""
					/>
				</div>

				<div className="space-y-6 max-md:space-y-4">
					<p className="text-sm text-gray-700">FASE 06</p>
					<h4 className="text-[40px] max-md:text-[25px]">Optimización​</h4>
					<div className="space-y-2">
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Una vez su producto digital esté conectado con el mundo es el
							tiempo perfecto para posicionarlo.
						</p>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Nos encargaremos de realizar el posicionamiento SEO, las campañas
							de email marketing, el mantenimiento del sitio y todo lo que esté
							a nuestro alcance para garantizar la funcionalidad y
							sostenibilidad en el tiempo.
						</p>
					</div>
					<p className="font-medium text-lg">Entregables de la fase</p>
					<ul className="list-disc text-sm text-gray-500 px-6">
						<li>
							Se establecen en conjunto con el cliente para atender a los
							requerimientos reales.
						</li>
					</ul>
				</div>
			</Container>
			<Container width="py-[100px] border-t-[1px] border-black">
				<div className="w-[1220px] max-w-full mx-auto">
					<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
						<p className="text-sm text-gray-700">HERRAMIENTAS</p>
						<h4 className="text-[40px] max-md:text-[25px]">
							Herramientas y tecnologías
						</h4>
						<p className="text-base text-gray-500 text-justify max-md:text-sm">
							Si quieres ser el mejor necesitas usar las mejores herramientas.
							Por eso invertimos en las mejores herramientas y tecnologías del
							mercado, para que podamos centrarnos en lo que es importante para
							ti y tu nueva experiencia digital.
						</p>
					</div>

					<div className="mt-8 flex gap-3 flex-wrap max-md:justify-center">
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=git" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=html" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=css" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=js" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=react" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=nextjs" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=wordpress" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=tailwind" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=sass" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=styledcomponents" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=nodejs" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=express" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=php" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=laravel" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=docker" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=postgresql" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=mongodb" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=figma" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=xd" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=photoshop" />
						</a>
						<a
							href="https://skillicons.dev"
							className="hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg"
						>
							<img src="https://skillicons.dev/icons?i=illustrator" />
						</a>
					</div>
				</div>
			</Container>
			<Container width={'w-[1220px] pt-[0px] pb-[150px] max-md:pb-[80px]'}>
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

			<Container
				width={'border-t-[1px] border-black py-[150px] max-md:py-[60px]'}
			>
				<div className="w-[1220px] mx-auto max-w-full flex justify-between">
					<Link
						className="text-gray-800 max-md:text-sm"
						to={''}
					>
						¿Es demasiado pronto para dar el primer paso?
					</Link>
					<Link
						className="text-sm underline"
						to={''}
					>
						Conocer nuestros servicios
					</Link>
				</div>
			</Container>
		</>
	);
};
