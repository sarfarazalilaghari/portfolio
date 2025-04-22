import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <>
    

  {/* <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
  <div class="text-center max-w-3xl space-y-6 animate-fade-in-up">
    <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
      👋 Hi, I'm <span class="text-blue-500">Your Name</span>
    </h1>
    <p class="text-lg text-gray-300 leading-relaxed">
      I’m a creative Front-End Developer who builds elegant, high-performing web experiences with modern technologies.
    </p>
    <div class="flex justify-center gap-4">
      <a href="#projects" class="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-xl shadow-lg text-white text-base font-medium">
        View Projects
      </a>
      <a href="#contact" class="bg-white text-gray-900 hover:bg-gray-200 transition duration-300 px-6 py-3 rounded-xl shadow-lg font-medium">
        Contact Me
      </a>
    </div>
  </div>
</section> */}
 <section className="hero-section">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I&apos;m <span className="hero-highlight">SARFARAZ ALI</span>
          </h1>
          <p className="hero-subtitle">
            I build interactive UIs with React.js and sprinkle a bit of magic ✨
          </p>
          <Link href="/contact" className="hero-cta">
            Get in Touch
          </Link>
        </div>

        {/* Hero Image */}
      
        <Image className='rounded-full'
        src="/profile-removebg-preview.png"
        width={400}
        height={40}
        alt='profile picture'
        />
        
      </div>

      {/* Magical Orbs */}
      <div className="hero-orbs">
        <span className="orb orb--pos1 orb--bounce-slow" />
        <span className="orb orb--pos2 orb--spin-slow" />
        <span className="orb orb--pos3 orb--bounce-slower" />
        <span className="orb orb--pos4 orb--spin-slower" />
      </div>
    </section>

</>

  
  )
}

export default page
