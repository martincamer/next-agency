import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="sticky top-0 z-[1]">
			<nav className="max-md:mb-2 max-md:border-b-[1px] max-md:border-black/20">
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
											<Link to={'/servicio/landing-page'}>Landing Page</Link>
											<Link to={'/servicio/tienda-online'}>Tienda Online</Link>
											<Link to={'/servicio/pagina-web-informativa'}>
												Pagina Web Informativa
											</Link>
										</ul>
									</div>
									<div className="main">
										<p className="font-semibold text-base text-black">
											Diseño UX/UI
										</p>
										<ul className="mega-links">
											<Link to={'/servicio/ux-research'}>UX Research</Link>
											<Link to={'/servicio/ux-ui-design'}>UI/UX Design</Link>
											<Link to={'/servicio/ux-review'}>UX Review</Link>
										</ul>
									</div>
								</div>
							</div>
						</Link>
					</ul>
					<div>
						<button
							className={
								'flex-col justify-center items-center hidden max-md:flex font-medium'
							}
							onClick={handleClick}
						>
							<span
								className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
									isOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-0.5'
								}`}
							></span>
							<span
								className={`bg-black  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
									isOpen ? 'opacity-0' : 'opacity-100'
								}`}
							></span>
							<span
								className={`bg-black  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
									isOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-0.5'
								}`}
							></span>
						</button>
					</div>
				</div>
			</nav>
			{isOpen ? (
				<div
					className={`fixed h-[50%] shadow-lg shadow-black/20 w-full p-12 bg-white transition-all duration-300 ease-in-out flex flex-col font-semibold text-lg text-center uppercase items-center justify-center`}
				>
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
						className=" px-4 py-2 rounded-xl transition-all ease-in-out duration-300 group flex flex-col items-center relative"
						to={'/servicio'}
					>
						<span className="flex items-center gap-2">
							Servicios
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
						</span>
						<div className="hidden absolute top-[40px] group-hover:block bg-white p-4 rounded-lg shadow-md shadow-current w-[250px]">
							<p className="font-semibold text-sm text-black pb-2">
								Diseño UX/UI
							</p>
							<ul className="mega-links space-y-2 mb-4">
								<Link
									className="text-sm text-gray-500"
									to={'/servicio/ux-research'}
								>
									- UX Research
								</Link>
								<Link
									className="text-sm text-gray-500"
									to={'/servicio/ux-ui-design'}
								>
									- UI/UX Design
								</Link>
								<Link
									className="text-sm text-gray-500"
									to={'/servicio/ux-review'}
								>
									- UX Review
								</Link>
							</ul>
							<p className="font-semibold text-sm text-black pb-2">
								Diseño Web
							</p>
							<ul className="mega-links space-y-2">
								<Link
									className="text-sm text-gray-500"
									to={'/servicio/ux-research'}
								>
									- UX Research
								</Link>
								<Link
									className="text-sm text-gray-500"
									to={'/servicio/ux-ui-design'}
								>
									- UI/UX Design
								</Link>
								<Link
									className="text-sm text-gray-500"
									to={'/servicio/ux-review'}
								>
									- UX Review
								</Link>
							</ul>
						</div>
					</Link>
				</div>
			) : (
				''
			)}
		</header>
	);
};
