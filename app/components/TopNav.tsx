"use client";
import Link from "next/link";
import Image from "next/image";
import thunder from "../../public/svg/thunder.svg";
import { useState } from "react";

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = [
    { name: "Galeria zdjęć", path: "/galery" },
    { name: "FaQ", path: "/faq" },
  ];

  return (
    <nav className="h-20 p-4 bg-red-500">
      <div className="flex justify-between h-12 md:mx-36">
        <div className="flex w-72 items-center">
          <div>
            <Image src={thunder} alt="Thunder logo" height={36} />
          </div>
          <div className="flex text-2xl font-bold">
            <div className="text-blue-700">Cars</div>
            <div>Spot</div>
          </div>
        </div>
        <div className="hidden w-36 md:flex justify-evenly items-center">
          {pages.map((item, key) => (
            <Link key={key} href={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden w-72 md:flex justify-end">
          <button className="bg-blue-600 rounded-md px-5 py-2 text-white">
            Zadzwoń do nas
          </button>
        </div>
        <div className="md:hidden bg-red-300">burger</div>
      </div>
    </nav>
  );
}
