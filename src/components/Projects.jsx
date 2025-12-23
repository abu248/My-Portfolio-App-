import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: '📋',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      tags: ['React', 'API Integration', 'Charts.js'],
      image: '🌤️',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with real-time metrics, engagement tracking, and content scheduling.',
      tags: ['Next.js', 'TypeScript', 'GraphQL'],
      image: '📊',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Learning Management System',
      description:
        'An educational platform with course management, progress tracking, quizzes, and interactive learning modules.',
      tags: ['React', 'Django', 'PostgreSQL'],
      image: '🎓',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      image: '💼',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

