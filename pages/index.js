import {BsFillBellFill} from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <div className="absolute top-3 left-3">
        <a href="/Upcomingevents">
          <button className=" border-red-500 bg-[#2E3192] transition-all hover:border-2 p-2 rounded text-white">
            Up-Coming Events
          </button>
        </a>
      </div>
      

      <section className=" text-gray-400 bg-white body-font bg-[url('/bg.png')] bg-fixed bg-cover bg-right">
        <div className="h-screen container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-6 font-medium text-[#ED1C24]">
              Runner's Clan Foundation
            </h1>
            <p className="leading-relaxed mb-8 text-[#2E3192] font-medium">
              Runners Club Foundation is a non-profit organization that is a
              part of the Runner's Club. It is a place where runners can meet
              and learn from each other.
            </p>
            <div className="flex justify-center">
              <a href="#about">
                <button className="transition transform inline-flex text-[#ED1C24] bg-[#fff] border-solid border-2 border-[#2E3192] py-2 px-6 focus:outline-none hover:bg-[#2E3192] hover:text-white rounded text-lg">
                  Lets Start Running
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2E3192]" id="about">
        <div className="text-white body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/runners clan.jpeg"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#fff] ">
                About Runner's Clan Foundation
              </h1>
              <p className="mb-8 leading-relaxed">
                Runners Club Foundation is a non-profit organization that is a
                part of the Runner's Club. It is a place where runners can meet
                and learn from each other.
              </p>
              <div className="flex justify-center">
                <a href="/events">
                  <button className="inline-flex text-[#2E3192] bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    Events
                  </button>
                </a>
                <button className="ml-4 inline-flex text-[#2E3192] bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex gap-x-3 flex-wrap flex-row md:text-left text-center order-first">
            <div>Link</div>
            <div>Link</div>
            <div>Link</div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/logo.svg" alt="logo" class="w-10 h-10 mr-2" />
              <span class="ml-3 text-xl">Runner's Clan</span>
            </a>
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Runer's Clan
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
