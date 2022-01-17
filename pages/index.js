import Link from "next/link";
import { BsFillBellFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="absolute top-3 left-3">
        <Link href="/Upcomingevents">
          <a>
            <button className="bg-[#2E3192] transition-all p-2 rounded text-white">
              Up-Coming Events
            </button>
          </a>
        </Link>
      </div>

      <section
        id="home"
        className=" text-gray-400 bg-white body-font bg-[url('/bg.png')] bg-fixed bg-cover bg-right"
      >
        <div className="h-screen container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-6 font-medium text-[#ED1C24]">
              Runner&apos;s Clan Foundation
            </h1>
            <p className="leading-relaxed mb-8 text-[#2E3192] font-medium">
              Runners Club Foundation is a non-profit organization that is a
              part of the Runner&apos;s Club. It is a place where runners can meet
              and learn from each other.
            </p>
            <div className="flex justify-center">
              <Link href="#about">
                <a>
                  <button className="transition transform inline-flex text-[#ED1C24] bg-[#fff] border-solid border-2 border-[#2E3192] py-2 px-6 focus:outline-none hover:bg-[#2E3192] hover:text-white rounded text-lg">
                    Lets Start Running
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2E3192] rounded-b-3xl" id="about">
        <div className="text-white body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/runners clan.jpeg"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#fff] ">
                About Runner&apos;s Clan Foundation
              </h1>
              <p className="mb-8 leading-relaxed">
                Runner&apos;s Clan Foundation is a non-profit organization that is a
                part of the Runner&apos;s Clan. It is a place where runners can meet
                and learn from each other.
              </p>
              <div className="flex justify-center">
                <Link href="/events">
                  <a>
                    <button className="inline-flex text-[#2E3192] bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                      Events
                    </button>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <button className="ml-4 inline-flex text-[#2E3192] bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                      Contact Us
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="font-medium flex gap-x-3 flex-wrap flex-row md:text-left text-center order-first">
            <Link href="#home">
              <a>
                <div className="hover:text-[#2E3192] hover:underline-offset-8 transition hover:underline">
                  Home
                </div>
              </a>
            </Link>
            <Link href="/programs">
              <a>
                <div className="hover:text-[#2E3192] hover:underline-offset-8 transition hover:underline">
                  Our Activies
                </div>
              </a>
            </Link>
            <Link href="/Upcomingevents">
              <a>
                <div className="hover:text-[#2E3192] hover:underline-offset-8 transition hover:underline">
                  Upcoming Events
                </div>
              </a>
            </Link>
            <Link href="/events">
              <a>
                <div className="hover:text-[#2E3192] hover:underline-offset-8 transition hover:underline">
                  Events
                </div>
              </a>
            </Link>
            <Link href="/team">
              <a>
                <div className="hover:text-[#2E3192] hover:underline-offset-8 transition hover:underline">
                  Our Team
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/logo.svg" alt="logo" className="w-10 h-10 mr-2" />
              <span className="ml-3 text-xl">Runner&apos;s Clan</span>
            </div>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Runer&apos;s Clan
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link
                href="https://www.facebook.com/runnersclan"
                className="text-gray-500"
              >
                <a>
                  <svg
                    fill="#1778F2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              </Link>

              <Link
                href="https://www.instagram.com/_runners_clan_"
                className="ml-3 text-gray-500"
              >
                <a>
                  <svg
                    fill="none"
                    stroke="#CC3089"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
