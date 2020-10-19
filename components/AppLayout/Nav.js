import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav = (props) => {
  const user = true;
  const authlinks = [{ title: "Create", href: "/create", auth: true }];
  const navlinks = [
    { title: "About", href: "/about", auth: false },
    { title: "Learn", href: "/learn", auth: false },
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
        <div class="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-600 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-8">
        <div className="flex justify-end text-gray-500 items-center hidden lg:block">
          {/* {user &&
            authlinks.map((link) => {
              return (
                <li className={link.title} key={link.title}>
                  <Link href={link.href}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })} */}
          {navlinks.map((link) => {
            return (
              <Link href={link.href} key={link.title}>
                <a className="hover:text-white hover:bg-gray-800 py-2 px-5 rounded-full">
                  {link.title}
                </a>
              </Link>
            );
          })}

          {/* {user ? (
            <>
              <li>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/logout">
                  <a>Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/singup">
                  <a>Sign Up</a>
                </Link>
              </li>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default Nav;
