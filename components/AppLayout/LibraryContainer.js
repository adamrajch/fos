import SideBar from "./SideBar";
import Nav from "./Nav";
// import LibraryHome from "../../pages/library";
const LibraryContainer = (props) => {
  console.log(props);
  return (
    <div className="flex lg:flex-column">
      <SideBar contents={props} />
      <div>Gozaimasu test</div>
    </div>
  );
};
export default LibraryContainer;
