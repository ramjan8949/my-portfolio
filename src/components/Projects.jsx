import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Fixitgoservices',
      description: 'A responsive service booking platform for home services with real-time tracking and payment integration.',
      image: '/images/fixitgo.png',
      category: 'react',
      technologies: ['React js', 'Tailwind CSS', 'Firebase','Node.js'],
      liveLink: 'https://fixitgoservices.com/',
      githubLink: '/',
    },
    {
      id: 2,
      title: 'vibeecart ',
      description: 'VibeeCart is a modern e-commerce website designed for fashion lovers. It offers a wide collection of trendy and stylish clothing for men, women, and kids, ensuring you find the perfect outfit for any occasion.',
      image: '/images/vibeecart.png',
      category: 'react',
      technologies: ['React js', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://vibeecart.netlify.app/',
      githubLink: 'https://github.com/ramjan8949/vibe-cart',
    },
    {
      id: 3,
      title: 'DailyDrive',
      description: 'DailyyDrive is a simple and efficient task management website that helps you stay organized and productive. Whether you need to manage daily tasks, work projects, or personal goals, DailyyDrive makes it easy to add, track, and complete your tasks effortlessly.',
      image: '/images/dailyydrive.png',
      category: 'javascript',
      technologies: ['HTML' , 'CSS' , 'Javascript'],
      liveLink: 'https://dailyydrive.netlify.app/',
      githubLink: 'https://github.com/ramjan8949/DailyDrive',
    },
    {
      id: 4,
      title: 'my Portfolio',
      description: 'make the portfolio using react js and tailwind css to atractive design and responsive ui.',
      image: '/images/portfolio.png',
      category: 'react',
      technologies: ['React js', 'Tailwind CSS'],
      liveLink: '/',
      githubLink: 'https://github.com/ramjan8949/my-portfolio',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Check out some of my recent work that showcases my skills and expertise
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'react', 'javascript'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
  <div className="p-6 w-full">
    <div className="flex gap-4 mb-4">
      <a 
        href={project.liveLink} 
        className="bg-white text-gray-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={18} />
      </a>
      <a 
        href={project.githubLink} 
        className="bg-white text-gray-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={18} />
      </a>
    </div>
  </div>
</div>

              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <img 
        src="https://static.tvtropes.org/pmwiki/pub/images/shin_chan_1.png" 
        alt="Shin Chan" 
        className="absolute bottom-10 right-10 w-24  animate-wiggle z-20"
      />
      <div className="absolute top-20 left-10 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-float"></div>
    </section>
  );
};

export default Projects;