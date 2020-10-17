import Link from "next/link";
const LibraryHeader = () => {
  const list = ["articles", "armwrestling", "grip", "powerlifting", "records"];

  return (
    <div>
      <ul>
        {list.map((link) => {
          return (
            <li>
              <Link href={"/library/" + link}>
                <a>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LibraryHeader;
