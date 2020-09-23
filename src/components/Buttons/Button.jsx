import React from 'react'
import styled, { css } from 'styled-components';
import { tButtonLabel_0, tButtonLabel_s1, tLabel_0 } from 'style/typography';

const StyledButton = styled.button`
  color: ${ ({ theme }) => theme.cAccent1_200};
  border: 1px solid currentColor;
  border-radius: 28px;
  text-align: center;
  white-space: nowrap;

  .iconLeft {
    margin-right: 6px;
  }

  .iconRight {
    margin-left: 6px;
  }

  ${(props) => props.solid && css`
    border: none;
    background-color: ${({ theme }) => theme.cAccent1_300};
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
  icon: ButtonIcon = null,
  solid = false,
  iconLeft = false,
  iconRight = false,
  children,
  type = 'button',
  onClick,
}) => {

  return (
    <StyledButton type={type} solid={solid} sm={sm} md={md} lg={lg} onClick={onClick}>
      {ButtonIcon && iconLeft && <ButtonIcon className='iconLeft' />}
      {children}
      {ButtonIcon && iconRight && <ButtonIcon className='iconRight' />}
    </StyledButton>
  )
}
