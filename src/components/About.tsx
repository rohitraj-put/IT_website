
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '200+', label: 'Successful Projects' },
    { value: '50+', label: 'Expert Professionals' },
    { value: '95%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'David Wilson',
      role: 'Solutions Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are a team of passionate IT professionals dedicated to helping businesses harness the power of technology to achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h3>
            <p className="text-gray-600 mb-6">
            Trusted by the world's best organizations, for 12 years and running, it has been delivering smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for all difficult IT problems to ensure high availability.
            </p>
            <p className="text-gray-600 mb-6">
            Our biggest strength is our Global Reach. Our ability to cater to any business segments & needs. Our experience enables us create unique products. High volume of our work makes us provide value added services with wallet friendly charges. Strong ground support and extensive network keeps us always a step a head. We are always on Toes and this attitude has given us a strong presence in Indian Subcontinent.
            </p>
            <div className="flex gap-4">
              <Button className="bg-tech-600 hover:bg-tech-700">Our Services</Button>
              <Button variant="outline" className="border-tech-200 hover:bg-tech-50">Contact Us</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-500/20 to-purple-500/20 rounded-xl transform rotate-3"></div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <img className='w-full h-full object-cover' src='https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169851.jpg?ga=GA1.1.1288044525.1744868686&semt=ais_hybrid&w=740' alt='image_About'/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-tech-200 to-purple-200 p-4">
              <div className="text-4xl font-bold text-tech-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Team */}
    
      </div>
    </section>
  );
};

export default About;
