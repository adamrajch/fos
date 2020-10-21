import Link from "next/link";

const LibraryHeader = () => {
  const list = ["articles", "armwrestling", "grip", "powerlifting", "records"];

  return (
    <div className="text-gray-500">
      <ul className="flex justify-around">
        {list.map((link) => {
          return (
            <li>
              <Link href={"/library/" + link} key={link}>
                <a className="hover:text-white">
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LibraryHeader;
