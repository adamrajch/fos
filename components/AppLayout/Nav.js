import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { useState } from "react";
import { motion } from "framer-motion";
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav = (props) => {
  const user = true;
  const authlinks = [{ title: "Create", href: "/create", auth: true }];
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const navlinks = [
    { title: "About", href: "/about", auth: false },
    { title: "Library", href: "/library", auth: false },
    // { title: "Armwrestling", href: "/armwrestling", auth: false },
    // { title: "Grip", href: "/grip", auth: false },
    { title: "Contact", href: "/contact", auth: false },
  ];
  return (
    <div className="flex justify-between mt-2">
      <span className="logo ml-8">
        <Link href="/">
          <a className="hover:text-white">Logo</a>
        </Link>
      </span>
      <div className="flex justify-end mr-2 w-full">
        <div className="block lg:hidden relative drop mr-2 lg:mg-4">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-600 hover:text-white hover:border-white relative"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            {/* {open ? (
              <div className="flex flex-col absolute right-0 top-0 bg-white text-black">
                {navlinks.map((link) => {
                  return (
                    <Link href={link.href} key={link.title}>
                      <a className="hover:text-white hover:bg-gray-800 py-2 px-5 rounded-full">
                        {link.title}
                      </a>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <></>
            )} */}
          </button>
          <div className="inline-flex flex-col dropper hidden absolute bg-white text-black z-10">
            {navlinks.map((link) => {
              return (
                <Link href={link.href} key={link.title}>
                  <a className="hover:text-white hover:bg-gray-600 py-2 px-5">
                    {link.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-2">
        <div className="flex justify-end text-gray-500 items-center hidden lg:block">
          {navlinks.map((link) => {
            return (
              <Link href={link.href} key={link.title}>
                <a className="hover:text-white hover:bg-gray-800 py-2 px-5 rounded-full">
                  {link.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .drop:hover .dropper {
          display: flex;
        }
      `}</style>
    </div>
  );
};
export default Nav;
