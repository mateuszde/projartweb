import logo1 from "../../assets/logos/ProjArtBlack.png";
import logo2 from "../../assets/logos/ProjArtKrzysztofSmolnik.png";
import logo3 from "../../assets/logos/ksProjArtBlack.png";
import { Wrapper, NavWrapper, LogoImage, LogoWrapper } from "./style";

const Navbar = () => {
    return (
        <Wrapper>
            <NavWrapper>
                <LogoWrapper>
                    <LogoImage
                        src={logo1}
                        alt="Logo Proj-Art Krzysztof Smolnik"
                    />
                </LogoWrapper>
                <div>
                    <p>Lista</p>
                </div>
            </NavWrapper>
        </Wrapper>
    );
};

export default Navbar;
