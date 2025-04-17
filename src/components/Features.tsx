
import { Check, Zap, Clock, Shield, Users, Layers } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-8 bg-gradient-to-br from-gray-50 to-tech-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Namrata Universal?</h2>
          <p className="text-lg text-gray-600">
            Our commitment to excellence, innovation, and client satisfaction sets us apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
            <div className="w-12 h-12 rounded-full bg-tech-100 flex items-center justify-center mb-4">
              <Zap size={24} className="text-tech-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">High-Performance Solutions</h3>
            <p className="text-gray-600">
              Our solutions are optimized for speed, scalability, and reliability to ensure maximum performance.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Check size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Assurance</h3>
            <p className="text-gray-600">
              Rigorous testing and quality control processes to deliver bug-free and reliable software.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
            <div className="w-12 h-12 rounded-full bg-tech-100 flex items-center justify-center mb-4">
              <Clock size={24} className="text-tech-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Timely Delivery</h3>
            <p className="text-gray-600">
              We respect deadlines and ensure that projects are completed on time without compromising quality.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Shield size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Security-First Approach</h3>
            <p className="text-gray-600">
              Security is integrated into every aspect of our development process to protect your data and systems.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
            <div className="w-12 h-12 rounded-full bg-tech-100 flex items-center justify-center mb-4">
              <Users size={24} className="text-tech-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Team</h3>
            <p className="text-gray-600">
              Our team consists of experienced professionals with expertise in various technology domains.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Layers size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Comprehensive Support</h3>
            <p className="text-gray-600">
              We provide ongoing support and maintenance to ensure your solutions continue to perform optimally.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-full mx-auto bg-[url(https://www.braintechnosys.com/wp-content/themes/braintechnosys/img/map.png)] bg-[#083456] bg-blend-multiply">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Approach to IT Excellence</h3>
              <p className="text-white mb-6">
                We follow a systematic and collaborative approach to ensure that our solutions precisely meet your business requirements and exceed your expectations.
              </p>
              <ul className="space-y-3">
                {[
                  'In-depth understanding of your business needs',
                  'Innovative and practical solutions',
                  'Transparent communication throughout the project',
                  'Continuous improvement and optimization',
                  'Long-term partnership and support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="mr-2 text-tech-600 flex-shrink-0 mt-1" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-tech-500 to-purple-500 rounded-xl p-1">
              <div className="bg-white rounded-lg  h-full">
                <div className="aspect-video rounded-md bg-gray-100  overflow-hidden flex items-center justify-center">
                  
                    <img className='' src='https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169840.jpg?t=st=1744870882~exp=1744874482~hmac=3adc244c042d070512055e0804d5e7d6d251e3a14510afbc4370d0a5aeaa788e&w=1380' alt='Feature Visualization'/>
                 
                </div>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
