"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { navbarItems } from "../consts/navbarItems";
import cl from "./Navbar.module.scss";

interface NavbarProps {
  children?: ReactNode;
}
const logo = "https://i.ibb.co/kDF8Zcf/image-4.png";

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav>
      <div className={cl.navbar_wrapper}>
        <Link href={"/"}>
          <img className={cl.navbar_logo} src={logo} alt="logo" />
        </Link>
        {children}
        <ul className={cl.navbar_items}>
          {navbarItems.map((item) => (
            <li key={item.id}>
              {item.address.startsWith("#") ? (
                <ScrollLink
                  to={item.address.slice(1)}
                  smooth={true}
                  duration={300}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link href={item.address}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
