import { useState } from "react";
import logo from "../../assets/logos/ProjArtBlack.png";
import Button from "../../components/Button/Button";
import {
  Wrapper,
  NavWrapper,
  LogoImage,
  LogoWrapper,
  StyledList,
  StyledLink,
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

        <div>
          <StyledList>
            <li>
              <StyledLink to="/projartweb#">strona główna</StyledLink>
            </li>
            <li>
              <StyledLink to="/projartweb#o-nas">o nas</StyledLink>
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
              <Button navigation>Zadzwoń teraz</Button>
            </li>
          </StyledList>
        </div>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navbar;
