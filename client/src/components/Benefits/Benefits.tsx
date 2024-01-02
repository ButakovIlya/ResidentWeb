import React from "react";
import { motion } from "framer-motion";
import { BenefitsCards } from "../../data/BenefitsCards";

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

const benefitsCardMotion = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ease: "easeInOut",
      duration: 0.6,
    },
  }),
};

const Benefits: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="benefits"
      className="flex flex-col items-center justify-center py-10 px-2 max-w-[1100px] mx-auto"
    >
      <motion.h5
        variants={benefitsTextMotion}
        className="text-[17px] sm:text-[32px] md:text-[42px] lg:text-[56px] font-bold md:mb-[40px] mb-[20px]"
      >
        Конкурентные преимущества
      </motion.h5>
      <motion.p
        variants={benefitsTextMotion}
        className="text-[#454C5D] text-[13px] md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[26px] leading-[20px] mb-[50px] max-w-[750px] mx-auto text-center"
      >
        Мы облегчаем процесс оплаты ЖКУ и других счетов через нашего
        телеграм-бота, предоставляя эту возможность пользователям.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[50px]"
      >
        {BenefitsCards.map((card) => (
          <motion.div
            variants={benefitsCardMotion}
            custom={card.id}
            key={card.id}
            className={`bg-white shadow-xl rounded-xl p-4 flex flex-col items-start`}
          >
            <div
              className={`w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-4`}
            >
              <img src={card.icon} alt="Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-[16px] sm:text-[20px] font-semibold mb-2">
              {card.title}
            </h2>
            <p className="text-[12px] sm:text-[16px]">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Benefits;
