import {
  StyledNavButton,
  StyledWhiteButton,
  StyledBlackButton,
  StyledTransparentButton,
} from "./style";
import { fetchFile } from "../../utilities/fetchFile";

const Button = ({
  children,
  navigation,
  white,
  black,
  downloadButton,
  transparent,
  downloadFile,
  ...props
}) => {
  return (
    <>
      {navigation && (
        <StyledNavButton {...props}>
          <p>{children}</p>
        </StyledNavButton>
      )}
      {white && (
        <StyledWhiteButton {...props}>
          <p>{children}</p>
        </StyledWhiteButton>
      )}
      {black && (
        <StyledBlackButton {...props}>
          <p>{children}</p>
        </StyledBlackButton>
      )}
      {transparent && (
        <StyledTransparentButton {...props}>
          <p>{children}</p>
        </StyledTransparentButton>
      )}
      {downloadButton && (
        <StyledBlackButton onClick={() => fetchFile(downloadFile)} {...props}>
          <p>{children}</p>
        </StyledBlackButton>
      )}
    </>
  );
};

export default Button;
