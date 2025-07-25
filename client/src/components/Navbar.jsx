import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#objectives", label: "Objectives" },
  { href: "#themes", label: "Themes" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#organizers", label: "Organizers" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    const onResize = () => window.innerWidth >= 1024 && setIsMenuOpen(false);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navTextColor = isScrolled ? "text-mysuru-maroon" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-2xl shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center px-4 md:px-6">
        <motion.h1
          className={`font-bold ${
            isScrolled
              ? "text-mysuru-maroon text-xl"
              : "text-white text-xl md:2xl drop-shadow-md"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className={isScrolled ? "text-[#C9A333]" : "text-[#FFD700]"}>
            Ideathon
          </span>
        </motion.h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none block p-2"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? (
              <FiX
                size={24}
                className={isScrolled ? "text-mysuru-maroon" : "text-white"}
              />
            ) : (
              <FiMenu
                size={24}
                className={isScrolled ? "text-mysuru-maroon" : "text-white"}
              />
            )}
          </button>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`transition-colors duration-300 hover:opacity-80 font-medium ${navTextColor} ${
                    !isScrolled ? "drop-shadow-md" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, filter: "blur(10px)", height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full shadow-xl backdrop-blur-md"
            style={{ zIndex: 60 }}
          >
            <nav className="container-custom py-4">
              <ul className="flex flex-col items-end space-y-4 px-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`block px-2 rounded-lg transition-colors duration-300 text-lg font-semibold tracking-tight ${
                        isScrolled
                          ? "text-mysuru-charcoal hover:bg-mysuru-gold/10"
                          : "text-white hover:bg-mysuru-gold/20"
                      }`}
                      style={{
                        textShadow: isScrolled
                          ? "none"
                          : "0px 1px 2px rgba(0,0,0,0.4)",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
