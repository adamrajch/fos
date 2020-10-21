import LibraryContainer from "../../../components/AppLayout/LibraryContainer";
import SideBar from "../../../components/AppLayout/ResSide";
const GripHome = () => {
  const cats = [
    { title: "Nail Bending", href: "/grip/nails" },
    { title: "Grippers", href: "/grip/grippers" },
    { title: "FAQs", href: "/grip/faqs" },
  ];
  return (
    // <div className="flex flex-col lg:flex-row w-full items-center">
    <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-4 gap-2">
      <SideBar content={cats} className="col-span-2" />
      <div className=" text-center col-span-3">
        <h1>Content TItle</h1>
        <div>
          hello asjdhfksjda lkajsdflksdjalsdjflkjfdsklalsjdlksjldk
          asjdlkfjlaskdjf lkj ljlk sdfsdf
        </div>
        <div>
          hello asjdhfksjda lkajsdflksdjalsdjflkjfdsklalsjdlksjldk
          asjdlkfjlaskdjf lkj ljlk sdfsdf
        </div>
        <div>
          hello asjdhfksjda lkajsdflksdjalsdjflkjfdsklalsjdlksjldk
          asjdlkfjlaskdjf lkj ljlk sdfsdf
        </div>
        <div>hello</div>
      </div>
    </div>
  );
};
export default GripHome;
