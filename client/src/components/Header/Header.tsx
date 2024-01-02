import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { PageLinks } from "../../data/PageLinks";

import phone from "../../assets/icons/phone-g.svg";
import mail from "../../assets/icons/mail-g.svg";
import location from "../../assets/icons/location-g.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(isScrolled);
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 1;
      if (!isTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
      closeMenu();
    }
  };

  return (
    <header
      className={`border-b-[1px] border-[#DCDFFF] fixed top-0 w-full z-40 bg-white/95`}
    >
      <div className="header__content px-2 py-[25px] max-w-[1100px] mx-auto flex items-center justify-between">
        <Link to="/">
          <h2 className="logo text-[28px] text-[#1F7628] font-bold">
            Resident.
          </h2>
        </Link>
        <nav className="navigationd hidden md:block">
          <ul className="navigation_list flex items-center gap-[20px] lg:gap-[40px] text-[14px] lg:text-[16px] font-medium">
            {PageLinks.map((link) => (
              <motion.li
                className="navigation__list--item cursor-pointer"
                key={link.id}
                onClick={() => scrollToSection(link.anchor)}
              >
                {link.title}
              </motion.li>
            ))}
            <motion.li className="navigation__list--item">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="font-bold text-white py-[12px] px-[29px] rounded-[5px] bg-[#1F7628]"
              >
                Связаться с нами
              </button>
            </motion.li>
          </ul>
        </nav>
        <div className="burger-menu md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-[#1F7628] text-3xl" />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="w-[250px] sm:w-[300px] max-w-md bg-white h-full shadow-lg"
              >
                <div className="flex justify-end p-4">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-black text-2xl cursor-pointer"
                    onClick={closeMenu}
                  />
                </div>
                <ul className="text-black text-md sm:text-lg">
                  {PageLinks.map((link) => (
                    <motion.li
                      className="p-4 border-b border-gray-300"
                      key={link.id}
                      onClick={() => scrollToSection(link.anchor)}
                    >
                      {link.title}
                    </motion.li>
                  ))}
                </ul>
                <div>
                  <ul className="p-4 flex flex-col items-start gap-[15px] text-[14px]">
                    <li>
                      <a
                        href="tel:79194728827"
                        className="flex items-center gap-[10px]"
                      >
                        <img src={phone} alt="Phone icon" />
                        <p>+7 (919) 472-88-27</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:residentdom@yandex.ru"
                        className="flex items-center gap-[10px]"
                      >
                        <img src={mail} alt="Mail icon" />
                        <p>residentdom@yandex.ru</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://yandex.ru/maps/50/perm/house/ulitsa_pushkina_66/YU8YdANmQUwPQFtifXxxdnxkYA==/?ll=56.246898%2C58.007074&z=16.7"
                        className="flex items-center gap-[10px]"
                      >
                        <img src={location} alt="Location icon" />
                        <p>г. Пермь, ул. Пушкина 66</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
