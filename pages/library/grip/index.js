import LibraryContainer from "../../../components/AppLayout/LibraryContainer";
import Side from "../../../components/AppLayout/SideBar";
import SideBar from "../../../components/AppLayout/ResSide";
const GripHome = () => {
  const cats = [
    { title: "Nail Bending", href: "/grip/nails" },
    { title: "Grippers", href: "/grip/grippers" },
    { title: "FAQs", href: "/grip/faqs" },
  ];
  return (
    <div className="flex flex-col lg:flex-row w-full items-center">
      <SideBar content={cats} />
      {/* <div className="hidden lg:block w-1/4 flex flex-col">
        Hello <div>hi</div>
      </div> */}
    </div>
  );
};
export default GripHome;
