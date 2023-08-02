import { Link } from 'react-router-dom';
import '../styles/header.css';

export const Header = () => {
	return (
		<header className="sticky top-0 z-[1]">
			<nav>
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
				</div>
			</nav>
		</header>
	);
};
