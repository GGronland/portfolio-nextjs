"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BeakerIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HomeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Link = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const NavbarHeader = () => {
  const navLinks: Link[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: IdentificationIcon },
    { name: "Resume", href: "/resume", icon: DocumentTextIcon },
    { name: "Projects", href: "/projects", icon: BeakerIcon },
    { name: "Contact", href: "/contact", icon: EnvelopeIcon },
  ];

  const pathName = usePathname();

  return (
    <div className="sticky top-0 flex justify-between items-center h-16 px-8 shadow-lg bg-gray-800">
      <div>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <nav className="flex space-x-8">
        {navLinks.map((link) => {
          const LinkIcon = link.icon;

          return (
            <Link
              key={link.name}
              className={
                "group font-semibold cursor-pointer transition-all duration-800 hover:text-green-300 " +
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
      </nav>
    </div>
  );
};

export default NavbarHeader;
