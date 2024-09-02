"use client";
import Link from "next/link";
import Image from "next/image";
import thunder from "../../public/svg/thunder.svg";

export default function TopNav() {
  const pages = [
    { name: "Galeria zdjęć", path: "/galery" },
    { name: "FaQ", path: "/faq" },
  ];

  return (
    <nav className="h-20 p-4">
      <div className="flex justify-between h-12 mx-36">
        <div className="flex  w-72 items-center">
          <div>
            <Image src={thunder} alt="Thunder logo" height={36} />
          </div>
          <div className="flex text-2xl font-bold">
            <div className="text-blue-700">Cars</div>
            <div>Spot</div>
          </div>
        </div>
        <div className="w-36 flex justify-evenly items-center">
          {pages.map((item, key) => (
            <Link key={key} href={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="w-72 flex justify-end">
          <button className="bg-blue-600 rounded-md px-5 py-2 text-white">
            Zadzwoń do nas
          </button>
        </div>
      </div>
    </nav>
  );
}
