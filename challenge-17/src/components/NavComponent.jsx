import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/NavComponent.css';

const NavComponent = () => {
	const context = useContext(AppContext);
	console.log('Context value: ', context);
	if (!context) {
		console.error(
			'AppContext not found - check if AppContextProvider is properly set up'
		);
		//fallback UI para no perder la funcionalidad
		return (
			<nav className="nav-bar">
				<ul>
					<li>
						<NavLink to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		);
	}

	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<NavLink to="/" end>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavComponent;
