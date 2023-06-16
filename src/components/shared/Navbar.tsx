"use client";

import {
  Navbar,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
} from "@/styles/Navbar.styled";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <NavContainer>
        <NavLogo href="#">Logo</NavLogo>
        <HamburgerIcon onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </NavContainer>
      <NavMenu>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
      </NavMenu>
    </Navbar>
  );
};

export default ResponsiveNavbar;
