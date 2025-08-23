export default function App() {
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
          {[
            {
              title: "Patni Automobiles Website",
              desc: "A responsive business website built with HTML, CSS, JS, and AWS integration.",
              link: "#",
            },
            {
              title: "Deep Learning Signature Auth",
              desc: "A research project on Siamese CNNs for secure signature authentication.",
              link: "#",
            },
            {
              title: "Park My Car",
              desc: "A smart parking solution built for a techno-entrepreneurship project.",
              link: "#",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-2xl transition text-left"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-700">{project.desc}</p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                View Project
              </a>
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
