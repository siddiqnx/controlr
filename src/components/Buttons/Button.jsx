import React from 'react'
import styled, { css } from 'styled-components';
import { tButtonLabel_0, tButtonLabel_s1, tLabel_0 } from 'style/typography';

const StyledButton = styled.button`
  all: unset;
  color: ${ ({ theme }) => theme.cAccebt1_200};
  border: 1px solid currentColor;
  border-radius: 28px;

  ${(props) => props.solid && css`
    border: none;
    background-color: ${({ theme }) => theme.cAccebt1_300};
    color: ${({ theme }) => theme.cPrimary_100};
  `}

  ${(props) => props.lg && css`
    ${tButtonLabel_0};
    padding: 12px 24px;
  `}

  ${(props) => props.md && css`
    ${tLabel_0};
    padding: 4px 16px;
  `}

  ${(props) => props.sm && css`
    ${tButtonLabel_s1};
    padding: 2px 8px;
  `}

`;

export const Button = ({
  sm = false,
  md = false,
  lg = false,
  icon = null,
  solid = false,
  children,
  onClick,
}) => {

  const ButtonIcon = icon;

  return (
    <StyledButton solid={solid} sm={sm} md={md} lg={lg} onClick={onClick}>
      {icon && <ButtonIcon />}
      {children}
    </StyledButton>
  )
}
