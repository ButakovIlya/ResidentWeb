import React from "react";
import check_mark from "../../assets/icons/icon-check.svg";
import x_mark from "../../assets/icons/icon-not-check.svg";
import { motion } from "framer-motion";

const Pluses: React.FC = () => {
  const benefitsTextMotion = {
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
  const blockMotionOne = {
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
  const blockMotionTwo = {
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
  const vsMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="pluses"
      className="max-w-[1100px] mx-auto py-10 px-2 text-center"
    >
      <motion.h5
        variants={benefitsTextMotion}
        className="text-[17px] sm:text-[32px] md:text-[42px] lg:text-[56px] font-bold md:mb-[40px] mb-[20px]"
      >
        Почему Resident ?
      </motion.h5>
      <motion.p
        variants={benefitsTextMotion}
        className="text-[#454C5D] text-[13px] md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[26px] leading-[20px] max-w-[840px] mx-auto mb-[80px]"
      >
        Наш Бот — это мгновенные уведомления о квитанциях и новостях. Бот
        обеспечивает оперативное управление жилищно-коммунальными вопросами.
        Простота использования и облачное хранение данных устраняют бумажную
        работу, делая взаимодействие с ЖКХ и УК удобным и эффективным.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="pluses__blocks flex items-center flex-col lg:flex-row lg:items-start gap-[50px] justify-center relative"
      >
        <motion.div variants={blockMotionOne} className="pluses__block-1">
          <h5 className="text-[18px] sm:text-[28px] font-bold mb-[40px]">
            Resident.
          </h5>
          <div className="max-w-450px h-[420px] sm:h-[450px] w-[300px] sm:w-[450px] flex flex-col items-start p-[30px] sm:p-[50px] text-left bg-[#1F7628]">
            <h6 className="uppercase text-white text-[16px] sm:text-[24px] font-semibold mb-[25px]">
              Наши Преимущества:
            </h6>
            <ul className="flex flex-col items-start gap-[25px]">
              <li className="flex items-center gap-[10px]">
                <img src={check_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#DCDFFF]">
                  Низкая цена
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={check_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#DCDFFF]">
                  Кроссплатформенность
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={check_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#DCDFFF]">
                  Мгновенные уведомления
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={check_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#DCDFFF]">
                  Интуитивный интерфейс
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={check_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#DCDFFF]">
                  Поддержка 24/7
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={check_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#DCDFFF]">
                  Поддержка множества языков
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={vsMotion}
          className="pluses__vs lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <div className="pluses__vs-circle bg-orange-500 w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] rounded-full flex items-center justify-center text-white font-bold text-xl">
            VS
          </div>
        </motion.div>
        <motion.div variants={blockMotionTwo} className="pluses__block-2">
          <h5 className="text-[18px] sm:text-[28px] font-bold mb-[40px]">
            Другие приложения
          </h5>
          <div className="max-w-450px w-[300px] h-[420px] sm:h-[450px] sm:w-[450px] flex flex-col items-start p-[30px] sm:p-[50px] text-left bg-white shadow-xl">
            <h6 className="text-black text-[17px] sm:text-[24px] font-semibold mb-[25px]">
              Их недостатки:
            </h6>
            <ul className="flex flex-col items-start gap-[25px]">
              <li className="flex items-center gap-[10px]">
                <img src={x_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#454C5D]">
                  Высокая цена
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={x_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#454C5D]">
                  Необходимость установки приложения
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={x_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#454C5D]">
                  Долгое время ожидание ответа
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={x_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#454C5D]">
                  Сложные в освоении
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={x_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#454C5D]">
                  Долгое время ожидание ответа
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={x_mark} alt="" />
                <span className="text-[14px] sm:text-[16px] text-[#454C5D]">
                  Моноязычный интерфейс
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Pluses;
