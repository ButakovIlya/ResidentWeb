import bg_cta from "../../assets/bg-cta.png";
import { motion } from "framer-motion";

const CtaBlock = () => {
  const phoneMotion = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };

  const textMotion = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: true }}
      className="bg-[#1F7628]"
      id="cta"
    >
      <div className="flex items-center justify-center flex-col-reverse md:flex-row pt-10 max-w-[1100px] mx-auto gap-[50px] lg:gap-[150px]">
        <motion.div
          variants={phoneMotion}
          className="flex items-end md:justify-end justify-center"
        >
          <img
            src={bg_cta}
            alt="CTA Phone image"
            className="self-end max-w-[80%] lg:max-w-full"
          />
        </motion.div>
        <motion.div
          variants={textMotion}
          className="flex flex-col items-center text-center md:text-left md:items-start gap-[25px] lg:gap-[40px]"
        >
          <h6 className="text-white text-[24px] sm:text-[32px] lg:text-[48px] leading-[38px] lg:leading-[60px] max-w-[560px]">
            Управлять домом теперь легче !
          </h6>
          <p className="text-[14px] sm:text-[15px] lg:text-[18px] leading-[23px] px-2 lg:leading-[28px] max-w-[520px] text-white">
            С нашим ботом Вы получаете возможность не выходя из дома
            взаимодействовать с ЖКХ, получая новости о последних событиях.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="capitalize font-semibold text-[12px] sm:text-[14px] bg-white px-[25px] py-[12px] rounded-[5px]"
          >
            Попробуйте нашего Бота
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CtaBlock;
