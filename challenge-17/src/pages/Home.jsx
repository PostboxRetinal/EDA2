import { useNavigate } from 'react-router-dom';

const Home = () => {
        const navigate = useNavigate();

        const handleContactClick = () => {
            navigate('/contact');
        };

        return (
            <div className="space-y-8">
                <section className="text-center py-16 bg-white rounded-xl shadow-sm">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Bienvenido
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Textico de prueba.<br/>Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                        Contactar
                    </button>
                </section>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        { title: 'Alto rendimiento', icon: '⚡' },
                        { title: 'Seguro', icon: '🔒' },
                        { title: 'Soporte 24/7', icon: '💬' },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition duration-200">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

export default Home;
