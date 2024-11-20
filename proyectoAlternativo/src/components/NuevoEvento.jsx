import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const EVENTOS_VALIDOS = [
	{ id: 'conferencia', label: 'Conferencia' },
	{ id: 'taller', label: 'Taller' },
	{ id: 'seminario', label: 'Seminario' },
	{ id: 'curso', label: 'Curso' },
	{ id: 'networking', label: 'Networking' },
	{ id: 'meetup', label: 'Meetup' },
	{ id: 'hackathon', label: 'Hackathon' },
	{ id: 'webinar', label: 'Webinar' },
	{ id: 'otro', label: 'Otro' },
];

const MODALIDADES = [
	{ id: 'presencial', label: 'Presencial' },
	{ id: 'virtual', label: 'Virtual' },
	{ id: 'hibrido', label: 'Híbrido' },
];

const NuevoEvento = () => {
	const [formData, setFormData] = useState({
		nombre: '',
		descripcion: '',
		organizadorId: '', 
		tipo: 'conferencia',
		modalidad: 'presencial',
		fechaHoraInicio: '',
		fechaHoraFin: '',
		lugar: '',
		linkOnline: '',
		categoria: '',
		capacidadAsistentes: '',
		precio: '',
	});

	const [estadoCarga, setestadoCarga] = useState(false);
	const [error, setError] = useState('');
	const [enviadoCorrectamente, setenviadoCorrectamente] = useState(false);

	const actualizacionCampo = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const nuevoEvento = async (e) => {
		e.preventDefault();
		setestadoCarga(true);
		setError('');
		setenviadoCorrectamente(false);

		try {
			const camposRequeridos = [
				'nombre',
				'descripcion',
				'tipo',
				'modalidad',
				'fechaHoraInicio',
				'fechaHoraFin',
				'categoria',
			];
			for (const campoUnitario of camposRequeridos) {
				if (!formData[campoUnitario]) {
					throw new Error(`El campo ${campoUnitario} es requerido`);
				}
			}

			if (
				(formData.modalidad === 'presencial' ||
					formData.modalidad === 'hibrido') &&
				!formData.lugar
			) {
				throw new Error(
					'El lugar es requerido para eventos presenciales o híbridos'
				);
			}

			if (
				(formData.modalidad === 'virtual' ||
					formData.modalidad === 'hibrido') &&
				!formData.linkOnline
			) {
				throw new Error(
					'El link online es requerido para eventos virtuales o híbridos'
				);
			}

			const eventData = {
				...formData,
				capacidadAsistentes: parseInt(formData.capacidadAsistentes, 10) || 0,
				precio: parseFloat(formData.precio) || 0,
				createdAt: new Date(),
			};

			const docRef = await addDoc(collection(db, 'eventos'), eventData);
			// Guardar evento en Firestore, en la colección 'eventos'
			setenviadoCorrectamente(true);
			setFormData({
				nombre: '',
				descripcion: '',
				organizadorId: '',
				tipo: 'conferencia',
				modalidad: 'presencial',
				fechaHoraInicio: '',
				fechaHoraFin: '',
				lugar: '',
				linkOnline: '',
				categoria: '',
				capacidadAsistentes: '',
				precio: '',
			});
		} catch (err) {
			setError(err.message);
		} finally {
			setestadoCarga(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-6">Crear Nuevo Evento</h2>

			{error && (
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
					{error}
				</div>
			)}

			{enviadoCorrectamente && (
				<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
					Evento creado exitosamente
				</div>
			)}

			<form onSubmit={nuevoEvento} className="space-y-4">
				<div>
					<label className="block text-sm font-medium mb-1">Nombre</label>
					<input
						type="text"
						name="nombre"
						value={formData.nombre}
						onChange={actualizacionCampo}
						className="w-full border rounded p-2"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">Descripción</label>
					<textarea
						name="descripcion"
						value={formData.descripcion}
						onChange={actualizacionCampo}
						className="w-full border rounded p-2"
						rows="4"
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-sm font-medium mb-1">
							Tipo de Evento
						</label>
						<select
							name="tipo"
							value={formData.tipo}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2">
							{EVENTOS_VALIDOS.map((type) => (
								<option key={type.id} value={type.id}>
									{type.label}
								</option>
							))}
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Modalidad</label>
						<select
							name="modalidad"
							value={formData.modalidad}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2">
							{MODALIDADES.map((modalidad) => (
								<option key={modalidad.id} value={modalidad.id}>
									{modalidad.label}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-sm font-medium mb-1">
							Fecha y hora de inicio
						</label>
						<input
							type="datetime-local"
							name="fechaHoraInicio"
							value={formData.fechaHoraInicio}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Fecha y hora de fin
						</label>
						<input
							type="datetime-local"
							name="fechaHoraFin"
							value={formData.fechaHoraFin}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2"
						/>
					</div>
				</div>

				{(formData.modalidad === 'presencial' ||
					formData.modalidad === 'hibrido') && (
					<div>
						<label className="block text-sm font-medium mb-1">Lugar</label>
						<input
							type="text"
							name="lugar"
							value={formData.lugar}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2"
						/>
					</div>
				)}

				{(formData.modalidad === 'virtual' ||
					formData.modalidad === 'hibrido') && (
					<div>
						<label className="block text-sm font-medium mb-1">
							Link Online
						</label>
						<input
							type="url"
							name="linkOnline"
							value={formData.linkOnline}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2"
						/>
					</div>
				)}

				<div>
					<label className="block text-sm font-medium mb-1">Categoría</label>
					<input
						type="text"
						name="categoria"
						value={formData.categoria}
						onChange={actualizacionCampo}
						className="w-full border rounded p-2"
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-sm font-medium mb-1">
							Capacidad de asistentes
						</label>
						<input
							type="number"
							name="capacidadAsistentes"
							value={formData.capacidadAsistentes}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2"
							min="0"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Precio</label>
						<input
							type="number"
							name="precio"
							value={formData.precio}
							onChange={actualizacionCampo}
							className="w-full border rounded p-2"
							step="0.01"
							min="0"
						/>
					</div>
				</div>

				<button
					type="submit"
					disabled={estadoCarga}
					className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300">
					{estadoCarga ? 'Creando evento...' : 'Crear Evento'}
				</button>
			</form>
		</div>
	);
};

export default NuevoEvento;
