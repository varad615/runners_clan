export default function Upcoming({ upcomingevents }) {
  console.log(upcomingevents);
  return <div>This is the upcoming page</div>;
}

Upcoming.getInitialProps = async () => {
  const res = await fetch("https://runners-clan.vercel.app/api/posts");
  const { data } = await res.json();

  return { notes: data };
};
