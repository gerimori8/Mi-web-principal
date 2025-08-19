import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Zap, Bot, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import FloatingParticles from '../3D/FloatingParticles'
import AnimatedGeometry from '../3D/AnimatedGeometry'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    { icon: Globe, text: 'Páginas Web', color: 'text-blue-500' },
    { icon: Bot, text: 'Chatbots IA', color: 'text-purple-500' },
    { icon: Zap, text: 'Automatizaciones', color: 'text-cyan-500' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 3D Background Elements */}
      <FloatingParticles />
      <AnimatedGeometry />
      
      {/* Interactive background gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)`
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
            <span className="text-lg font-medium text-gray-600 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              Innovación Digital con IA
            </span>
            <Sparkles className="w-8 h-8 text-yellow-500 ml-2" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              WebProDev
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Creamos{' '}
          <motion.span
            className="font-semibold text-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            páginas web modernas
          </motion.span>
          ,{' '}
          <motion.span
            className="font-semibold text-purple-600"
            whileHover={{ scale: 1.05 }}
          >
            chatbots inteligentes
          </motion.span>
          {' '}y{' '}
          <motion.span
            className="font-semibold text-cyan-600"
            whileHover={{ scale: 1.05 }}
          >
            automatizaciones con IA
          </motion.span>
          {' '}para impulsar tu negocio hacia el futuro
        </motion.p>

        {/* Service icons */}
        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.text}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.2 }}
            >
              <div className={`p-4 bg-white/80 rounded-full shadow-lg mb-2 ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-600">{service.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Comenzar Proyecto
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-full font-semibold text-lg bg-white/80 backdrop-blur-sm">
              Ver Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Descubre más</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-40"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full opacity-50"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  )
}

export default Hero

