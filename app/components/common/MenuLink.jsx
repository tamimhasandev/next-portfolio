"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }) {
  const pathname = usePathname();

  console.log(pathname, item.link);

  return (
    <li>
      <Link
        href={item.link}
        target={item.blank ? "_blank" : undefined}
        className={`${pathname === item.link ? "!text-accent !fill-accent" : ""} flex justify-center items-center gap-2 text-gray-300`}
      >
        {item.icon}
        <span className="font-semibold">{item.name}</span>
      </Link>
    </li>
  );
}
