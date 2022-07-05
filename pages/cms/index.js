import Link from "next/link";
import Navbar from "../../components/navbar";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Cms({ notes }) {
  return (
    <div>
      <Navbar />
      <div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {notes.map((note) => {
            return (
              <div key={note._id} className="card">
                <div className="rounded-xl overflow-hidden transition border-2 bg-white hover:shadow-lg">
                  <img
                    className="lg:h-48 md:h-36 sm:h-[230px] h-[230px] w-full p-1 rounded-xl object-cover object-center"
                    src={note.img}
                    alt="Mountain"
                  />
                  <div className="px-3 py-2">
                    <div className="font-bold text-xl mb-2">{note.title}</div>
                    <p className="text-gray-700 text-base">
                      {note.description}
                    </p>
                  </div>
                  <div className="px-3 pt-2 pb-2">
                    <div>
                      <Link href={`/cms/${note._id}`}>
                        <button
                          css={{
                            backgroundColor: "#2E3192"
                          }}
                          iconRight={<AiOutlineDoubleRight />}
                        >
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Cms.getInitialProps = async () => {
  const res = await fetch("https://runners-clan.vercel.app/api/posts");
  const { data } = await res.json();

  return { notes: data };
};
