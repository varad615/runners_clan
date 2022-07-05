import Link from "next/link";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0">
            <img src="/logo.svg" alt="logo" className="w-10 h-10 mr-2" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-dark">
              Runner&apos;s Clan Foundation
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <a href="/upcomingevents" className="mr-4 hover:underline md:mr-6 ">
                Up Coming Events
              </a>
            </li>
            <li>
              <a href="/events" className="mr-4 hover:underline md:mr-6">
                Events
              </a>
            </li>
           
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2020 Runer&apos;s Clan
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/_runners_clan_"
              className="text-gray-500 hover:text-red-500 "
            >
              <AiFillInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/runnersclan"
              className="text-gray-500 hover:text-blue-500 "
            >
              <AiFillFacebook size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
