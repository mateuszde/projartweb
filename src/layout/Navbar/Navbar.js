import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../assets/logos/ProjArtBlack.png";
import Button from "../../components/Button/Button";
import {
  Wrapper,
  NavWrapper,
  LogoImage,
  LogoWrapper,
  StyledList,
  StyledLink,
  Burger,
} from "./style";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const checkbox = document.getElementById("checkbox");

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleTouch = () => {
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      handleToggle();
    }
  };

  return (
    <Wrapper>
      <NavWrapper>
        <LogoWrapper to="/projartweb#">
          <LogoImage src={logo} alt="Logo Proj-Art Krzysztof Smolnik" />
        </LogoWrapper>

        <div onClick={handleTouch}>
          <StyledList navbarOpen={navbarOpen}>
            <li>
              <StyledLink to="/projartweb#">strona główna</StyledLink>
            </li>
            <li>
              <StyledLink to="/projartweb#onas">o nas</StyledLink>
            </li>
            <li>
              <StyledLink to="/projartweb#oferta">oferta</StyledLink>
            </li>
            <li>
              <StyledLink to="/projartweb#realizacje">realizacje</StyledLink>
            </li>
            <li>
              <StyledLink to="/projartweb#kontakt">kontakt</StyledLink>
            </li>
            <li>
              <NavHashLink to="/projartweb#kontakt">
                <Button navigation>Zadzwoń teraz</Button>
              </NavHashLink>
            </li>
          </StyledList>
        </div>
        <Burger onClick={handleToggle}>
          <input type="checkbox" id="checkbox" />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </Burger>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navbar;
