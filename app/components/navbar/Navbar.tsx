"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import koshkableLogo from "../../assets/koshkable.png";
import { NavLinks } from "@/app/constants";
import AuthProviders from "../providers/AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 gap-10 flexStart">
        <Link href={"/"}>
          <Image
            src={koshkableLogo}
            alt="Koshkable Logo"
            width={0}
            height={0}
            className="w-[120px] lg:w-[200px]"
          />
        </Link>
        <ul className="hidden gap-5 text-sm xl:flex">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="p-2 transition-all duration-200 ease-in-out rounded-md hover:bg-slate-500 hover:text-white"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="gap-4 flexCenter">
        {session ? (
          <>
            UserPhoto
            <Link
              href={"/create-project"}
              className="p-2 text-sm transition-all duration-200 ease-in-out rounded-md hover:bg-slate-500 hover:text-white"
            >
              Share your work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
