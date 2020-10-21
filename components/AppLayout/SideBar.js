import Link from "next/link";
import { motion } from "framer-motion";
const Side = ({ contents }) => {
  console.log(contents);
  return (
    <div className="flex flex-col text-center">
      {contents.map((category) => {
        return (
          <motion.div
            className="mb-8 text-3xl"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            whileHover={{
              x: 15,
            }}
          >
            <Link href={category.href}>
              <a className="w-full block">{category.title}</a>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};
export default Side;
