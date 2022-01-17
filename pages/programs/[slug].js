import { sanityClient } from "../../sanity";
import { MdLocationOn } from "react-icons/md";
import { BiLeftArrowAlt } from "react-icons/bi";

const program = ({ title, description, location }) => {
  const iconstyle = { color: "#ED1C24", fontSize: "1em" };
  const iconback = { color: "#fff", fontSize: "1.5em" };
  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <h1 className="text-7xl font-bold text-[#2E3192]">{title}</h1>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:pl-8 sm:py-4 sm:border-l border-[#ED1C24] sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="pb-4 ">
                    <div className="rounded-xl mt-1 bg-white w-fit p-0.5 items-center text-black font-bold flex flex-wrap">
                      &nbsp;
                      <MdLocationOn style={iconstyle} />
                      &nbsp;{location}&nbsp;&nbsp;
                    </div>
                  </p>
                  <p class="leading-relaxed text-lg mb-4">{description}</p>

                  <a href="/programs" class="inline-flex mt-6 items-center">
                    <button className="text-white flex flex-wrap bg-[#2E3192] p-1 rounded-xl pr-3 items-center">
                      <BiLeftArrowAlt style={iconback} /> &nbsp;Go Back
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "programs" && slug.current == $pageSlug][0]{
        title,
        description,
        location
        
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
        description: event.description,
        location: event.location
      }
    };
  }
};

export default program;
