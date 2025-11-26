import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <header role="banner" className="fixed w-full z-10">
      <div>
  <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white/70 backdrop-blur-md shadow-md">
          <div className="flex flex-row items-center cursor-pointer">
            <h1 className="text-3xl font-semibold">Kumail.</h1>
          </div>

          <nav aria-label="Primary" className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all  cursor-pointer font-semibold"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer  font-semibold"
            >
              About Me
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer  font-semibold"
            >
              Services
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer  font-semibold"
            >
              Eduaction
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer  font-semibold"
            >
              Experience
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer  font-semibold"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer  font-semibold"
            >
             Contact
            </Link>
          </nav>

          <div className="lg:hidden flex items-center">
            <button
              aria-label={menu ? 'Close menu' : 'Open menu'}
              aria-expanded={menu}
              onClick={handleChange}
              className="p-1"
            >
              {menu ? <AiOutlineClose size={28} /> : <HiOutlineMenuAlt1 size={28} />}
            </button>
          </div>
        </div>
        <div className={`${ menu ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 gap-8 w-full h-fit transition-transform duration-300 `} role="navigation" aria-label="Mobile">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all  cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}    
          >
            About Me
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Education
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
