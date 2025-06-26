const About = () => {
	return (
		<div className="bg-white rounded-xl shadow-sm p-8">
			<h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre sho</h2>

			<div className="grid md:grid-cols-2 gap-8">
				<div className="space-y-4">
					<p className="text-gray-600 leading-relaxed">
						Dedicado a crear
						experiencias increíbles. Comencé desde el colegio,<br/>
						<strong>misión simple: hacer que la tecnología sea accesible para todos.</strong>
					</p>
					<p className="text-gray-600 leading-relaxed">
						Hoy, sirvo a muchos amigos ayudándolos a
						alcanzar sus objetivos a través de soporte
						dedicado.
					</p>
				</div>

				<div className="bg-gray-100 rounded-lg p-6">
					<h3 className="text-xl font-semibold text-gray-900 mb-4">
						Algunos Valores
					</h3>
					<ul className="space-y-3">
						{[
							'Innovación y Creatividad',
							'Aprendizaje Continuo',
							'Colaboración en Equipo',
						].map((value, index) => (
							<li key={index} className="flex items-center text-gray-700">
								<span className="mr-2">✓</span>
								{value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
