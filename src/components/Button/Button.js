import {
  StyledNavButton,
  StyledWhiteButton,
  StyledBlackButton,
  StyledTransparentButton,
} from "./style";

const Button = ({ children, navigation, white, black, transparent }) => {
  return (
    <>
      {navigation && (
        <StyledNavButton>
          <p>{children}</p>
        </StyledNavButton>
      )}
      {white && (
        <StyledWhiteButton>
          <p>{children}</p>
        </StyledWhiteButton>
      )}
      {black && (
        <StyledBlackButton>
          <p>{children}</p>
        </StyledBlackButton>
      )}
      {transparent && (
        <StyledTransparentButton>
          <p>{children}</p>
        </StyledTransparentButton>
      )}
    </>
  );
};

export default Button;
