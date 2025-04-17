import { Button } from '@/components/ui/button';
import { ArrowRight, Code, BarChart2, Database } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'; // Import the typing animation library

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-[50px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br  from-tech-200 to-purple-200 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gradient-to-r from-purple-300/30 to-tech-300/30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-tech-300/20 to-purple-300/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 sm:pb-20 lg:pt-24 lg:pb-24 relative z-10 bg-[url(https://www.braintechnosys.com/wp-content/themes/braintechnosys/img/bannerbg.png)] bg-top ">
        <div className="text-center max-w-4xl mx-auto ">
          <div className="inline-flex items-center px-4 max-md:px-2 py-1.5 rounded-full bg-white/80 shadow-sm backdrop-blur-sm mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-tech-500 animate-pulse mr-2 "></span>
            <span className="text-sm font-medium text-gray-800">
              Transforming businesses with cutting-edge technology
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-4 lg:text-6xl font-bold tracking-tight text-gray-900 ">
            Innovative IT Solutions for the 
            
          </h1>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-600 to-purple-600 text-4xl md:text-5xl font-bold">
            <Typewriter
              words={['Digital Age', 'Modern World', 'Next Generation']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          
          <p className="text-xl text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
            We help businesses transform, grow, and succeed in the digital landscape with our comprehensive IT services and cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-tech-600 hover:bg-tech-700 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-tech-200 hover:bg-tech-50">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-100 text-tech-600 mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
            <p className="text-gray-600">Tailored software solutions designed to meet your specific business requirements.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-4">
              <BarChart2 size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-600">Turn your data into actionable insights with our advanced analytics solutions.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-100 text-tech-600 mb-4">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">Scalable and secure cloud infrastructure to power your business applications.</p>
          </div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;