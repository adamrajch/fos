import { motion } from "framer-motion";
const PageHeader = ({ title }) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-6xl"
    >
      {title}
    </motion.div>
  );
};
export default PageHeader;
