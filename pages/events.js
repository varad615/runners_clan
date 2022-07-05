import { sanityClient } from "../sanity";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
function events({ event }) {
  console.log(event);
  return (
    <div>
      <div className="absolute top-3 left-3">
        <Link href="/">
          <button className="fixed bg-[#ED1C24] text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <HiHome />
          </button>
        </Link>
      </div>
      <img src="/eventbg.png" alt="event" className="bg-cover" />
      <div className="bg-[#2E3192]">
        <div>
          {event && (
            <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {event.map((event) => (
                <div key={event._id} className="card">
                  <div className="rounded-xl overflow-hidden transition border-2 bg-white hover:shadow-lg">
                    <img
                      className="lg:h-48 md:h-36 sm:h-[230px] h-[230px] w-full p-1 rounded-xl object-cover object-center"
                      src={event.imageUrl}
                      alt="Mountain"
                    />
                    <div className="px-3 py-2">
                      <div className="font-bold text-xl mb-2">
                        {event.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {event.description}
                      </p>
                    </div>
                    <div className="px-3 pt-2 pb-2">
                      <Link href={`events/${event.slug.current}`}>
                        <div key={event._id}>
                          <button className="bg-[#2E3192] text-white p-2 rounded">
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
  const query = `*[_type == "event"] | order(_createdAt desc)`;
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
