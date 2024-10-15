import styled from "styled-components";

export const StyledNavButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 48px;
  padding: 16px 24px;
  font-size: 14px;
  /* font-weight: 700; */
  font-weight: bold;
  line-height: 1;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-3px);
  }
`;

export const StyledWhiteButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 48px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    /* border: 1px solid ${({ theme }) => theme.colors.black}; */
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
  }
`;

export const StyledBlackButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 48px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-3px);
  }
`;
