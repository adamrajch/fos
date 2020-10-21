import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const SideBar = ({ content }) => {
  console.log("side props", content);
  const [active, setActive] = useState(false);
  return (
    <div className="bg-white lg:bg-transparent lg:text-white text-black w-3/4 lg:w-2/5 rounded-lg sidebar text-center m-auto lg:m-0 lg:w-full">
      <div className="flex justify-between py-4 text-center lg:mt-8">
        <div className="w-full font-semibold lg:text-3xl text-center lg:pl-8">
          <Link href="/library">
            <a>Library</a>
          </Link>
        </div>
        <button
          onClick={() => setActive(!active)}
          className="flex items-center px-3 py-2 rounded text-black border-gray-600 mr-4 lg:m-0 focus:outline-none"
        >
          <svg
            className="fill-current h-3 w-3 lg:text-white lg:hidden"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {active ? (
        <div className="flex flex-col pl-4 mt-2 pr-4 lg:hidden">
          {content.map((link) => {
            return (
              <Link href={link.href}>
                <a className="mb-6 hover:bg-gray-400 rounded-md px-4 py-2 inline">
                  {link.title}
                </a>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col hidden lg:block lg:mt-4 text-center">
          {content.map((category) => {
            return (
              <motion.div
                className="mb-8 text-xl"
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
      )}
    </div>
  );
};
export default SideBar;
