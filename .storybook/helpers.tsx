import { AnimatePresence, motion } from 'framer-motion';
import Modal from 'src/Components/Modals/Modal/Modal';

export const ModalsDecorator = (Story: any) => {
  const onClose = () => { };
  return (
    <motion.div
      className="w-screen fixed inset-0 overflow-x-hidden z-[2020]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { ease: "easeInOut" },
      }}
    >
      <AnimatePresence>
        <Modal onClose={onClose}  >
          <Story onClose={onClose} />
        </Modal>
      </AnimatePresence>
    </motion.div>
  );
}