import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #f2f2f2;
  padding: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const NavMenu = styled.ul.attrs((props: any) => ({
    isMenuOpen: props.isMenuOpen,
  }))`
    display: flex;
    flex-direction: row; /* Update: Arrange items horizontally */
    list-style: none;
  
    @media (max-width: 768px) {
      flex-direction: column; /* Update: Arrange items vertically on smaller screens */
      display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')}; /* Update: Show/hide menu based on isMenuOpen prop */
    }
  `;
  

export const NavItem = styled.li`
  margin-right: 10px;
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    span {
      height: 3px;
      width: 25px;
      background-color: #333;
      margin-bottom: 4px;
    }
  }
`;
