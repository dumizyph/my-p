"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ManuSideBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <aside className="sidebar-left">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={pathname === item.path ? "active" : ""}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ManuSideBar;
