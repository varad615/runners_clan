import fetch from "isomorphic-unfetch";
import { BsWhatsapp } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

const Note = ({ note }) => {
  const iconstyle = { color: "#fff", fontSize: "1.5em" };
  const iconback = { color: "#fff", fontSize: "1.5em" };
  return (
    <div className="note-container">
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt={`Runners Clan Event ${note.title}`}
                  className="object-cover object-center h-full w-full"
                  src={note.img}
                />
              </div>
              <Link
                href={`whatsapp://send?text=Hay check out this event by Runners Clan Foundation *${note.title}*%0A${note.description}%0Ahttps://runners-clan.vercel.app/events/${note._id}
               `}
              >
                <button className="bg-[#2CD84D] -translate-y-4 p-2 rounded-3xl translate-x-4">
                  <BsWhatsapp style={iconstyle} />
                </button>
              </Link>
              <div className="flex flex-col sm:flex-row mt-7">
                <div className="sm:pl-8 sm:py-3 sm:border-l border-[#ED1C24] sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p>
                    <span className="font-bold text-[#2E3192] text-2xl">
                      {note.title}
                    </span>
                  </p>
                  <p className="overscroll-none leading-relaxed mt-5 text-lg mb-2">
                    {note.description}
                  </p>
                  <p>
                    <span className="font-bold text-black text-xl">
                      Distance: {note.distance}
                    </span>
                  </p>
                  <br />
                  <Link
                    href="/events"
                    className="inline-flex mt-6 items-center"
                  >
                    <button className="bg-[#2E3192] text-white flex felx-inline p-2 rounded-lg px-4 gap-4">
                      <BiLeftArrowAlt style={iconback} />
                      Go Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://runners-clan.vercel.app/api/posts/${id}`);
  const { data } = await res.json();

  return { note: data };
};

export default Note;
