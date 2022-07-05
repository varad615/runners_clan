import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { HiHome } from "react-icons/hi";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Home({ notes }) {
  const iconback = { color: "#fff", fontSize: "1.5em" };
  return (
    <div>
      <div className="absolute top-3 left-3">
        <Link href="/">
          <button className="fixed bg-[#ED1C24] text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <HiHome />
          </button>
        </Link>
      </div>
      <img src="/eventbg.png" alt="runners clan" />
      <div className="bg-[#2E3192]">
        <div>
          <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {notes.map((note) => {
              return (
                <div>
                  <div key={note._id} className="card">
                    <div className="rounded-xl overflow-hidden transition border-2 bg-white hover:shadow-lg">
                      <img
                        className="lg:h-48 md:h-36 sm:h-[230px] h-[230px] w-full p-1 rounded-xl object-cover object-center"
                        src={note.img}
                        alt="Mountain"
                      />
                      <div className="px-3 py-2">
                        <div className="font-bold text-xl mb-2">
                          {note.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          {note.description}
                        </p>
                      </div>
                      <div className="px-3 pt-2 pb-2">
                        <div>
                          <Link href={`/events/${note._id}`}>
                            <button className="transition transform inline-flex text-[#ED1C24] bg-[#fff] border-solid border-2 border-[#2E3192] py-2 px-4 focus:outline-none hover:bg-[#2E3192] hover:text-white rounded-xl text-md">
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const { data } = await res.json();

  return { notes: data };
};
