import { sanityClient } from "../sanity";
import { HiHome } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
function events({ event }) {
  console.log(event);
  const iconstyle = { color: "#ED1C24", fontSize: "1em" };
  return (
    <div>
      <div className="absolute top-3 left-3">
        <a href="/">
          <button className="fixed bg-[#ED1C24] text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <HiHome />
          </button>
        </a>
      </div>

      <div>
        <div className="font-bold text-center text-4xl mt-5 mb-7">
          Our programs
        </div>
        <div>
          {event && (
            <div className="m-3 mx-2">
              {event.map((event) => (
                <div key={event._id} className="card ">
                  <div className=" px-3 rounded-xl overflow-hidden transition border-2 text-white bg-[#2E3192] hover:shadow-lg">
                    <div className=" py-2">
                      <div className="font-bold text-xl mb-2">
                        {event.title}
                      </div>
                      <hr />
                      <p className="text-white mt-2 text-base">
                        {event.description}
                      </p>
                    </div>
                    <div>
                      <div className="rounded-xl mt-1 bg-white w-fit p-0.5 items-center text-black font-bold flex flex-wrap">
                        &nbsp;
                        <MdLocationOn style={iconstyle} />
                        &nbsp;{event.location}&nbsp;&nbsp;
                      </div>
                    </div>
                    <div className="pt-2 mt-1 pb-2">
                      <Link href={`programs/${event.slug.current}`}>
                        <div key={event._id}>
                          <button className="bg-[#ED1C24] text-white p-2 rounded-2xl">
                            Learn More
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = `*[_type == "programs"] | order(_createdAt desc)`;
  const event = await sanityClient.fetch(query);

  if (!event.length) {
    return {
      props: {
        event: []
      }
    };
  } else {
    return {
      props: {
        event
      }
    };
  }
};
export default events;
