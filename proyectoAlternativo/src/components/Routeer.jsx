import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import NavBar from './NavBar';
import ListarEventos from './ListarEventos';
import NuevoEvento from './NuevoEvento';

const Routeer = () => {
	return (
		<>
			<Router>
				<div className="min-h-screen bg-gray-50">
					<NavBar />
					<Routes>
						<Route path="/" element={<Navigate to="/eventos" replace />} />

						{/* rutas de navegacion */}
						<Route path="/eventos" element={<ListarEventos />} />
						<Route path="/eventos/crear" element={<NuevoEvento />} />

						{/* rutas invalidas */}
						<Route
							path="*"
							element={
								<div className="text-center py-16">
									<h2 className="text-2xl font-bold text-gray-900">
										Página no encontrada
									</h2>
									<p className="mt-2 text-gray-600">
										La página que buscas no existe.
									</p>
								</div>
							}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default Routeer;
