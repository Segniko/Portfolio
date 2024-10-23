import Image from 'next/image';

const techStack = [
  "C",
  "C++",
  "C#",
  "Java",
  "JavaScript",
  "Node.js",
  "Next.js",
  "React.js",
  "React Native",
  "Python",
  "SQL",
  "MongoDB",
  "Express",
  "TypeScript",
  "HTML",
  "CSS",
];

const TechStack = () => {
  return (
    <section className="text-white py-20 relative">
      <h1 className="heading text-center mb-12 text-5xl font-bold">
        <span className="text-purple">My Tech Stack</span>
      </h1>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image
          src="/Coding.jpg" // Ensure this path is correct
          alt="Coding Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-6xl p-8 bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl">
        {techStack.map((tech, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center p-6 rounded-xl bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <span className="text-lg font-semibold">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
