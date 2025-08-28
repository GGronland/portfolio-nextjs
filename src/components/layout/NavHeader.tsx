import Image from "next/image";
import NavLinkList from "./NavLinkList";

const NavHeader = () => {
  return (
    <div className="sticky top-0 z-1 flex justify-between items-center h-16 px-8 shadow-lg bg-gray-800">
      <div>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <NavLinkList />
    </div>
  );
};

export default NavHeader;
