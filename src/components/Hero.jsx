import React from 'react';
import profileImg from '../assets/images/profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-16">
      <div className="text-center">
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-56 h-56 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Shravani Gite</h1>
        <p className="text-xl mb-6">Computer Science Student | Web Developer</p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            View My Work
          </a>
          <a 
            href="#" 
            download
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
