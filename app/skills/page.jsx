import React from 'react'

const page = () => {
   
const skills = [
    { name: 'HTML', level: 90, color: 'bg-red-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
    { name: 'React.js', level: 90, color: 'bg-yellow-500' },
    { name: 'Next.js', level: 75, color: 'bg-gray-900' },
    { name: 'Axios', level: 90, color: 'bg-blue-800' },
    { name: 'React Query', level: 80, color: 'bg-purple-600' },
    { name: 'Ant Design', level: 60, color: 'bg-gray-500' },
    { name: 'Responsive Design', level: 90, color: 'bg-green-500' },
    { name: 'Integration', level: 80, color: 'bg-indigo-500' },
    { name: 'React Libraries', level: 80, color: 'bg-pink-500' },
    { name: 'Backend', level: 50, color: 'bg-red-500' },
  ];
      
  return (
    // <section className="w-full px-4 py-6">
    //       <div className="text-center mb-8">
    //     <h2 className="text-3xl font-bold text-gray-900 mb-2">Skill Set</h2>
    //     <p className="text-gray-600 max-w-2xl mx-auto">
    //       A comprehensive overview of my technical proficiencies, showcasing the
    //       tools and technologies I excel at to build modern, responsive, and
    //       high-performance web applications.
    //     </p>
    //   </div>
    
    //   <div className="flex flex-wrap -mx-2">
        
    //     {skills.map((skill) => (
    //       <div key={skill.name} className="w-full sm:w-1/2 px-2 mb-6">
    //         {/* Label and percentage */}
    //         <div className="flex justify-between items-center mb-1">
    //           <span className="text-base font-medium text-gray-800">{skill.name}</span>
    //           <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
    //         </div>
    //         {/* Progress bar */}
    //         <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
    //           <div
    //             role="progressbar"
    //             className={`${skill.color} h-3 rounded-full`}
    //             style={{ width: `${skill.level}%` }}
    //             aria-valuenow={skill.level}
    //             aria-valuemin={0}
    //             aria-valuemax={100}
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
      
    // <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md border border-[#eee] mb-6">
    //   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    //     <div>
    //       <h3 className="text-xl font-semibold text-gray-800">
    //         Frontend Developer - HireBoard AI
    //       </h3>
    //       <p className="text-sm text-gray-500 mt-1">
    //         Next.js, React.js, Tailwind CSS, REST APIs
    //       </p>
    //     </div>
    //     <span className="text-sm text-indigo-600 mt-2 sm:mt-0">
    //       dec 2024 - feb 2025
    //     </span>
    //   </div>
    //   <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
    //     Contributed as a Frontend Developer at HireBoard AI, building dynamic and
    //     responsive interfaces using Next.js and React. Collaborated with the backend
    //     team for seamless API integration and delivered optimized, user-centric web
    //     features that enhanced the platform’s performance and usability.
    //   </p>
    // </div>
    // <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md border border-[#eee] mb-6">
    //   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    //     <div>
    //       <h3 className="text-xl font-semibold text-gray-800">
    //         Frontend Developer - Fiverr 
    //       </h3>
    //       <p className="text-sm text-gray-500 mt-1">
    //         React.js, HTML, CSS, JS, REST APIs
    //       </p>
    //     </div>
    //     <span className="text-sm text-indigo-600 mt-2 sm:mt-0">
    //       April 2023 - Jan 2025
    //     </span>
    //   </div>
    //   <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
    //     Contributed as a Frontend Developer at HireBoard AI, building dynamic and
    //     responsive interfaces using Next.js and React. Collaborated with the backend
    //     team for seamless API integration and delivered optimized, user-centric web
    //     features that enhanced the platform’s performance and usability.
    //   </p>
    // </div>
    // </section>
    <section className="w-full px-4 py-8 bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 ">
      {/* Skills Section */}
      <div className="text-center mb-6 transition-opacity duration-700 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skill Set</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical proficiencies, showcasing the tools and technologies I excel at to build modern, responsive, and high-performance web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-full transform transition duration-500 ease-in-out hover:scale-[1.01] animate-fade-up"
          >
            {/* Label and percentage */}
            <div className="flex justify-between items-center mb-1">
              <span className="text-base font-medium text-gray-800">{skill.name}</span>
              <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                role="progressbar"
                className={`${skill.color} h-3 rounded-full transition-all duration-700 ease-in-out`}
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="text-center mb-6 transition-opacity duration-700 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
      </div>

      <div className="space-y-6">
        {/* HireBoard AI */}
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md border border-[#eee] transform transition duration-500 ease-in-out hover:shadow-lg animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Frontend Developer - HireBoard AI
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Next.js, React.js, Tailwind CSS, REST APIs
              </p>
            </div>
            <span className="text-sm text-indigo-600 mt-2 sm:mt-0">
              Dec 2024 - Feb 2025
            </span>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
            Contributed as a Frontend Developer at HireBoard AI, building dynamic and responsive interfaces using Next.js and React. Collaborated with the backend team for seamless API integration and delivered optimized, user-centric web features that enhanced the platform’s performance and usability.
          </p>
        </div>

        {/* Fiverr */}
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md border border-[#eee] transform transition duration-500 ease-in-out hover:shadow-lg animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Frontend Developer - Fiverr
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                React.js, HTML, CSS, JS, REST APIs
              </p>
            </div>
            <span className="text-sm text-indigo-600 mt-2 sm:mt-0">
              Apr 2023 - Jan 2025
            </span>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
            Delivered multiple frontend projects on Fiverr, converting Figma designs into responsive React applications, integrating RESTful APIs, and optimizing performance for various client requirements.
          </p>
        </div>
      </div>
    </section>

  )
}

export default page
