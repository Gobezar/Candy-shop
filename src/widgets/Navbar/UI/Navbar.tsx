"use client";
import React, { ReactNode } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { navbarItems } from "../consts/navbarItems";
import ThemeSwitcher from "@/shared/ThemeSwitcher/UI/ThemeSwitcher";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import darklogo from "../../../../public/images/darklogo.png";
import cl from "./Navbar.module.scss";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { theme } = useTheme();

  const logoToShow = theme === "light" ? logo : darklogo;

  return (
    <nav>
      <div className={cl.navbar_wrapper}>
        <Link href={"/"}>
          <Image className={cl.navbar_logo} src={logoToShow} alt="logo" />
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
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
