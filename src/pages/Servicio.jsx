import { Button, Container } from '../components';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from '@chakra-ui/react';

export const Servicio = () => {
	return (
		<>
			<Container
				width={
					'w-[1220px] pt-[150px] max-md:pt-[60px] space-y-28 max-md:space-y-12'
				}
			>
				<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
					<p className="text-sm text-gray-700">NUESTRO TRABAJO</p>
					<h4 className="text-[40px] max-md:text-[25px]">
						Creamos productos digitales que posicionan su marca.
					</h4>
				</div>

				<div className="grid grid-cols-2 gap-40 max-md:grid-cols-1 max-md:gap-10">
					<div className="space-y-8">
						<img
							src={
								'https://www.brumalab.com.co/wp-content/uploads/2023/04/icons8-oficina-en-casa.gif'
							}
							alt=""
						/>
						<h4 className="text-[44px] max-md:text-[25px]">Páginas web</h4>
						<p className="text-gray-500">
							El mundo actual exige que su negocio tenga presencia en línea y
							toda una estrategia de marketing digital que la promueva. Su
							página web es la plataforma perfecta a través de la cual conecta
							su negocio y su marca con el mundo. No olvide que cada visita a es
							una oportunidad más para convertir ventas. Es por ello por lo que
							elegiremos la tecnología adecuada para su tipo de proyecto y la
							implementaremos con el objetivo de que se posicione y sea
							sostenible en el tiempo.
						</p>
					</div>
					<div className="h-full flex flex-col justify-center">
						<Accordion className="space-y-5">
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												Diseño
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										La estética y la funcionalidad son dos principios que no se
										deben descuidar cuando se habla del diseño de una página
										web.
									</p>
									<p>
										Es ahí donde resulta fundamental que sea diseñada,
										desarrollada y optimizada por manos profesionales. Nos
										especializamos en diseñar páginas web coherentes con la
										identidad visual de su marca.
									</p>
									<p>
										Además, le prestamos vital importancia a que la experiencia
										del usuario sea agradable y memorable. Todos las páginas web
										que diseñamos cumplen con ser responsive, es decir,
										funcionan y se visualizan correctamente desde cualquier
										dispositivo (computador, Tablet, celular).
									</p>
									<p>
										Estamos en constante crecimiento y creemos firmemente que
										nunca se deja de aprender. Es por eso por lo que traemos
										para su negocio un diseño web basado en metodologías
										contemporáneas y lo mejor del UI / UX.
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												Desarrollo front end
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										El principal propósito del desarrollo front-end es
										garantizar que la experiencia para el usuario final sea
										intuitiva y agradable.
									</p>
									<p>
										Que su página se vea bien es tan importante como el ofrecer
										a su usuario una navegabilidad fácil y acorde a lo que está
										buscando.
									</p>
									<p>Trabajamos con las tecnologías:</p>
									<ul className="flex gap-2 max-md:flex-wrap text-gray-800">
										<li>HTML</li>
										<li>CSS</li>
										<li>WORDPRESS</li>
										<li>REACT</li>
										<li>NEXT JS</li>
										<li>STYLED COMPONENTS</li>
										<li>SASS</li>
									</ul>
									<p>Depende el proyecto se usa una tecnología.</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												Desarrollo back end
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										Nos encargamos de que su página web cuente con el mejor
										respaldo en términos de funcionalidad.
									</p>
									<p>
										El desarrollo back-end se refiere a la arquitectura interna
										del sitio, la cual garantiza y asegura el correcto
										desarrollo de cada una de las partes.
									</p>
									<p>
										Que su página web marche con agilidad es determinante a la
										hora de conectar con su público y materializar sus ventas.
									</p>
									<p>Trabajamos con las tecnologías:</p>
									<ul className="flex gap-2  max-md:flex-wrap text-gray-800">
										<li>NODE</li>
										<li>EXPRESS</li>
										<li>PHP</li>
										<li>LARAVEL</li>
										<li>STRAPI CMS</li>
										<li>MONGO DB</li>
										<li>POSTGRESQL</li>
									</ul>
									<p>Depende el proyecto se usa una tecnología.</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												Optimización y SEO
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										La administración correcta de su página web es fundamental.
										No basta solo con que cuente con una, es imprescindible que
										gestione su contenido y genere tráfico a través del
										posicionamiento en los motores de búsqueda, tales como
										Google.
									</p>
									<p>
										Un cliente nuevo por lo general no conoce el nombre de su
										página o URL. Lo que hace es dirigirse a Google para
										realizar una búsqueda que resuelva su inquietud. El SEO
										(Search Engine Optimization) consiste en una serie de
										estrategias que permiten que su página web se posicione de
										manera orgánica y aparezca en las primeras opciones de
										búsqueda.
									</p>
									<p>
										Está comprobado que los usuarios interactúan con los
										primeros resultados que arroja su búsqueda, por lo general
										no consultan los resultados de la segunda página en
										adelante.
									</p>
									<p>
										El empleo de palabras, preguntas y frases claves con las
										cuales interactúan los usuarios al momento de buscar en
										internet es fundamental en este paso.
									</p>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</Container>
			<Container width={'w-[1220px] py-[150px] max-md:py-[60px]'}>
				<div className="grid grid-cols-2 gap-40 max-md:grid-cols-1 max-md:gap-10">
					<div className="space-y-8">
						<img
							src={
								'https://www.brumalab.com.co/wp-content/uploads/2023/04/icons8-modo-desarrollador.gif'
							}
							alt=""
						/>
						<h4 className="text-[44px] max-md:text-[25px]">Diseño UI/UX</h4>
						<p className="text-gray-500">
							En la era tecnológica contemporánea en la cual nos encontramos
							resulta imprescindible incorporar los principios UI (interfaz de
							usuario) y UX (experiencia de usuario) en la creación y
							administración de nuestros productos digitales.
						</p>
						<p className="text-gray-500">
							La herramientas y metodologías que se emplean permiten que los
							usuarios se orienten de manera natural dentro del medio, que
							tengan una experiencia agradable mientras usan su producto digital
							(página web, blog, aplicación) y realicen las acciones conforme a
							la navegación que pretendes ofrecer.
						</p>
						<p>El UX/UI se utiliza para:</p>
						<ul className="list-disc px-8 space-y-3">
							<li className="text-base text-gray-500">Aplicaciones</li>
							<li className="text-base text-gray-500">Paginas web</li>
							<li className="text-base text-gray-500">
								Desarrollo de software
							</li>
						</ul>
					</div>
					<div className="h-full flex flex-col justify-center">
						<Accordion className="space-y-5">
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												UX Research
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										Este concepto se refiere a las investigaciones enfocadas en
										conseguir datos respecto al compartamiento de los usuarios
										en entornos digitales. Esto con el fin de diseñar productos
										que satisfagan sus objetivos comerciales y las necesidades
										reales de quienes interactúan.
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												UX Design
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										En esta etapa, el diseñador UX utiliza los datos obtenidos
										durante la investigación, tales como las necesidades,
										requisitos y prioridades del cliente y del consumidor final,
										para diseñar la estructura del producto digital y presentar
										un conjunto de wireframes para cada tipo de pantalla.
									</p>

									<ul className="space-y-3">
										<li>- Arquitectura de la información</li>
										<li>- Historias de usuarios y casos de uso</li>
										<li>- Flujos de usuarios</li>
										<li>- Recorrido del usuario</li>
										<li>- Wireframing</li>
										<li>- Creación de prototipos</li>
										<li>- Redacción de UX</li>
									</ul>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												UI Design
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										El diseño de interfaz de usuario UI tiene como propósito
										guiar adecuadamente al usuario mientras navega en el
										producto digital.
									</p>
									<p>
										Esto con el objetivo de que realice de manera natural las
										acciones para las cuales está dispuesta la página web,
										aplicación, entre otras.
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className="border-b-[1px] py-4">
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
										>
											<Text className="text-2xl text-black max-md:text-xl">
												UX Review
											</Text>
										</Box>
										<AccordionIcon className={'text-2xl'} />
									</AccordionButton>
								</h2>
								<AccordionPanel
									className="text-gray-500 text-sm space-y-4"
									pb={4}
									mt={10}
								>
									<p>
										Cuando se lanza al mercado un producto digital se abre la
										posibilidad de recolectar infinidad de datos valiosos sobre
										la forma en la cual el consumidor interactúa.
									</p>
									<p>
										Nuestros investigadores de UX examinan este comportamiento y
										elaboran informes repletos de conclusiones y recomendaciones
										de diseño. Estos datos ayudarán a aumentar la tasa de
										conversión y a mejorar la experiencia general del usuario.
									</p>
									<ul className="space-y-3">
										<li>- Encuestas a clientes</li>
										<li>- Pruebas de usabilidad</li>
										<li>- Auditoría UX</li>
										<li>- Auditoría de accesibilidad</li>
										<li>- Wireframing</li>
										<li>- Pruebas A/B</li>
										<li>- Análisis de mapas de calor</li>
									</ul>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</Container>
			<Container width={'w-[1220px] pt-[0px] pb-[150px] max-md:pb-[80px]'}>
				<div className="space-y-4 w-[60%] max-w-full max-md:w-full">
					<p className="text-sm text-gray-800">¿INTERESADO?</p>
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
