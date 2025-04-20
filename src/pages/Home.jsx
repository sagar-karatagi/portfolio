import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profile_image.jpg';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center text-center transition-colors duration-700 ease-in-out">
      {/* Profile image */}
      <img
        src={profileImage}
        alt="Sagar Karatagi"
        className="w-40 h-40 rounded-full border-4 border-blue-500 mb-6 transition-colors duration-700"
      />

      {/* Main text */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-700">
        Hi, I'm Sagar
      </h1>

      {/* Typing subtitle */}
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-3 transition-colors duration-700">
        <Typewriter
          words={[
            'Fullstack Developer',
            'Spring Boot Specialist',
            'React Enthusiast',
            'DevOps Explorer',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>

      {/* Social icons */}
      <div className="flex gap-6 mt-6 text-2xl text-blue-600 transition-colors duration-700">
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
