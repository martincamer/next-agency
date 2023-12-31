import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const item = {
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				ease: 'easeInOut',
				duration: 0.3,
				delay: 0.9,
			},
		},
	};

	return (
		<header className="sticky top-0 z-50">
			<nav className="max-md:border-b-[1px] max-md:border-black/20">
				<div className="wrapper">
					<div className="logo">
						<Link
							to={'/'}
							className="font-extrabold text-3xl"
						>
							Bext.lab
						</Link>
					</div>
					<ul className="nav-links max-md:hidden">
						<Link
							className="hover:bg-black px-4 py-2 rounded-xl hover:text-white transition-all ease-in-out duration-300"
							to={'/'}
						>
							Home
						</Link>
						<Link
							className="hover:bg-black px-4 py-2 rounded-xl hover:text-white transition-all ease-in-out duration-300"
							to={'/proyectos'}
						>
							Proyectos
						</Link>
						<Link
							className="hover:bg-black px-4 py-2 rounded-xl hover:text-white transition-all ease-in-out duration-300"
							to={'/procesos'}
						>
							Procesos
						</Link>
						<Link
							className="hover:bg-black px-4 py-2 rounded-xl hover:text-white transition-all ease-in-out duration-300"
							to={'/blog'}
						>
							Blog
						</Link>
						<Link
							className="hover:bg-black px-4 py-2 rounded-xl hover:text-white transition-all ease-in-out duration-300"
							to={'/contacto'}
						>
							Contacto
						</Link>
						<Link
							className="hover:bg-black px-4 py-2 rounded-xl hover:text-white transition-all ease-in-out duration-300"
							to={'/servicio'}
						>
							Servicios
							<div className="mega-box">
								<div className="content relative">
									<div className="w-[20px] h-[20px] bg-white absolute top-[-10px] right-[20px] rotate-45 shadow-class"></div>
									<div className="main">
										<p className="font-semibold text-base text-black">
											Diseño Web
										</p>
										<ul className="mega-links">
											<div>
												<Link
													className="nav"
													to={'/servicio/landing-page'}
												>
													Landing Page
												</Link>
											</div>

											<div>
												<Link
													className="nav"
													to={'/servicio/tienda-online'}
												>
													Tienda Online
												</Link>
											</div>

											<div>
												<Link
													className="nav"
													to={'/servicio/pagina-web-informativa'}
												>
													Pagina Web Informativa
												</Link>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</Link>
					</ul>
					<div
						className="max-md:block hidden"
						onClick={() => handleClick()}
					>
						{!isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={item}
						animate={{
							height: '100%',
							opacity: 1,
							translateX: '0',
						}}
						initial={{
							height: '0',
							opacity: 0,
							translateX: '-500px',
						}}
						transition={{ duration: 0.3 }}
						className={
							'fixed top-0 bg-terciary gap-12 text-white shadow-lg shadow-black/20 w-full p-12 flex flex-col font-semibold text-lg text-center capitalize'
						}
						exit={'exit'}
					>
						<div
							onClick={handleClick}
							className="absolute top-0 right-0 p-4 cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
						<Link
							className={`text-[23px] hover:text-white transition-all ease-in-out duration-500`}
							to={'/'}
							onClick={handleClick}
						>
							<motion.div
								inital={{
									y: 90,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{ duration: 0.3 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',

										delay: 0.5,
									},
								}}
							>
								Home
							</motion.div>
						</Link>
						<Link
							onClick={handleClick}
							className="text-[23px] hover:text-white transition-all ease-in-out duration-300"
							to={'/proyectos'}
						>
							<motion.div
								inital={{
									y: 90,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{ duration: 0.3 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',

										delay: 0.4,
									},
								}}
							>
								Proyectos
							</motion.div>
						</Link>
						<Link
							onClick={handleClick}
							className="text-[23px] hover:text-white transition-all ease-in-out duration-300"
							to={'/procesos'}
						>
							<motion.div
								inital={{
									y: 90,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{ duration: 0.3 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',

										delay: 0.3,
									},
								}}
							>
								Procesos
							</motion.div>
						</Link>
						<Link
							onClick={handleClick}
							className="text-[23px] hover:text-white transition-all ease-in-out duration-300"
							to={'/blog'}
						>
							<motion.div
								inital={{
									y: 90,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{ duration: 0.3 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',
										delay: 0.2,
									},
								}}
							>
								Blog
							</motion.div>
						</Link>
						<Link
							onClick={handleClick}
							className="text-[23px] hover:text-white transition-all ease-in-out duration-300"
							to={'/contacto'}
						>
							<motion.div
								inital={{
									y: 90,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								transition={{ duration: 0.3 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',

										delay: 0.1,
									},
								}}
							>
								Contacto
							</motion.div>
						</Link>
						<Link
							className=" px-4 py-2 rounded-xl transition-all ease-in-out duration-300 group flex flex-col items-center relative"
							to={'/servicio'}
							onClick={handleClick}
						>
							<span className="flex items-center gap-2 text-[23px]">
								<motion.div
									inital={{
										y: 90,
										opacity: 0,
									}}
									animate={{
										y: 0,
										opacity: 1,
									}}
									transition={{ duration: 0.3 }}
									exit={{
										opacity: 0,
										y: 90,
										transition: {
											ease: 'easeInOut',

											delay: 0.0,
										},
									}}
								>
									Servicios
								</motion.div>
								<motion.div
									inital={{
										y: 90,
										opacity: 0,
									}}
									animate={{
										y: 0,
										opacity: 1,
									}}
									transition={{ duration: 0.3 }}
									exit={{
										opacity: 0,
										y: 90,
										transition: {
											ease: 'easeInOut',

											delay: 0.0,
										},
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</motion.div>
							</span>
							<div className="hidden absolute top-[40px] group-hover:block bg-white p-4 rounded-lg w-[250px]">
								<p className="font-semibold text-black pb-2 text-lg">
									Diseño Web
								</p>
								<ul className="mega-links space-y-3">
									<Link
										onClick={handleClick}
										className="text-sm text-gray-800 font-normal"
										to={'/servicio/landing-page'}
									>
										- Landing Page
									</Link>
									<Link
										onClick={handleClick}
										className="text-sm text-gray-800 font-normal"
										to={'/servicio/tienda-online'}
									>
										- Tienda Online
									</Link>
									<Link
										onClick={handleClick}
										className="text-sm text-gray-800 font-normal"
										to={'/servicio/pagina-web-informativa'}
									>
										- Pagina Web Informativa
									</Link>
								</ul>
							</div>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
