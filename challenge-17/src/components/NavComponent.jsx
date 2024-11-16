import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/NavComponent.css';

const NavComponent = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('NavComponent must be used within an AppContextProvider');
	}

	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" activeClassName="active">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" activeClassName="active">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavComponent;
