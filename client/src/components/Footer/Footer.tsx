import { PageLinks } from "../../data/PageLinks";
import { motion } from "framer-motion";

import phone from "../../assets/icons/phone-g.svg";
import mail from "../../assets/icons/mail-g.svg";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
    }
  };

  return (
    <footer className="border-t border-gray-200">
      <div className="footer__content max-w-[1100px] mx-auto px-2 py-[70px] flex items-center justify-between flex-col md:flex-row">
        <div className="footer__main flex items-center flex-col md:flex-row">
          <h2 className="logo cursor-pointer text-[28px] text-[#1F7628] font-bold mb-[20px] md:mb-0 md:pr-[20px]">
            Resident.
          </h2>
          <div className="flex flex-col items-center md:items-start gap-[10px] md:pl-[20px] md:border-l-[2px] border-black">
            <ul className="footer__navigation flex flex-col sm:flex-row items-center gap-[10px] lg:gap-[20px]">
              {PageLinks.map((link) => (
                <motion.li
                  className="navigation__list--item cursor-pointer"
                  key={link.id}
                  onClick={() => scrollToSection(link.anchor)}
                >
                  {link.title}
                </motion.li>
              ))}
            </ul>
            <p className="md:block hidden">
              © {currentYear} Resident. All rights reserved.
            </p>
          </div>
        </div>
        <div className="footer__socials flex flex-col items-start gap-[10px] mt-[20px] md:mt-0">
          <a
            href="mailto:residentdom@yandex.ru"
            className="footer__socials--links flex items-center gap-[10px]"
          >
            <img src={mail} alt="" />
            <p>residentdom@yandex.ru</p>
          </a>
          <a
            href="tel:79194728827"
            className="footer__socials--mail flex items-center gap-[10px]"
          >
            <img src={phone} alt="" />
            <p>+7 (919) 472-88-27</p>
          </a>
        </div>
        <p className="md:hidden block text-gray-400 mt-[20px]">
          © {currentYear} Resident. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
