"use client";

import { Button } from "@/components/ui/button";
import { NavItems } from "../data/navItems";
import Image from "next/image";
import { Mail, MessageCircle, Phone, ChevronDown } from "lucide-react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);

  return (
    <>
      <div className="flex justify-between items-center px-24 bg-blue-900 p-2.5 text-white font-bold text-sm">
        <h2>OQOOD AL BALAD FACTORY</h2>
        <div className="flex justify-between items-center gap-6">
          <p className="flex gap-2 items-center">
            <MessageCircle /> +966 0553394387
          </p>
          <p className="flex gap-2 items-center">
            <Mail /> +966 0553394387
          </p>
          <p className="flex gap-2 items-center">
            <Phone /> +966 0553394387
          </p>
        </div>
      </div>
      <nav className="flex flex-col text-white w-full font-bold text-sm border-blue-900 border-b-[6px] sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center px-24 py-2.5">
          <Image src={logo} alt="Oqood" width={100} />
          <div className="flex gap-4">
            {NavItems.map((nav) => (
              <div
                key={nav.name}
                className="relative"
                onMouseEnter={() => nav.submenu && setDropdownVisible(nav.name)}
                onMouseLeave={() => nav.submenu && setDropdownVisible(null)}
              >
                <Link href={nav.href}>
                  <Button
                    variant={"ghost"}
                    className="text-black/80 font-bold hover:bg-red-500 transition flex items-center"
                  >
                    {nav.name}
                    {nav.submenu && <ChevronDown className="ml-1" />}
                  </Button>
                </Link>

                {/* Dropdown menu */}
                {nav.submenu && dropdownVisible === nav.name && (
                  <div className="absolute left-0 w-fit bg-blue-900 rounded-lg shadow-lg z-50">
                    {nav.submenu.map((subnav) => (
                      <Link key={subnav.name} href={subnav.href}>
                        <Button
                          variant={"ghost"}
                          className="w-full text-white font-normal hover:bg-red-500 transition px-4 py-2"
                        >
                          {subnav.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
