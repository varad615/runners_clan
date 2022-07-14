import fetch from "isomorphic-unfetch";
import { BsWhatsapp } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Button, Loader } from "@nextui-org/react";

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
                href={`whatsapp://send?text=Hay check out this event by Runners Clan Foundation *${note.title}*%0A${note.description}%0Ahttp://localhost:3000//events/${note._id}
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
                      Distance: 15&nbsp;Km
                    </span>
                  </p>
                  <br />
                  <Link
                    href={`/cms/${note._id}/edit`}
                    className="inline-flex mt-6 items-center"
                  >
                    <Button
                      css={{
                        backgroundColor: "#2E3192"
                      }}
                      icon={<BiLeftArrowAlt style={iconback} />}
                    >
                      Go Back
                    </Button>
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
