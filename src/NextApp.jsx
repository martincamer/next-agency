import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import {
	Home,
	Procesos,
	Contacto,
	Proyectos,
	ProyectosSlug,
	Blog,
	BlogSlug,
	Servicio,
	ServicioSlug,
} from './pages';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/proyectos', element: <Proyectos /> },
			{ path: '/proyectos/:slug', element: <ProyectosSlug /> },
			{ path: '/procesos', element: <Procesos /> },
			{ path: '/contacto', element: <Contacto /> },
			{ path: '/servicio/:slug', element: <ServicioSlug /> },
			{ path: '/servicio', element: <Servicio /> },
			{ path: '/blog', element: <Blog /> },
			{ path: '/blog/:slug', element: <BlogSlug /> },
		],
	},
]);

function NextApp() {
	return <RouterProvider router={router} />;
}

export default NextApp;
