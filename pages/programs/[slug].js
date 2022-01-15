import { sanityClient } from "../../sanity";

const program = ({ title }) => {
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

  const query = `*[_type == "programs" && slug.current == $pageSlug][0]{
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

export default program;
