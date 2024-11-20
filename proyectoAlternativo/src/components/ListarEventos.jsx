import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { MapPin, Users, Clock, Globe, Tag } from 'lucide-react';
import iconoEvento from '../assets/iconoEvento96.png';

const ListarEventos = () => {
	const [eventos, seteventos] = useState([]);
	const [cargando, setcargando] = useState(true);
	const [error, setError] = useState(null);
	const [filtro, setfiltro] = useState({
		tipo: 'todos',
		modalidad: 'todos',
		precio: 'todos',
	});

	const formatoFecha = (timestamp) => {
		if (!timestamp) return '';
		const fecha = new Date(timestamp);
		return fecha.toLocaleDateString('es-ES', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});
	};

	useEffect(() => {
		const fetcheventos = async () => {
			try {
				setcargando(true);
				let eventosQuery = query(
					collection(db, 'eventos'),
					orderBy('fechaHoraInicio')
				);

				if (filtro.tipo !== 'todos') {
					eventosQuery = query(eventosQuery, where('tipo', '==', filtro.tipo));
				}
				if (filtro.modalidad !== 'todos') {
					eventosQuery = query(
						eventosQuery,
						where('modalidad', '==', filtro.modalidad)
					);
				}
				if (filtro.precio === 'gratis') {
					eventosQuery = query(eventosQuery, where('precio', '==', 0));
				}

				const querySnapshot = await getDocs(eventosQuery);
				const eventosData = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				seteventos(eventosData);
			} catch (err) {
				setError('Error al cargar los eventos');
				console.error(err);
			} finally {
				setcargando(false);
			}
		};

		fetcheventos();
	}, [filtro]);

	if (error) {
		return (
			<div className="text-center text-red-600 p-4">
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{/* filtros */}
			<div className="mb-8 bg-white p-4 rounded-lg shadow">
				<h2 className="text-lg font-semibold mb-4">Filtros</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<select
						value={filtro.tipo}
						onChange={(e) => setfiltro({ ...filtro, tipo: e.target.value })}
						className="border rounded-md p-2">
						<option value="todos">Todos los tipos</option>
						<option value="conferencia">Conferencia</option>
						<option value="taller">Taller</option>
						<option value="seminario">Seminario</option>
						<option value="curso">Curso</option>
						<option value="networking">Networking</option>
					</select>

					<select
						value={filtro.modalidad}
						onChange={(e) =>
							setfiltro({ ...filtro, modalidad: e.target.value })
						}
						className="border rounded-md p-2">
						<option value="todos">Todas las modalidades</option>
						<option value="presencial">Presencial</option>
						<option value="virtual">Virtual</option>
						<option value="hibrido">Híbrido</option>
					</select>

					<select
						value={filtro.precio}
						onChange={(e) => setfiltro({ ...filtro, precio: e.target.value })}
						className="border rounded-md p-2">
						<option value="todos">Todos los precios</option>
						<option value="gratis">Gratis</option>
						<option value="pago">De pago</option>
					</select>
				</div>
			</div>

			{/* efecto tipo cargando  */}
			{cargando ? (
				<div className="text-center py-8">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
				</div>
			) : (
				<>
					{/* mostrar eventos en malla */}
					{eventos.length === 0 ? (
						<div className="text-center py-8">
							<p className="text-gray-500">
								No se encontraron eventos con los filtros seleccionados.
							</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{eventos.map((event) => (
								<div
									key={event.id}
									className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
									<div className="h-48 bg-gray-200 relative">
										<img
											src={iconoEvento}
											alt={event.nombre}
										/>
										<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
											{event.precio === 0 ? 'Gratis' : `$${event.precio}`}
										</div>
									</div>

									<div className="p-6">
										<div className="flex items-center text-sm text-blue-600 mb-2">
											<Tag className="h-4 w-4 mr-1" />
											<span className="capitalize">{event.tipo}</span>
										</div>

										<h3 className="text-xl font-semibold mb-2 text-gray-900">
											{event.nombre}
										</h3>

										<p className="text-gray-600 text-sm mb-4 line-clamp-2">
											{event.descripcion}
										</p>

										<div className="space-y-2 text-sm text-gray-600">
											<div className="flex items-center">
												<Clock className="h-4 w-4 mr-2" />
												<span>{formatoFecha(event.fechaHoraInicio)}</span>
											</div>

											{event.modalidad !== 'virtual' && event.lugar && (
												<div className="flex items-center">
													<MapPin className="h-4 w-4 mr-2" />
													<span>{event.lugar}</span>
												</div>
											)}

											{(event.modalidad === 'virtual' ||
												event.modalidad === 'hibrido') && (
												<div className="flex items-center">
													<Globe className="h-4 w-4 mr-2" />
													<span>
														{event.modalidad === 'hibrido'
															? 'Evento híbrido'
															: 'Evento virtual'}
													</span>
												</div>
											)}

											<div className="flex items-center">
												<Users className="h-4 w-4 mr-2" />
												<span>
													{event.capacidadAsistentes} asistentes máximo
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default ListarEventos;
