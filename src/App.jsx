export default function App() {
  const projects = [
    {
      title: "Vi-Life Diagnostics",
      desc: "A full-stack diagnostic lab website built with Next.js, Express, and Supabase.",
      imageUrl: "/vilife-image.jpg", // Assumes image is in the /public folder
      liveUrl: "https://vi-life-diagnostics.vercel.app/",
      repoUrl: "https://github.com/arjav007/vi-life-diagnostics",
    },
    {
      title: "Patni Automobiles Website",
      desc: "A responsive business website built with HTML, CSS, JS, and AWS integration.",
      imageUrl: "/patni-auto-image.jpg", // Assumes image is in the /public folder
      liveUrl: "https://patniautomobiles.com",
      repoUrl: "#",
    },
    {
      title: "Deep Learning Signature Auth",
      desc: "A research project on Siamese CNNs for secure signature authentication.",
      imageUrl: "/signature-auth-image.jpg", // Assumes image is in the /public folder
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white min-h-screen">
      {/* ================= Hero Section ================= */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-yellow-300">Arjav Patni</span> 👋
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          I'm a passionate developer focused on building creative, modern, and
          responsive web applications using the latest technologies.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-white rounded-lg shadow hover:bg-white hover:text-purple-600 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section id="about" className="py-20 bg-white text-gray-900 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I'm a creative and detail-oriented web developer with a strong interest
          in modern frontend technologies like React, Tailwind CSS, and JavaScript.
          I enjoy solving real-world problems through code and continuously
          learning new tools to stay ahead of the curve.
        </p>
      </section>

      {/* ================= Skills Section ================= */}
      <section id="skills" className="py-20 bg-gray-100 text-gray-900 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "AWS",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Projects Section ================= */}
      <section id="projects" className="py-20 bg-white text-gray-900 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow hover:shadow-2xl transition flex flex-col text-left overflow-hidden"
            >
              {/* Project Image */}
              <img src={project.imageUrl} alt={`${project.title} screenshot`} className="w-full h-48 object-cover" />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-700 flex-grow">{project.desc}</p>
                
                {/* Project Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-900 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Have a project idea or want to collaborate? Let's connect!
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-purple-700 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Arjav Patni. All Rights Reserved.</p>
      </footer>
    </div>
  );
}