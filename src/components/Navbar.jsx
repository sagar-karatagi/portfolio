import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 text-lg font-medium shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-50">
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
      <button
        onClick={() => setDark(!dark)}
        className="text-sm px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
