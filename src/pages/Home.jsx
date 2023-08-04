import { Link } from 'react-router-dom';
import { Container, Button, Loading } from '../components';
import { proyectos } from '../content/proyectos';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import persona from './../../public/assets/img/persona.webp';
import { useContext } from 'react';
import UseContextNext from '../context/NextContext';

export const Home = () => {
	const { loading } = useContext(UseContextNext);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Container width={'w-[1220px]'}>
						<div className="py-[150px] max-md:py-[80px] flex flex-col justify-center items-center">
							<div className="w-[80%] mx-auto max-md:w-full">
								<h2 className="font-extrabold text-[38px] max-md:text-[25px] max-md:text-justify text-center">
									Conectamos tu marca con el mundo{' '}
									<span className="font-medium">
										A tiempo. Dentro del presupuesto. A punto.
									</span>
								</h2>
								<div className="mt-5 flex justify-center">
									<p className="text-xl max-md:text-base font-medium max-md:text-center">
										Diseño web - Tiendas online - Diseño UX/UI
									</p>
								</div>

								<ul className="mt-12 flex gap-10 w-[80%] mx-auto max-md:w-full max-md:flex-col max-md:gap-5">
									<li className="text-center max-md:w-[80%] mx-auto">
										<p className="text-center font-semibold text-xl mb-2 max-md:text-base">
											90%
										</p>
										<span className="text-base text-gray-700 max-md:text-base">
											de nuestros colaboradores son expertos UX
										</span>
									</li>
									<li className="text-center max-md:w-[80%] mx-auto">
										<p className="text-center font-semibold text-xl mb-2 max-md:text-base">
											1 década
										</p>
										<span className="text-base text-gray-700 max-md:text-base">
											de experiencia en el sector digital
										</span>
									</li>
									<li className="text-center max-md:w-[80%] mx-auto">
										<p className="text-center font-semibold text-xl mb-2 max-md:text-base">
											100%
										</p>
										<span className="text-base text-gray-700 max-md:text-base">
											de nuestro trabajo se realiza con design thinking
										</span>
									</li>
								</ul>
							</div>
						</div>
					</Container>
					<Container width={'w-[1220px]'}>
						<div className="w-full h-full">
							<img
								className="w-full h-full object-cover"
								src={
									'https://www.brumalab.com.co/wp-content/uploads/2023/04/Diseno-sin-titulo.gif'
								}
								alt=""
							/>
						</div>
					</Container>
					<Container width={'w-[100%] bg-six'}>
						<div className="w-[1220px] mx-auto max-w-full py-[150px] max-md:py-[60px]">
							<div className="flex flex-col justify-center items-center w-[60%] mx-auto max-md:w-full gap-4">
								<h6 className="text-[35px] text-center max-md:text-[25px]">
									Diseñamos productos digitales de clase mundial.
								</h6>
								<p className="text-base text-center text-gray-800 max-md:text-sm">
									En Brumalab le generamos valor a su marca desde una
									metodología que integra lo mejor de la creatividad y la
									funcionalidad.
								</p>
								<div className="mt-6">
									<Button
										style={
											'bg-terciary text-white hover:bg-white hover:border-[1px] hover:text-black hover:border-black transition-all duration-300 ease max-md:text-[12px]'
										}
									>
										¿Por qué Bext.Lab?
									</Button>
								</div>
							</div>
						</div>
					</Container>

					<Container width={'w-[1220px] py-[150px] max-md:py-[60px]'}>
						<div className="w-full h-full grid grid-cols-2 gap-10 max-md:gap-5">
							{proyectos.map(i => (
								<Link to={`/proyectos/${i.slug}`}>
									<img
										className="h-[800px] w-[600px] object-cover hover:animate-wiggle cursor-pointer max-md:w-full max-md:h-[250px]"
										src={i.imagen_principal}
										alt=""
									/>
									<div className="mt-6 space-y-2">
										<h3 className="text-[14px] font-semibold uppercase text-gray-700 max-md:text-sm max-md:text-center">
											{i.pertenece}
										</h3>
										<p className="font-semibold text-lg max-md:text-sm max-md:text-center">
											{i.titulo}
										</p>
									</div>
								</Link>
							))}
						</div>
						<div className="flex justify-between items-center mt-20">
							<Link
								className="font-semibold text-black max-md:text-sm"
								to={''}
							>
								¿Deseas ver todos los proyectos?
							</Link>
							<Link
								className="text-sm font-medium text-gray-700 underline"
								to={''}
							>
								Todos los proyectos
							</Link>
						</div>
					</Container>

					<Container width={'w-full bg-terciary py-[150px] text-white'}>
						<div className="w-[1220px] mx-auto max-w-full space-y-20 max-md:space-y-14">
							<div className="space-y-2 w-[80%] max-w-full max-md:w-full">
								<p className="text-sm text-gray-400">PRODUCTOS Y SERVICIOS</p>
								<h3 className="text-4xl text-gray-400 max-md:text-[25px]">
									Expertos en cada fase del ciclo de vida del producto digital
								</h3>
							</div>
							<div>
								<Accordion className="space-y-5">
									<AccordionItem className="border-b-[1px] py-4">
										<h2>
											<AccordionButton>
												<Box
													as="span"
													flex="1"
													textAlign="left"
												>
													<Text className="text-2xl text-white max-md:text-xl">
														01 Diseño web
													</Text>
												</Box>
												<AccordionIcon className={'text-2xl'} />
											</AccordionButton>
										</h2>
										<AccordionPanel
											className="text-gray-500 max-md:text-base"
											pb={4}
											mt={10}
										>
											Su página web es el medio para conectar su marca con el
											mundo. Por eso la diseñamos y la administramos para que
											sea el reflejo de sus valores corporativos y sea
											competente según el mercado al que pertenece.¡Contáctanos
											hoy mismo y déjanos diseñar la tienda online de tus
											sueños!
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
													<Text className="text-2xl text-white max-md:text-xl">
														02 Tienda online
													</Text>
												</Box>
												<AccordionIcon className={'text-2xl'} />
											</AccordionButton>
										</h2>
										<AccordionPanel
											className="text-gray-500 max-md:text-base"
											pb={4}
											mt={10}
										>
											Si estás buscando dar vida a tu tienda online con un
											diseño profesional y personalizado, estás en el lugar
											adecuado. Permítenos ser tus aliados en este emocionante
											viaje hacia el éxito en el mundo digital. ¡Contáctanos hoy
											mismo y déjanos diseñar la tienda online de tus sueños!
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
													<Text className="text-2xl text-white max-md:text-xl">
														03 Diseño UX/UI
													</Text>
												</Box>
												<AccordionIcon className={'text-2xl'} />
											</AccordionButton>
										</h2>
										<AccordionPanel
											className="text-gray-500 max-md:text-base"
											pb={4}
											mt={10}
										>
											Somos expertos en diseño de interfaz de usuario (UI) y en
											experiencia de usuario (UX). Creación de prototipos. UX
											research.
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
						<div className="pt-20 w-[1220px] mx-auto max-w-full flex justify-between">
							<Link
								className="text-gray-500 max-md:text-sm"
								to={''}
							>
								¿Queres saber más nuestros servicios?
							</Link>
							<Link
								className="text-sm underline"
								to={''}
							>
								Todos los servicios
							</Link>
						</div>
					</Container>
					<Container width={'w-[1220px] py-[150px] max-md:py-[60px]'}>
						<div className="space-y-2 w-[80%] max-w-full max-md:w-full mb-10 max-md:mb-5">
							<p className="text-sm">PRODUCTOS Y SERVICIOS</p>
							<h3 className="text-4xl max-md:text-[25px]">
								Que opinan nuestros clientes sobre nosotros desliza para ver!
							</h3>
						</div>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 1000,
							}}
							breakpoints={{
								411: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								640: {
									slidesPerView: 2,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 4,
									spaceBetween: 20,
								},
							}}
							modules={[Pagination, Autoplay]}
							className="z-0"
						>
							<SwiperSlide className="bg-white p-10 rounded-md shadow-lg shadow-black/40 my-10 mx-4 space-y-5 max-md:mx-0">
								<img
									className="rounded-full w-[100px] h-[100px] object-cover shadow-lg mx-auto"
									src={persona}
									alt=""
								/>
								<p className="text-xs font-medium text-justify">
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									inventore, tempora voluptate voluptas non est, ut temporibus
									quia ratione earum eos deleniti".
								</p>
								<div className="flex justify-between">
									<h4 className="text-sm text-gray-800">Laura Silvana</h4>
									<p className="text-sm text-gray-800">Arquitecta</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className="bg-white p-10 rounded-md shadow-lg shadow-black/40 my-10 mx-4 space-y-5 max-md:mx-0">
								<img
									className="rounded-full w-[100px] h-[100px] object-cover shadow-lg mx-auto"
									src={persona}
									alt=""
								/>
								<p className="text-xs font-medium text-justify">
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									inventore, tempora voluptate voluptas non est, ut temporibus
									quia ratione earum eos deleniti".
								</p>
								<div className="flex justify-between">
									<h4 className="text-sm text-gray-800">Laura Silvana</h4>
									<p className="text-sm text-gray-800">Arquitecta</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className="bg-white p-10 rounded-md shadow-lg shadow-black/40 my-10 mx-4 space-y-5 max-md:mx-0">
								<img
									className="rounded-full w-[100px] h-[100px] object-cover shadow-lg mx-auto"
									src={persona}
									alt=""
								/>
								<p className="text-xs font-medium text-justify">
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									inventore, tempora voluptate voluptas non est, ut temporibus
									quia ratione earum eos deleniti".
								</p>
								<div className="flex justify-between">
									<h4 className="text-sm text-gray-800">Laura Silvana</h4>
									<p className="text-sm text-gray-800">Arquitecta</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className="bg-white p-10 rounded-md shadow-lg shadow-black/40 my-10 mx-4 space-y-5 max-md:mx-0">
								<img
									className="rounded-full w-[100px] h-[100px] object-cover shadow-lg mx-auto"
									src={persona}
									alt=""
								/>
								<p className="text-xs font-medium text-justify">
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									inventore, tempora voluptate voluptas non est, ut temporibus
									quia ratione earum eos deleniti".
								</p>
								<div className="flex justify-between">
									<h4 className="text-sm text-gray-800">Laura Silvana</h4>
									<p className="text-sm text-gray-800">Arquitecta</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className="bg-white p-10 rounded-md shadow-lg shadow-black/40 my-10 mx-4 space-y-5 max-md:mx-0">
								<img
									className="rounded-full w-[100px] h-[100px] object-cover shadow-lg mx-auto"
									src={persona}
									alt=""
								/>
								<p className="text-xs font-medium text-justify">
									"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
									inventore, tempora voluptate voluptas non est, ut temporibus
									quia ratione earum eos deleniti".
								</p>
								<div className="flex justify-between">
									<h4 className="text-sm text-gray-800">Laura Silvana</h4>
									<p className="text-sm text-gray-800">Arquitecta</p>
								</div>
							</SwiperSlide>
						</Swiper>
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
								¿Queres saber más nuestros servicios?
							</Link>
							<Link
								className="text-sm underline"
								to={''}
							>
								Todos los servicios
							</Link>
						</div>
					</Container>
				</>
			)}
		</>
	);
};
