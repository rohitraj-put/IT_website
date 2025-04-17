import React from 'react'
import { 
    Card,
    CardContent 
  } from "@/components/ui/card";


function OurTeam() {
  return (
    <section className="py-16  dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO & Founder',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
                  bio: 'Sarah has 15+ years of experience in tech leadership and is passionate about innovation.'
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
                  bio: 'Michael leads our technical strategy and has a background in AI and cloud architecture.'
                },
                {
                  name: 'Priya Sharma',
                  role: 'Lead Developer',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
                  bio: 'Priya is an expert in full-stack development with a focus on scalable systems.'
                },
                {
                  name: 'David Wilson',
                  role: 'Solutions Architect',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
                  bio: 'David specializes in designing enterprise-level IT solutions for complex challenges.'
                }
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-sm transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                    <p className="text-tech-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  )
}

export default OurTeam