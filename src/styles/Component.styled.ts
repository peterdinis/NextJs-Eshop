import styled from "styled-components";

/* Navbar styles */

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
`;

export const NavbarLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const NavbarLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  ${({ isOpen }) => isOpen && `display: flex;`}
`;

export const NavbarLink = styled.li`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 0;
  }
`;