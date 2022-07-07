import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <div>
        <div className="absolute top-3 left-3">
          <Link href="/events">
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
                part of the Runner&apos;s Club. It is a place where runners can
                meet and learn from each other.
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
                  About Runner&apos;s Clan Foundation
                </h1>
                <p className="mb-8 leading-relaxed">
                  Runner&apos;s Clan Foundation is a non-profit organization
                  that is a part of the Runner&apos;s Clan. It is a place where
                  runners can meet and learn from each other.
                </p>
                <div className="flex justify-center">
                  <Link href="/events">
                    <a>
                      <button className="hover:bg-transparent transition inline-flex text-[#2E3192] bg-white border-2 hover:border-2 hover:border-1 hover:text-white py-2 px-6 focus:outline-none rounded text-lg">
                        Events
                      </button>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <button className="hover:bg-transparent transition inline-flex text-[#2E3192] bg-white border-2 hover:border-2 hover:border-1 hover:text-white py-2 px-6 focus:outline-none rounded text-lg ml-5">
                        Contact Us
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
