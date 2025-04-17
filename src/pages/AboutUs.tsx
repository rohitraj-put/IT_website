
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Card,
  CardContent 
} from "@/components/ui/card";
import { 
  Award, 
  Users, 
  History, 
  Rocket, 
  Target
} from "lucide-react";
import OurTeam from '@/components/OurTeam';

const AboutUs = () => {
  // Company timeline data
  const timeline = [
    {
      year: '2013',
      title: 'Founded',
      description: 'Namrata Universal was established with a vision to transform how businesses leverage technology.'
    },
    {
      year: '2015',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, marking the beginning of our growth journey.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in three new countries to better serve our international clients.'
    },
    {
      year: '2021',
      title: 'Innovation Lab',
      description: 'Launched our Innovation Lab to research cutting-edge AI and blockchain solutions.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards for our innovative tech solutions and client service.'
    },
  ];

  // Values data
  const values = [
    {
      icon: <Target className="h-12 w-12 text-tech-600" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="h-12 w-12 text-tech-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both within our company and with our clients.'
    },
    {
      icon: <Award className="h-12 w-12 text-tech-600" />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.'
    },
    {
      icon: <Rocket className="h-12 w-12 text-tech-600" />,
      title: 'Impact',
      description: 'We measure our success by the positive impact our solutions have on our clients businesses.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-tech-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-600 to-purple-600">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              We're a team of passionate technologists on a mission to help businesses harness the full potential of technology.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-tech-600 flex items-center">
                  <Rocket className="mr-2 h-6 w-6" /> Our Mission
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  At Namrata Universal, our mission is to empower organizations to achieve their business goals through innovative technology solutions that drive growth, efficiency, and competitive advantage. We are dedicated to delivering exceptional value, fostering long-term partnerships, and contributing to our clients' success in an increasingly digital world.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center">
                  <Target className="mr-2 h-6 w-6" /> Our Vision
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We envision a world where technology serves as an enabler for businesses of all sizes to reach their full potential. Our vision is to be recognized globally as a trusted technology partner that consistently delivers innovative, high-quality solutions that transform businesses and make a positive impact on society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16  dark:bg-gray-800 bg-gradient-to-br  from-tech-200 to-purple-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Journey</h2>
            <div className="relative max-w-4xl mx-auto ">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-500 dark:bg-gray-700"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 ">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2"></div>
                    <div className="z-10 flex flex-col items-center">
                      <div className="bg-tech-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
                        {item.year}
                      </div>
                    </div>
                    <Card className={`w-1/2 transform ${index % 2 === 0 ? '-translate-x-4' : 'translate-x-4'}`}>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-tech-600">{item.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <OurTeam/>
      </main>

    </div>
  );
}

export default AboutUs