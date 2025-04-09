import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-14">
        <div className="flex flex-col md:flex-row items-center">
          <div ref={heroRef} className="w-full md:w-1/2 opacity-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              Hello I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">Ramjan Khan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Frontend Developer crafting delightful digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              >
                Contact Me
              </a>
              <img 
                src="https://th.bing.com/th/id/R.377e208c7244a80df5983fd6efe71276?rik=Q8xlwlyzrFSVaw&riu=http%3a%2f%2fnick.mtvnimages.com%2fnick%2fproperties%2foggy-and-the-cockroaches%2fcharacter-web-desktop-oggy-oggy.png%3fquality%3d0.75&ehk=bMa0oxxhF4pn5mj6S41qrr7ko4f8iIQqB9yhJvcDcRQ%3d&risl=&pid=ImgRaw&r=0" 
                alt="Doraemon" 
                className="absolute -bottom-10 right-4 hidden md:block w-32 animate-bounce z-10"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full absolute top-0 left-0 filter blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="/images/heroImg-min.png" 
                alt="Coding illustration" 
                className="relative z-10 rounded-lg drop-shadow-2xl animate-float max-w-full h-auto"
              />
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-float delay-500"></div>
    </section>
  );
};

export default Hero;