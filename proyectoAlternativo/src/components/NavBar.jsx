import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex space-x-8">
						{/* meetUs */}
						<Link
							to="/eventos"
							className="flex items-center px-2 py-2 text-gray-900 hover:text-blue-600">
							<strong>meetUs</strong>
						</Link>

						{/* Aqui pongo lo linkssssss */}
						<div className="flex">
							<Link
								to="/eventos"
								className="flex items-center px-3 py-2 text-gray-900 hover:text-blue-600">
								Listar Eventos
							</Link>
							<Link
								to="/eventos/crear"
								className="flex items-center px-3 py-2 text-gray-900 hover:text-blue-600">
								Crear Evento
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
