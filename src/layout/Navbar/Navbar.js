import logo1 from "../../assets/logos/ProjArtBlack.png";
import Button from "../../components/Button/Button";
import {
  Wrapper,
  NavWrapper,
  LogoImage,
  LogoWrapper,
  StyledList,
} from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <NavWrapper>
        <LogoWrapper>
          <LogoImage src={logo1} alt="Logo Proj-Art Krzysztof Smolnik" />
        </LogoWrapper>

        <div>
          <StyledList>
            <li>
              <p>strona główna</p>
            </li>
            <li>
              <p>oferta</p>
            </li>
            <li>
              <p>realizacje</p>
            </li>
            <li>
              <p>kontakt</p>
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
