const Services = () => {
	const services = [
		{
			title: 'Desarrollo Web',
			description:
				'Sitios web y aplicaciones web personalizadas construidas con tecnologías modernas.',
			icon: '💻',
		},
		{
			title: 'Aplicaciones Móviles',
			description:
				'Aplicaciones móviles nativas y multiplataforma para iOS y Android.',
			icon: '📱',
		},
		{
			title: 'Soluciones en la Nube',
			description:
				'Infraestructura en la nube escalable y soluciones de despliegue.',
			icon: '☁️',
		},
		{
			title: 'Consultoría',
			description:
				'Asesoramiento experto en estrategia e implementación tecnológica.',
			icon: '🤝',
		},
	];

	return (
		<div className="space-y-8">
			<h2 className="text-3xl font-bold text-gray-900">Nuestros servicios</h2>

			<div className="grid md:grid-cols-2 gap-6">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-200">
						<div className="text-4xl mb-4">{service.icon}</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							{service.title}
						</h3>
						<p className="text-gray-600">{service.description}</p>
						<button className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium">
							Aprende más →
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
