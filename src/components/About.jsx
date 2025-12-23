import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa'

const About = () => {
    const features = [
        {
            icon: FaCode,
            title: 'Clean Code',
            description: 'Writing maintainable and scalable code following best practices and design patterns.',
        },
        {
            icon: FaPalette,
            title: 'Beautiful Design',
            description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.',
        },
        {
            icon: FaRocket,
            title: 'Fast Performance',
            description: 'Optimizing applications for speed and efficiency to deliver seamless experiences.',
        },
    ]

    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Get to know more about me, my background, and what I'm passionate about
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                I'm a passionate full-stack developer with a keen eye for design and a love for
                                creating exceptional digital experiences. With expertise in modern web technologies,
                                I bring ideas to life through clean code and innovative solutions.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                My journey in web development started with curiosity and has evolved into a career
                                focused on building applications that make a difference. I enjoy tackling complex
                                problems and turning them into simple, beautiful solutions.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="glass rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                            <div className="text-gray-400">Years Experience</div>
                        </div>
                        <div className="glass rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-gray-400">Projects Completed</div>
                        </div>
                        <div className="glass rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                            <div className="text-gray-400">Happy Clients</div>
                        </div>
                        <div className="glass rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                            <div className="text-gray-400">Awards Won</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="glass rounded-xl p-8 text-center hover:bg-white/10 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
                                <feature.icon className="text-2xl text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About

