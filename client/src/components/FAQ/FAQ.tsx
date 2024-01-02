import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../data/FaqData";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const blockMotion = {
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
      className="bg-[#F4F5FF]"
      id="faq"
    >
      <motion.div
        variants={blockMotion}
        className="py-[100px] max-w-[1100px] mx-auto px-2"
      >
        <h2 className="text-[20px] sm:text-[32px] md:text-[46px] lg:text-[56px] font-bold mb-[70px]">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={item.id} className="pb-[40px] border-b">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3
                  className={`text-[17px] leading-[23px] sm:text-[24px] pr-5 sm:leading-[32px] font-bold ${
                    activeIndex === index ? "text-[#1F7628]" : "text-black"
                  }`}
                >
                  0{item.id}. {item.question}
                </h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faMinus : faPlus}
                  className={`text-md sm:text-lg p-[6px] sm:p-[12px] rounded-[5px] ${
                    activeIndex === index
                      ? "bg-[#1F7628] text-white"
                      : "bg-[#DCDFFF] text-black"
                  }`}
                />
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-[13px] sm:text-[16px] mt-[12px] max-w-[75%]">
                      {item.answer}
                    </p>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
