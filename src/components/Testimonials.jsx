import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Babulal prajapat',
      role: 'CEO, Tantramaza technology',
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      text: 'Ramjan is an exceptional frontend developer who delivered our project ahead of schedule. His attention to detail and ability to translate our requirements into a beautiful interface was impressive.',
      rating: 5,
    },

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here's what my clients have to say about working with me
          </p>
        </div>
        
        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto opacity-0">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-orange-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-100 rounded-full opacity-50"></div>
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-100 rounded-full opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <img 
        src="https://www.nicepng.com/png/full/68-685400_doraemon-png.png" 
        alt="Doraemon" 
        className="absolute top-20 left-10 w-24  animate-float z-20"
      />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
    </section>
  );
};

export default Testimonials;