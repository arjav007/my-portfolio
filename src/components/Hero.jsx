import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I'm <span className="text-yellow-300">Arjav Patni</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mb-6 max-w-2xl"
      >
        A passionate developer crafting modern, responsive, and high-performance web applications.
      </motion.p>
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
  );
}
