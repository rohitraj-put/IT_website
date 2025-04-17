import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { TabsContent } from "@/components/ui/tabs";
import { FileCode } from 'lucide-react';


const services = [

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


const Services = () => {


  return (

    <section className=" bg-white dark:bg-gray-900">
      <div className="text-center max-w-3xl mx-auto mb-16 max-md:px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          We Provide The Best Service</h2>
        <p className="text-lg text-gray-600">
          Trusted by the world's best organizations, for 12 years and running, it has been delivering smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for all difficult IT problems to ensure high availability.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >

          <div className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              animate="animate"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;