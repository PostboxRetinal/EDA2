const Contact = () => {
	return (
		<div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
			<h2 className="text-3xl font-bold text-gray-900 mb-6">Contáctame</h2>

			<form className="space-y-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Nombre:
					</label>
					<input
						type="text"
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Tu nombre"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Correo Electrónico
					</label>
					<input
						type="email"
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						placeholder="tu@email.com"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Mensaje
					</label>
					<textarea
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						rows="4"
						placeholder="¿Cómo puedo ayudarte?"></textarea>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200">
					Enviar Mensaje
				</button>
			</form>
		</div>
	);
};

export default Contact;
