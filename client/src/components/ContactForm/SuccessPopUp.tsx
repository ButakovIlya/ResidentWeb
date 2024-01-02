import { motion } from "framer-motion";

interface ISuccessPopUp {
  isOpen: boolean;
  onClose: () => void;
  status: boolean; // Используем булевое значение для статуса
}

const SuccessPopUp: React.FC<ISuccessPopUp> = ({ isOpen, onClose, status }) => {
  const getTitleAndMessage = () => {
    if (status) {
      return {
        title: "Успешная отправка !",
        message: "Ваша заявка была отправлена нам на почту.",
      };
    } else {
      return {
        title: "Ошибка отправки !",
        message: "При отправке письма произошла ошибка. Попробуйте снова.",
      };
    }
  };

  const { title, message } = getTitleAndMessage();

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-50 h-full px-2 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-lg transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-8 max-w-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
      >
        <h2 className="text-md md:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-[14px] md:text-[16px]">{message}</p>
        <button
          className="mt-4 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md text-sm font-semibold focus:outline-none"
          onClick={onClose}
        >
          Закрыть
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessPopUp;
