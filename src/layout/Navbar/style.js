import styled from "styled-components";

export const Wrapper = styled.nav`
  /* position: fixed;
    top: 0;
    left: 0; */
  width: 100%;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const NavWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
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
`;

export const ListItem = styled.li`
  text-decoration: none;
`;
