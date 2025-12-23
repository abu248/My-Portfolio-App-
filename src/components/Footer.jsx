import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>
          <motion.p
            className="text-gray-400 text-sm flex items-center space-x-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Developer</span>
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

