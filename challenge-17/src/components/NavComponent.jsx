// NavComponent.jsx
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
	return (
		<nav className="w-full bg-gray-800 p-4 shadow-lg">
			<div className="container mx-auto flex items-center justify-between px-4">
				<div className="text-white font-bold text-xl">
					<NavLink
						to="/"
						className="hover:text-gray-300 transition duration-200">
						Challenge17 - NavBar ☕</NavLink>
				</div>

				{/* Enlaces de Navegación */}
				<div className="hidden md:flex space-x-6">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`text-gray-300 hover:text-white transition duration-200 ${
								isActive ? 'border-b-2 border-blue-400' : ''
							}`
						}
						end>
						Inicio
					</NavLink>

					<NavLink
						to="/about"
						className={({ isActive }) =>
							`text-gray-300 hover:text-white transition duration-200 ${
								isActive ? 'border-b-2 border-blue-400' : ''
							}`
						}>
						Acerca de
					</NavLink>

					<NavLink
						to="/services"
						className={({ isActive }) =>
							`text-gray-300 hover:text-white transition duration-200 ${
								isActive ? 'border-b-2 border-blue-400' : ''
							}`
						}>
						Servicios
					</NavLink>

					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`text-gray-300 hover:text-white transition duration-200 ${
								isActive ? 'border-b-2 border-blue-400' : ''
							}`
						}>
						Contacto
					</NavLink>
				</div>

				{/* Mobile Menu Button */}
				<button className="md:hidden text-white">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default NavComponent;
