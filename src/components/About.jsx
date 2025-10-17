import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            I'm a Computer Science student passionate about web development and creating 
            innovative solutions. I have experience in building full-stack applications 
            using modern technologies.
          </p>
          <p className="text-lg text-gray-700">
            Currently, I'm working on various projects including agricultural platforms, 
            portfolio websites, and Python applications. I enjoy learning new technologies 
            and applying them to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
