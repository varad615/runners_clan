import { sanityClient } from "../sanity";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
function events({ event }) {
  console.log(event);
  return (
    /*<div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded overflow-hidden shadow-lg">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://i.pinimg.com/736x/4c/09/9f/4c099f4fdde6b4bc7a2561245f4a7286.jpg"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mountain</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-2 pb-2">
            <button className="bg-[#2E3192] text-white p-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>*/

    <div>
      <div className="absolute top-3 left-3">
        <a href="/">
          <button className="fixed bg-[#ED1C24] text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <HiHome />
          </button>
        </a>
      </div>
      <img src="/eventbg.png" alt="event" className="bg-cover" />
      <div className="bg-[#2E3192]">
        {" "}
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
