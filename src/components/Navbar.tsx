
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white/95`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-600 to-purple-600">
             <img className='w-54 h-12' src='https://namratauniversal.com/img/mainlogo.png' alt='logo'/>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-tech-600 transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-700 hover:text-tech-600 transition-colors">
              Services
            </a>
            <a href="/about" className="text-gray-700 hover:text-tech-600 transition-colors">
              About
            </a>
            <a href="#features" className="text-gray-700 hover:text-tech-600 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-tech-600 transition-colors">
              Testimonials
            </a>
            <a href="/contact-us" className="text-gray-700 hover:text-tech-600 transition-colors">
              Contact
            </a>
            <Button className="bg-tech-600 hover:bg-tech-700">Get Started</Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-tech-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50">
              Services
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50">
              About
            </a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50">
              Features
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50">
              Testimonials
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-tech-600 hover:bg-tech-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
