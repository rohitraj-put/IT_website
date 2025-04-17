
import { Server, Shield, Code2, Smartphone, Globe, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={28} className="text-tech-600" />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with the latest technologies and best practices.',
  },
  {
    icon: <Server size={28} className="text-tech-600" />,
    title: 'IT Infrastructure',
    description: 'Design, implementation, and management of scalable IT infrastructure to support your business operations.',
  },
  {
    icon: <Shield size={28} className="text-tech-600" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your data and systems from cyber threats and vulnerabilities.',
  },
  {
    icon: <Smartphone size={28} className="text-tech-600" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications designed for an exceptional user experience.',
  },
  {
    icon: <Globe size={28} className="text-tech-600" />,
    title: 'Web Development',
    description: 'Responsive and user-friendly web applications with modern frameworks and technologies.',
  },
  {
    icon: <LineChart size={28} className="text-tech-600" />,
    title: 'Business Intelligence',
    description: 'Data analysis and visualization tools to help you make informed business decisions.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive IT Services</h2>
          <p className="text-lg text-gray-600">
            We provide a wide range of IT services to help businesses leverage technology effectively and stay ahead in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-tech-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-tech-50 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
