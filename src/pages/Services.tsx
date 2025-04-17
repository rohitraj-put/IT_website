import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import {
  Globe, Code, ShoppingBag, Smartphone, Palette, BarChart3, FileCode, Building
} from 'lucide-react';

// Define services data for each category
const services = {
  webDesign: [
    {
      icon: <Globe className="h-8 w-8 text-tech-600" />,
      title: "E-commerce Website",
      description: "Custom e-commerce solutions that drive sales and growth with seamless user experience and secure payment processing."
    },
    {
      icon: <Globe className="h-8 w-8 text-tech-600" />,
      title: "Informative Website",
      description: "Content-rich, well-structured websites that effectively communicate your brand message and values to your audience."
    },
    {
      icon: <Globe className="h-8 w-8 text-tech-600" />,
      title: "Dynamic Website",
      description: "Interactive websites with database integration providing real-time content updates and user engagement features."
    },
    {
      icon: <Globe className="h-8 w-8 text-tech-600" />,
      title: "Static Website",
      description: "Fast-loading, cost-effective websites perfect for businesses needing a professional online presence without complex functionality."
    },
  ],
  portalDevelopment: [
    {
      icon: <ShoppingBag className="h-8 w-8 text-tech-600" />,
      title: "E-commerce Portal",
      description: "Get a unique and customized ecommerce portal service with modern tools and features."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-tech-600" />,
      title: "Sales Portal",
      description: "Easy to use sales portal designed as per your business and customers requirements."
    },
    {
      icon: <Building className="h-8 w-8 text-tech-600" />,
      title: "B2B Portal",
      description: "With extensive experience and knowledge, we develop B2B portals to growth and development to your business."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-tech-600" />,
      title: "B2C Portal",
      description: "Give your customers convenient shopping option by getting B2C portal to get more profits on your products."
    },
    {
      icon: <Building className="h-8 w-8 text-tech-600" />,
      title: "JOB Portal",
      description: "Design and develop portals for various industries and provide employment to your audience."
    },
    {
      icon: <Building className="h-8 w-8 text-tech-600" />,
      title: "Dating Portal",
      description: "Help people find real partners by getting a dating portal designed and developed at low budget."
    },
    {
      icon: <Globe className="h-8 w-8 text-tech-600" />,
      title: "Travel Portal",
      description: "Assist your audience explore the world through travel portal with assured satisfaction."
    },
    {
      icon: <Building className="h-8 w-8 text-tech-600" />,
      title: "Government Portal",
      description: "The best company in designing and developing government portals with its greatest knowledge."
    },
  ],
  appDesigning: [
    {
      icon: <Smartphone className="h-8 w-8 text-tech-600" />,
      title: "Android App",
      description: "Custom Android applications that leverage the latest platform features and provide excellent user experiences."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-tech-600" />,
      title: "IOS App",
      description: "Premium iOS applications designed with Apple's design principles and optimized for performance."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-tech-600" />,
      title: "Mobile App",
      description: "Cross-platform mobile applications that work seamlessly across different devices and operating systems."
    },
    {
      icon: <Code className="h-8 w-8 text-tech-600" />,
      title: "Web App",
      description: "Progressive web applications that combine the best of web and mobile app functionality."
    },
  ],
  graphicDesigning: [
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Logo",
      description: "Professional logo design that represents your brand identity and makes you stand out from the competition."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Banner",
      description: "Eye-catching banner designs with innovative ideas and tools to impress your audience."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Video",
      description: "Customizing and editing videos through graphic design with 100% positive outcomes."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Brochure",
      description: "Professional brochure designs that effectively communicate your brand message and offerings."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Portfolio",
      description: "Attractive and efficient portfolio designs to introduce yourself or your business in an effective manner."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Business Card",
      description: "Eye-catching business cards that leave a lasting impression on your clients and colleagues."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Poster",
      description: "Poster design services for various kinds of businesses with extensive knowledge of marketing."
    },
    {
      icon: <Palette className="h-8 w-8 text-tech-600" />,
      title: "Product Design",
      description: "Product design services with vast experience, understanding the requirements of customers and consumers."
    },
  ],
  digitalMarketing: [
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Digital Marketing",
      description: "Get your business digitalized through digital marketing. We will help your business grow."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "SEO",
      description: "Bring your website to the top of the search engine result page and give new height to your business."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Website Ads",
      description: "Create website ads to promote your products and services and spread your business online."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Google Ads",
      description: "Reach target audience to grow your business with cost efficiency and less effort."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Social Media Marketing",
      description: "Promote your business through SMM by the means of social media platforms."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Pay Per Click",
      description: "Get 100% guaranteed growth in your online business through pay per click and increase sales."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Facebook/Youtube Ads",
      description: "Promote your products and services through FB and YouTube ads and reach target audience."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-tech-600" />,
      title: "Affiliate Marketing",
      description: "Strengthen business through affiliate marketing. We will help you to win business world with affiliate marketing."
    },
  ],
  softwareDevelopment: [
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "CRM Software",
      description: "Get your CRM software developed with modern technology and tools in order to meet your business needs."
    },
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "SAP Software",
      description: "Get world class SAP software development services with highly standard technology to gain control over your business."
    },
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "ERP Software",
      description: "Give growth to your business with excellent Enterprise Resource Planning (ERP) services in your budget."
    },
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "Billing Software",
      description: "Track your products and services by getting custom billing software services and solutions with extensive experience."
    },
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "Hospital Management Software",
      description: "High quality Hospital Management software development tailored services to track and manage administrative processes."
    },
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "Application Management Software",
      description: "Comprehensive Application Management Software development services with years of experienced developers."
    },
    {
      icon: <FileCode className="h-8 w-8 text-tech-600" />,
      title: "Multimedia Software",
      description: "Be assured of high level of satisfaction in multimedia software development services and unique solution."
    },
  ]
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("webDesign");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-tech-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-600 to-purple-600">
              Complete IT Solutions Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Nationwide Service, Local Expertise — Offering The Latest Software And Solutions To Our Customers!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Tabs Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs defaultValue="webDesign" className="w-full" onValueChange={setActiveTab}>
              <div className="overflow-x-auto pb-4">
                <TabsList className="h-auto p-2 bg-gray-100 dark:bg-gray-800 rounded-lg inline-flex flex-nowrap min-w-full md:flex md:justify-center">
                  <TabsTrigger value="webDesign" className="py-2 px-4 text-sm md:text-base">
                    <Globe className="mr-2 h-4 w-4" />
                    Website Design
                  </TabsTrigger>
                  <TabsTrigger value="portalDevelopment" className="py-2 px-4 text-sm md:text-base">
                    <Building className="mr-2 h-4 w-4" />
                    Portal Development
                  </TabsTrigger>
                  <TabsTrigger value="appDesigning" className="py-2 px-4 text-sm md:text-base">
                    <Smartphone className="mr-2 h-4 w-4" />
                    App Design
                  </TabsTrigger>
                  <TabsTrigger value="graphicDesigning" className="py-2 px-4 text-sm md:text-base">
                    <Palette className="mr-2 h-4 w-4" />
                    Graphic Design
                  </TabsTrigger>
                  <TabsTrigger value="digitalMarketing" className="py-2 px-4 text-sm md:text-base">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Digital Marketing
                  </TabsTrigger>
                  <TabsTrigger value="softwareDevelopment" className="py-2 px-4 text-sm md:text-base">
                    <FileCode className="mr-2 h-4 w-4" />
                    Software Development
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="webDesign" className="mt-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {services.webDesign.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={index} 
                    />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="portalDevelopment" className="mt-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {services.portalDevelopment.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={index} 
                    />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="appDesigning" className="mt-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {services.appDesigning.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={index} 
                    />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="graphicDesigning" className="mt-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {services.graphicDesigning.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={index} 
                    />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="digitalMarketing" className="mt-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {services.digitalMarketing.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={index} 
                    />
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="softwareDevelopment" className="mt-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {services.softwareDevelopment.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      delay={index} 
                    />
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-tech-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our IT solutions can help your organization thrive in the digital era.
            </p>
            <motion.button 
              className="px-6 py-3 bg-white text-tech-600 rounded-md font-medium hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;