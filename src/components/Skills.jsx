import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
                { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
                { name: 'TypeScript', level: 80, color: 'from-blue-400 to-blue-600' },
                { name: 'HTML/CSS', level: 95, color: 'from-pink-400 to-red-500' },
                { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
                { name: 'Vue.js', level: 75, color: 'from-green-400 to-green-600' },
            ],
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
                { name: 'Python', level: 80, color: 'from-yellow-400 to-blue-500' },
                { name: 'Express', level: 85, color: 'from-gray-400 to-gray-600' },
                { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-600' },
                { name: 'PostgreSQL', level: 70, color: 'from-blue-400 to-indigo-600' },
                { name: 'REST API', level: 90, color: 'from-purple-400 to-pink-500' },
            ],
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90, color: 'from-orange-400 to-red-500' },
                { name: 'Docker', level: 70, color: 'from-blue-400 to-cyan-500' },
                { name: 'AWS', level: 65, color: 'from-orange-400 to-yellow-500' },
                { name: 'Figma', level: 80, color: 'from-purple-400 to-pink-500' },
                { name: 'VS Code', level: 95, color: 'from-blue-400 to-blue-600' },
                { name: 'Agile/Scrum', level: 85, color: 'from-green-400 to-teal-500' },
            ],
        },
    ]

    return (
        <section id="skills" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Skills & Technologies</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="glass rounded-2xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                                {category.category}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-medium">{skill.name}</span>
                                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

