import { motion } from "framer-motion";
import hero_image from "../../assets/hero-1.png";

const headerTextMotion = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

const headerImageMotion = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

const Hero = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-[120px] md:py-[170px] px-2 flex items-center md:items-start md:flex-row flex-col gap-[60px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hero__about flex flex-col items-center md:items-start gap-[50px] w-[100%]"
      >
        <motion.h4
          variants={headerTextMotion}
          className="max-w-[450px] text-[36px] font-bold leading-[40px] capitalize sm:leading-[60px] sm:text-[54px] md:leading-[52px] md:text-[50px] lg:leading-[70px] lg:text-[64px]"
        >
          <span className="text-[#1F7628] text-no-wrap">Умный бот</span>{" "}
          <span className="truncate">для удобной</span>{" "}
          <span className="truncate">и комфортной</span> жизни
        </motion.h4>
        <motion.p
          variants={headerTextMotion}
          className="text-[#454C5D] max-w-[450px] text-[18px] leading-[24px]"
        >
          Будь Умным во Всем, в том числе и в Оплате ЖКХ!{" "}
          <span className="font-semibold">Телеграмм Бот</span> – Твой Путь к
          Комфортной Жизни.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[80%] md:w-[90%]"
      >
        <motion.img
          variants={headerImageMotion}
          src={hero_image}
          alt=""
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
