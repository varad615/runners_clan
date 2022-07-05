import Link from "next/link";

const Navbar = () => {
  return (
    <div className="m-2">
      <nav className="flex rounded-xl items-center justify-between flex-wrap bg-[#2E3192] p-3">
        <div className="flex items-center flex-wrap text-white mr-6">
          <h1 className="font-medium mr-3">Runner&apos;s Clan CMS</h1>
          <Link href="/cms/new">
            <button className="text-white bg-[#F04148] p-3 rounded-lg mx-2 my-2">
              Create Event
            </button>
          </Link>
          <Link href="/cms/upcoming">
            <button className="text-white bg-[#F04148] p-3 rounded-lg mx-2">
              Upcoming Events
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
