import { motion } from 'framer-motion'
import { Globe, Bot, Zap, Code, Smartphone, ShoppingCart, Brain, Workflow, BarChart3 } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Services = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const services = [
    {
      icon: Globe,
      title: 'Páginas Web',
      description: 'Sitios web modernos, responsive y optimizados para SEO',
      features: ['Diseño Responsive', 'Optimización SEO', 'Carga Rápida', 'UX/UI Profesional'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Bot,
      title: 'Chatbots IA',
      description: 'Chatbots inteligentes para automatizar atención al cliente',
      features: ['IA Conversacional', 'Integración WhatsApp', 'Análisis Sentimientos', 'Soporte 24/7'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Procesos automatizados con inteligencia artificial',
      features: ['Workflows Inteligentes', 'Procesamiento Docs', 'Integración APIs', 'Análisis Automático'],
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100'
    }
  ]

  const additionalServices = [
    { icon: Code, title: 'Desarrollo Web', description: 'Aplicaciones web personalizadas' },
    { icon: Smartphone, title: 'Apps Móviles', description: 'Aplicaciones nativas y PWA' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Tiendas online completas' },
    { icon: Brain, title: 'Machine Learning', description: 'Modelos de IA personalizados' },
    { icon: Workflow, title: 'Integración APIs', description: 'Conecta todos tus sistemas' },
    { icon: BarChart3, title: 'Analytics', description: 'Análisis de datos avanzado' }
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Soluciones tecnológicas innovadoras que transforman tu negocio con el poder de la inteligencia artificial
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.bgColor} shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1, duration: 0.5 }}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Servicios Adicionales</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <service.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-2 text-gray-800">{service.title}</h4>
                <p className="text-xs text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Solicitar Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

