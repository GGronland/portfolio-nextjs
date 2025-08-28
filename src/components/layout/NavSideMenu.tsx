import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import useOutsideClickListener from "../hooks/useOutsideClickListener";

const NavSideMenu = ({
  isSideMenuOpen,
  toggleSideNavMenu,
}: {
  isSideMenuOpen: boolean;
  toggleSideNavMenu: () => void;
}) => {
  const overlayWrapperRef = useRef(null);
  useOutsideClickListener(
    overlayWrapperRef,
    () => isSideMenuOpen && toggleSideNavMenu()
  );

  return (
    <aside
      ref={overlayWrapperRef}
      className={`fixed top-0 right-0 ${
        isSideMenuOpen ? "w-100" : "w-0"
      } h-full bg-sky-950 transition-all duration-300`}
    >
      <div className="flex flex-col px-8">
        <header className="h-16 flex justify-end items-center">
          <XMarkIcon
            className="w-8 hover:cursor-pointer hover:stroke-green-300 transition-all duration-300"
            onClick={toggleSideNavMenu}
          />
        </header>
        <div></div>
      </div>
    </aside>
  );
};

export default NavSideMenu;
