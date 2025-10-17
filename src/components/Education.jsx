import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "10th Grade (SSC)",
      details: "89% - Sanskriti International School, Hyderabad (2020)",
    },
    {
      id: 2,
      title: "12th Grade (HSC)",
      details: "73% - Matoshri Junior College, Nashik (2023)",
    },
    {
      id: 3,
      title: "B.Tech in Computer Science",
      details: "CGPA: 8.7 - Pimpri Chinchwad University, Pune (2023–2027)",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-400"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-600 text-lg">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="text-center mt-16 text-gray-600 text-sm">
        © 2025 My Portfolio | Shravani Gite
      </footer>
    </section>
  );
};

export default Education;
