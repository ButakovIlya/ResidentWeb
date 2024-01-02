import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../interfaces/FormData";
import adminApi from "../../api/api_requests";
import { useState } from "react";
import SuccessPopUp from "./SuccessPopUp";
import { motion } from "framer-motion";

import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requestType: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);
  const [responseStatus, setResponseStatus] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data: FormData) => {
    try {
      const response = await adminApi.send_mail(data);
      if (response.success) {
        setResponseStatus(true);
        setShowSuccessPopUp(true);
        reset();
      }
    } catch (error) {
      setResponseStatus(false);
      setShowSuccessPopUp(true);
      console.error("Error submitting form: ", error);
    }
  };

  const closeSuccessPopUp = () => {
    setShowSuccessPopUp(false);
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
      className="max-w-[1100px] mx-auto py-[30px] md:py-[70px] px-2"
      id="contact"
    >
      <motion.div
        variants={blockMotion}
        className="flex items-start flex-col lg:flex-row gap-[50px] shadow-2xl p-[30px] rounded-2xl"
      >
        <div className="flex flex-col md:flex-row lg:flex-col items-start w-full gap-[20px] lg:gap-0 lg:max-w-[30%] lg:px-[30px] p-0 lg:py-[40px] border-0 lg:border-r-2 border-black">
          <div>
            <h6 className="text-[24px] font-semibold mb-[20px] rounded-[5px]">
              Оставить заявку
            </h6>
            <p className="text-[16px] mb-[20px]">
              Если у Вас есть вопросы или предложения, Вы можете связаться с
              Нами, заполнив форму.
            </p>
          </div>
          <div className="w-full flex flex-col gap-[5px] md:gap-[15px]">
            <a
              href="tel:79194728827"
              className="px-[15px] text-[12px] py-[10px] rounded-[5px] bg-[#1F7628] w-full text-white"
            >
              <button className="flex items-center gap-[10px]">
                <img src={phone} alt="" />
                <span>+7 (919) 472-88-27</span>
              </button>
            </a>
            <a
              href="mailto:residentdom@yandex.ru"
              className="px-[15px] text-[12px] py-[10px] rounded-[5px] bg-[#cfcfcf] w-full text-black"
            >
              <button className="flex items-center gap-[10px]">
                <img src={mail} alt="" />
                <span>residentdom@yandex.ru</span>
              </button>
            </a>
            <a
              target="_blank"
              href="https://yandex.ru/maps/50/perm/house/ulitsa_pushkina_66/YU8YdANmQUwPQFtifXxxdnxkYA==/?ll=56.246898%2C58.007074&z=16.7"
              className="px-[15px] text-[12px] py-[10px] rounded-[5px] bg-[#cfcfcf] w-full text-black"
            >
              <button className="flex items-center gap-[10px]">
                <img src={location} alt="" />
                <span>г. Пермь, ул. Пушкина 66</span>
              </button>
            </a>
          </div>
        </div>
        <div className="form flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-2">
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  type="text"
                  id="firstName"
                  placeholder="Ваше имя"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mb-4"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2">
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  type="text"
                  id="lastName"
                  placeholder="Ваша фамилия"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mb-4"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  id="email"
                  placeholder="Ваша почта"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mb-4"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2">
                <input
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                  type="tel"
                  id="phone"
                  placeholder="Ваш телефон"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mb-4"
                />
              </div>
              <div className="w-full px-3 mb-2">
                <select
                  {...register("requestType", {
                    required: "Please select a request type",
                  })}
                  className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mb-4"
                >
                  <option value="">Выберите тип заявки</option>
                  <option value="Интеграция бота">Интеграция бота</option>
                  <option value="Консультация">Консультация</option>
                  <option value="Поддержка">Поддержка</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>
              <div className="w-full px-3 mb-2">
                <textarea
                  {...register("message", { required: false })}
                  id="message"
                  placeholder="Ваше сообщение"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 h-32 resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#1F7628] text-white font-bold py-[12px] px-[40px] rounded-[5px] focus:outline-none focus:shadow-outline"
            >
              Отправить
            </button>
          </form>
        </div>
      </motion.div>
      <SuccessPopUp
        isOpen={showSuccessPopUp}
        onClose={closeSuccessPopUp}
        status={responseStatus}
      />
    </motion.div>
  );
};

export default ContactForm;
