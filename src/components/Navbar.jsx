import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="transition-colors duration-700 ease-in-out flex justify-between items-center px-6 py-4 text-lg font-medium shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-50">
      <div className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 underline"
                : "hover:text-blue-500 dark:hover:text-blue-300"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Custom toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
