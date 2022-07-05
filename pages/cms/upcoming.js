import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Upcoming({ notes }) {
  return (
    <div className="bg-gradient-to-t from-[#eeaeca] to-[#94bbe9] h-screen">
      <div>
        <Link href="/cms">
          <button className="bg-white mx-5 my-2 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            Back
          </button>
        </Link>
      </div>
      <div>
        <div className="m-5">
          {notes.map((note) => {
            return (
              <div key={note._id} className="card">
                <div className="rounded-xl overflow-hidden bg-white">
                  <div className="px-3 py-2">
                    <div className="font-bold text-xl mb-2">{note.title}</div>
                    <p className="text-gray-700 text-base">
                      {note.description}
                    </p>
                  </div>
                  <div className="px-3 pt-2 pb-2">
                    <div>
                      <Link href={`/cms/${note._id}/upcomingedit`}>
                        <button
                          css={{
                            backgroundColor: "#2E3192"
                          }}
                        >
                          Learn More
                          <AiOutlineDoubleRight />
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

Upcoming.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/upcoming");
  const { data } = await res.json();

  return { notes: data };
};
