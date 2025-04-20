import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile_image.jpg"; // use your actual image name
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Profile image */}
      <img
        src={profileImage}
        alt="Sagar Karatagi"
        className="w-40 h-40 rounded-full border-4 border-blue-500 mb-6"
      />

      {/* Main text */}
      <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Sagar</h1>

      {/* Animated subtitle */}
      <motion.p
        className="text-xl text-gray-600 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Fullstack Developer | Spring Boot | React | DevOps Enthusiast
      </motion.p>

      {/* Social icons */}
      <div className="flex gap-6 mt-6 text-2xl text-blue-600">
        <a href="https://github.com/sagar-karatagi" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sagar-karatagi" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="/sagar_karatagi.pdf" download>
          <FaFilePdf />
        </a>
      </div>
    </section>
  );
};

export default Home;
