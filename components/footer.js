import Link from "next/link";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="/logo.svg" alt="logo" className="w-10 h-10 mr-2" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-dark">
              Runner&apos;s Clan Foundation
            </span>
          </div>

          <div className="flex flex-wrap md:flex-row flex-col md:gap-4">
            <div className="hover:text-[#2E3192] transition transform hover:underline underline-offset-4">
              <Link href="/events">events</Link>
            </div>
            <div className="hover:text-[#2E3192] transition transform hover:underline underline-offset-4">
              <Link href="/upcomingevents">Upcoming Events</Link>
            </div>
            <div className="hover:text-[#2E3192] transition transform hover:underline underline-offset-4">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2020 Runer&apos;s Clan
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="https://www.instagram.com/_runners_clan_">
              <AiFillInstagram
                size={20}
                className="text-gray-500 hover:text-red-500 cursor-pointer"
              />
            </Link>

            <Link href="https://www.facebook.com/runnersclan">
              <AiFillFacebook
                size={20}
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
