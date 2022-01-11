import { sanityClient } from "../../sanity";
import Image from "next/image";

const event = ({ title, distance, description, imageUrl }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "event" && slug.current == $pageSlug][0]{
        title
        
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
        title: event.title
      }
    };
  }
};

export default event;
