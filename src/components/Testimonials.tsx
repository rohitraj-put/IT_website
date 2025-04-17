
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ClientCard from './ClientCard';

const testimonials = [
  {
    content: "Namrata Universal transformed our business with their custom software solution. They understood our requirements perfectly and delivered a high-quality product that exceeded our expectations.",
    author: "John Smith",
    position: "CEO, Global Retail Solutions",
    rating: 5,
  },
  {
    content: "Working with Namrata Universal has been a game-changer for our company. Their team is highly skilled, responsive, and dedicated to delivering excellent results.",
    author: "Emily Johnson",
    position: "CTO, FinTech Innovations",
    rating: 5,
  },
  {
    content: "The cybersecurity solutions implemented by Namrata Universal have significantly enhanced our data protection capabilities. Their expertise in this domain is unmatched.",
    author: "Michael Brown",
    position: "IT Director, Healthcare Systems",
    rating: 5,
  },
  {
    content: "Namrata Universal's web development team created a beautiful and functional website that perfectly represents our brand. The project was delivered on time and within budget.",
    author: "Sarah Williams",
    position: "Marketing Head, Creative Industries",
    rating: 5,
  },
];

const clientCards = [

  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-8.jpg"
  }
  , {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-9.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-10.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-14.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-13.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-18.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-17.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-19.jpeg"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-20.jpg"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-22.png"
  },
  {
      name: "SAP",
      logo: "https://jingleholidaybazar.com/images/mainlogo.gif"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-25.jpeg"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-26.png"
  },
  {
      name: "Google",
      logo: "https://namratauniversal.com/img/client-16.png"
  },
  {
      name: "LinkedIn",
      logo: "https://namratauniversal.com/img/client-23.png"
  },
  {
      name: "Yahoo",
      logo: "https://namratauniversal.com/img/client-15.png"
  },
  {
      name: "Amazon",
      logo: "https://namratauniversal.com/img/client-5.jpg"
  },
  {
      name: "Netflix",
      logo: "https://namratauniversal.com/img/client-6.jpg"
  },
  {
      name: "Mac OS",
      logo: "https://namratauniversal.com/img/client-1.jpg"
  },
  , {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-21.png"
  },
  {
      name: "Dell",
      logo: "https://namratauniversal.com/img/client-2.jpg"
  },
  {
      name: "HP",
      logo: "https://namratauniversal.com/img/client-3.jpg"
  },
  {
      name: "IBM",
      logo: "https://namratauniversal.com/img/client-11.png"
  },
  {
      name: "SAP",
      logo: "https://namratauniversal.com/img/client-12.png"
  }

];


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-tech-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            {/* Quote icon */}
            <div className="absolute -top-5 -left-2 text-tech-200">
              <svg width="40" height="40" viewBox="0 0 95 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7912 77.5C12.075 77.5 8.10052 75.9688 4.86784 72.9062C1.63517 69.7188 0.0188389 65.2188 0.0188389 59.4062C0.0188389 55.0312 0.956047 50.5938 2.83047 46.0938C4.7049 41.5938 7.30656 37.3125 10.6345 33.25C13.9624 29.0625 17.7912 25.2812 22.1206 21.9062C26.5209 18.5312 30.9345 15.8125 35.3633 13.75L43.6599 25.75C39.3986 27.8125 35.3851 30.4375 31.6196 33.625C27.9223 36.7725 25.0929 40.9693 23.1315 46.2154C25.5639 46.3654 27.8555 47.1029 29.7623 48.4841C31.7246 49.9024 33.2819 51.7587 34.2878 53.8729C35.3446 56.0668 35.834 58.4605 35.7152 60.8597C35.675 68.2666 29.6209 77.5 16.7912 77.5ZM74.3522 77.5C69.636 77.5 65.6615 75.9688 62.4288 72.9062C59.1962 69.7188 57.5798 65.2188 57.5798 59.4062C57.5798 55.0312 58.517 50.5938 60.3915 46.0938C62.2659 41.5938 64.8676 37.3125 68.1955 33.25C71.5234 29.0625 75.3522 25.2812 79.6816 21.9062C84.082 18.5312 88.4955 15.8125 92.9243 13.75L101.221 25.75C96.9595 27.8125 92.9461 30.4375 89.1806 33.625C85.4833 36.7725 82.6539 40.9693 80.6925 46.2154C83.1249 46.3654 85.4165 47.1029 87.3233 48.4841C89.2856 49.9024 90.8429 51.7587 91.8489 53.8729C92.9056 56.0668 93.395 58.4605 93.2762 60.8597C93.236 68.2666 87.1819 77.5 74.3522 77.5Z" fill="currentColor" fillOpacity="0.2"/>
              </svg>
            </div>
            
            {/* Testimonial content */}
            <div className="mb-6">
              <div className="flex mb-3">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-gray-700 italic mb-6">"{testimonials[activeIndex].content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-tech-50 hover:text-tech-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${activeIndex === index ? 'bg-tech-600' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-tech-50 hover:text-tech-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Client logos */}
          
        </div>
      </div>
      <ClientCard/>
    </section>
  );
};

export default Testimonials;
