"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import useOutsideClickListener from "../hooks/useOutsideClickListener";
import NavLinkList from "./NavLinkList";

const NavSideMenu = ({
  isSideMenuOpen,
  toggleSideNavMenu,
}: {
  isSideMenuOpen: boolean;
  toggleSideNavMenu: () => void;
}) => {
  const overlayWrapperRef = useRef(null);
  const outsideClickTrigger = useOutsideClickListener(overlayWrapperRef);

  useEffect(() => {
    // Passing below as callback to useOutsideClickListener won't work as initial false state is captured upon closure
    if (isSideMenuOpen) {
      toggleSideNavMenu();
    }
  }, [outsideClickTrigger]);

  return (
    <aside
      ref={overlayWrapperRef}
      className={`fixed top-0 right-0 ${
        isSideMenuOpen ? "xs:w-100 w-4/5" : "w-0"
      } h-full overflow-x-hidden bg-sky-950 shadow-[-10px_0_15px_rgba(0,0,0,0.3)] transition-all duration-300`}
    >
      <div className="flex flex-col px-8">
        <header className="h-16 flex justify-end items-center">
          <XMarkIcon
            className="w-8 hover:cursor-pointer hover:stroke-green-300 transition-all duration-300"
            onClick={toggleSideNavMenu}
          />
        </header>
        <div>
          <NavLinkList showBurgerMenu={false} isMobileView />
        </div>
      </div>
    </aside>
  );
};

export default NavSideMenu;
