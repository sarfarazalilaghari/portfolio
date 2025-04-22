'use client'
import Link from 'next/link';
import React from 'react'
import { projects } from '../data';
import Image from 'next/image';


const page = () => {


  return (
    <div>
     <section
      id="projects"
      className="projects-section cursor-[url('/cursor.svg'),auto] bg-gradient-to-br from-green-400 via-teal-500 to-blue-500  py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((proj, idx) => (
            <Link
              key={idx}
              href={`/projects/${proj.id}`}
              className="project-card bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:rotate-1 transition-transform duration-300"
            >
              <div className="relative">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={0}
                  height={0}
                  className="w-full h-48 object-cover"
                />
                <div className="overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-bg duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{proj.title}</h3>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`  
        .animate-fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
    </div>
  )
}

export default page
