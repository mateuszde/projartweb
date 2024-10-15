import { StyledNavButton, StyledWhiteButton, StyledBlackButton } from "./style";

const Button = ({ children, navigation, white, black }) => {
  return (
    <>
      {navigation && <StyledNavButton>{children}</StyledNavButton>}
      {white && <StyledWhiteButton>{children}</StyledWhiteButton>}
      {black && <StyledBlackButton>{children}</StyledBlackButton>}
    </>
  );
};

export default Button;
