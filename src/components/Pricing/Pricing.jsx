import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Pricing = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const plans = [
    {
      name: 'Básico',
      price: 299,
      period: 'mes',
      description: 'Perfecto para pequeños negocios que inician su transformación digital',
      icon: Shield,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
      popular: false,
      features: [
        'Sitio web responsive (hasta 5 páginas)',
        'Chatbot básico con respuestas predefinidas',
        'Formulario de contacto',
        'Optimización SEO básica',
        'Soporte por email',
        'Hosting incluido por 1 año',
        '1 revisión mensual'
      ]
    },
    {
      name: 'Profesional',
      price: 599,
      period: 'mes',
      description: 'La opción más popular para empresas que buscan crecimiento',
      icon: Star,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-600 to-purple-600',
      textColor: 'text-white',
      popular: true,
      features: [
        'Sitio web avanzado (hasta 15 páginas)',
        'Chatbot con IA conversacional',
        'Automatización de procesos básicos',
        'Integración con redes sociales',
        'Analytics y reportes',
        'Soporte prioritario 24/7',
        'Actualizaciones ilimitadas',
        'E-commerce básico incluido'
      ]
    },
    {
      name: 'Enterprise',
      price: 1299,
      period: 'mes',
      description: 'Solución completa para empresas que necesitan el máximo rendimiento',
      icon: Crown,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
      popular: false,
      features: [
        'Sitio web personalizado ilimitado',
        'IA avanzada con machine learning',
        'Automatizaciones complejas',
        'Integraciones con sistemas existentes',
        'Dashboard de analytics avanzado',
        'Soporte dedicado 24/7',
        'Consultoría estratégica mensual',
        'E-commerce avanzado',
        'API personalizada',
        'Backup y seguridad premium'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500" />
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
            Planes y Precios
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Elige el plan perfecto para tu negocio. Todos incluyen soporte técnico y actualizaciones
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'transform scale-105 ring-4 ring-blue-200' : ''
              } ${plan.bgColor}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Icon */}
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <plan.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold text-center mb-2 ${plan.textColor}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <motion.span
                  className={`text-5xl font-bold ${plan.textColor}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                >
                  ${plan.price}
                </motion.span>
                <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                  /{plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`text-center mb-8 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.2 + index * 0.2 + featureIndex * 0.1, duration: 0.5 }}
                    className={`flex items-start ${plan.textColor}`}
                  >
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.popular ? (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Comenzar Ahora
                    </>
                  ) : (
                    'Seleccionar Plan'
                  )}
                </Button>
              </motion.div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            ¿Necesitas algo personalizado? Contáctanos para un plan a medida
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Solicitar Cotización Personalizada
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

