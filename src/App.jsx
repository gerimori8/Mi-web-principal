import Layout from './components/Layout/Layout'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import './App.css'

function App() {
  return (
    <Layout>
      {/* Hero Section with 3D animations */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Pricing Section */}
      <Pricing />

      {/* Case Studies Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Casos de Uso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">E-commerce Automatizado</h3>
              <p className="text-gray-600 mb-4">Incremento del 300% en conversiones con chatbot IA</p>
              <div className="text-blue-600 font-semibold">+300% conversiones</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Atención al Cliente 24/7</h3>
              <p className="text-gray-600 mb-4">Reducción del 80% en tiempo de respuesta</p>
              <div className="text-purple-600 font-semibold">-80% tiempo respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">TechStore</h3>
                <p className="text-gray-600">E-commerce con IA</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">HealthBot</h3>
                <p className="text-gray-600">Chatbot médico</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-400 to-cyan-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AutoFlow</h3>
                <p className="text-gray-600">Sistema de automatización</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos y descubre cómo podemos transformar tu negocio con IA
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Comenzar Proyecto
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default App

