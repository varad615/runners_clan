import { sanityClient } from "../../sanity";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const event = ({ title, distance, description, imageUrl }) => {
  const iconstyle = { color: "#fff", fontSize: "1.5em" };
  const iconback = { color: "#fff", fontSize: "1.5em" };
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={imageUrl}
              />
            </div>
            <button className="bg-[#2CD84D] -translate-y-4 p-2 rounded-3xl translate-x-4">
              <BsWhatsapp style={iconstyle} />
            </button>
            <div class="flex flex-col sm:flex-row mt-7">
              <div class="sm:pl-8 sm:py-3 sm:border-l border-[#ED1C24] sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p>
                  <span class="font-bold text-[#2E3192] text-2xl">{title}</span>
                </p>
                <p class="overscroll-none leading-relaxed mt-5 text-lg mb-2">
                  {description}
                </p>
                <p>
                  <span class="font-bold text-[#2E3192] text-xl">
                    Distance: {distance}&nbsp;Km
                  </span>
                </p>
                <a href="/events" class="inline-flex mt-6 items-center">
                  <button className="text-white flex flex-wrap bg-[#2E3192] p-1 rounded-xl pr-3 items-center">
                    <BiLeftArrowAlt style={iconback} /> &nbsp;Go Back
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "event" && slug.current == $pageSlug][0]{
        title,
        imageUrl,
        description,
        distance
        
    }`;
  const event = await sanityClient.fetch(query, { pageSlug });
  if (!event) {
    return {
      props: null,
      notFound: true
    };
  } else {
    return {
      props: {
        title: event.title,
        imageUrl: event.imageUrl,
        description: event.description,
        distance: event.distance
      }
    };
  }
};

export default event;
