import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NavWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled(NavHashLink)`
  /* height: 80px; */
`;

export const LogoImage = styled.img`
  height: 30px;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  text-transform: capitalize;
  list-style: none;

  & li:last-child {
    margin-left: 30px;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    margin-right: -250px;
    background-color: rgba(250, 249, 246, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ navbarOpen = false }) =>
      navbarOpen ? "translate(-250px)" : "none"};
    transition: 0.3s ease-in-out;

    & li:last-child {
      margin-left: 0;
    }
  }
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const StyledLink = styled(NavHashLink)`
  color: black;
  text-decoration: none;
  font-weight: 300;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Burger = styled.div`
  width: 40px;
  height: 35px;
  overflow: hidden;
  position: absolute;
  top: 37px;
  right: 30px;
  transform: translateY(-50%);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;

  @media (max-width: 900px) {
    display: flex;
  }

  & input {
    display: flex;
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide input */
    z-index: 3; /* top of the menu */
    &:checked ~ #span1 {
      transform: translateY(50%) rotate(45deg);
    }
    &:checked ~ #span2 {
      transform: translateX(-100%);
      opacity: 0;
    }
    &:checked ~ #span3 {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
  & span {
    width: 35px;
    height: 3px;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    background-color: ${({ theme }) => theme.colors.black};
  }
  & #span1 {
    transform: translateY(-10px);
  }
  & #span3 {
    transform: translateY(10px);
  }
`;
