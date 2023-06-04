"use client"

import { NavbarContainer, NavbarLink, NavbarLinks, NavbarLogo } from "@/styles/Component.styled";
import { useState } from "react";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavbarContainer>
    <Link legacyBehavior href="/">
      <NavbarLogo>Logo</NavbarLogo>
    </Link>
    <button onClick={toggleNavbar}>
      {isOpen ? 'Close' : 'Menu'}
    </button>
    <NavbarLinks isOpen={isOpen}>
      <NavbarLink>
        <Link legacyBehavior href="/about">
          <span>About</span>
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link href="/services">
          <span>Services</span>
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link legacyBehavior href="/contact">
          <span>Contact</span>
        </Link>
      </NavbarLink>
    </NavbarLinks>
  </NavbarContainer>
  )
}

export default Navbar;