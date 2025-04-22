'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'


const page = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let width = canvas.width = canvas.offsetWidth;
      let height = canvas.height = canvas.offsetHeight;
  
      const orbs = [];
      const orbCount = 30;
  
      function createOrbs() {
        for (let i = 0; i < orbCount; i++) {
          orbs.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: 5 + Math.random() * 15,
            dx: (Math.random() - 0.5) * 1,
            dy: (Math.random() - 0.5) * 1,
            color: `rgba(255,255,255,${0.1 + Math.random() * 0.3})`
          });
        }
      }
  
      function draw() {
        ctx.clearRect(0, 0, width, height);
        orbs.forEach(orb => {
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
          ctx.fillStyle = orb.color;
          ctx.fill();
  
          orb.x += orb.dx;
          orb.y += orb.dy;
  
          if (orb.x < -orb.radius) orb.x = width + orb.radius;
          if (orb.x > width + orb.radius) orb.x = -orb.radius;
          if (orb.y < -orb.radius) orb.y = height + orb.radius;
          if (orb.y > height + orb.radius) orb.y = -orb.radius;
        });
        requestAnimationFrame(draw);
      }
  
      createOrbs();
      draw();
  
      const handleResize = () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <section
      id="about"
      className="about-section cursor-[url('/cursor.svg'),auto] bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 py-16"
    >
      <div className="about-container container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="about-text text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 appear-slide-up">
            About Me
          </h2>
          <p className="text-base md:text-lg mb-6 appear-fade-in">
            I’m a passionate Frontend Developer with a BS in Software Engineering and experience crafting responsive, user-centric applications using React.js.
          </p>
          <p className="text-base md:text-lg mb-6 appear-fade-in delay-200">
            I love turning designs into pixel-perfect code, optimizing performance, and adding delightful animations to bring interfaces to life.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </Link>
        </div>

        {/* Canvas */}
        <div className="about-canvas-wrapper w-full flex justify-space">
          <canvas ref={canvasRef} className="w-full h-104 md:h-80 lg:h-96  bg-transparent" />
        </div>
      </div>

      <style jsx>{`
        .appear-slide-up { opacity: 0; transform: translateY(20px); animation: slideUp 0.8s ease-out forwards; }
        .appear-fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default page
