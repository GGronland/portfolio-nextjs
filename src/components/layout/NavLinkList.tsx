"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bars3BottomRightIcon,
  BeakerIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HomeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import NavSideMenu from "./NavSideMenu";

type Link = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const NavLinkList = ({}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const navLinks: Link[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: IdentificationIcon },
    { name: "Resume", href: "/resume", icon: DocumentTextIcon },
    { name: "Projects", href: "/projects", icon: BeakerIcon },
    { name: "Contact", href: "/contact", icon: EnvelopeIcon },
  ];

  const pathName = usePathname();

  const toggleSideNavMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => {
          const LinkIcon = link.icon;

          return (
            <Link
              key={link.name}
              className={
                "group font-semibold cursor-pointer no-underline transition-all duration-800 hover:text-green-300 " +
                (pathName === link.href ? " text-green-300" : "")
              }
              href={link.href}
            >
              <div className="flex items-center gap-1.5 py-1">
                {LinkIcon && <LinkIcon className="w-6" />}
                {link.name}
              </div>

              <span
                className={
                  "block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-green-300 " +
                  (pathName === link.href ? " max-w-full" : "")
                }
              />
            </Link>
          );
        })}
      </div>

      <Bars3BottomRightIcon
        className="w-8 md:hidden hover:cursor-pointer hover:stroke-green-300 transition-all duration-300"
        onClick={toggleSideNavMenu}
      />

      <NavSideMenu
        isSideMenuOpen={isSideMenuOpen}
        toggleSideNavMenu={toggleSideNavMenu}
      />
    </nav>
  );
};

export default NavLinkList;
