import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ isScrolled }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('#home')
                        }}
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.1 }}
                    >
                        Portfolio
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.name}
                                {activeSection === item.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-2 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${activeSection === item.href.slice(1)
                                    ? 'text-cyan-400 bg-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    )
}

export default Navbar

