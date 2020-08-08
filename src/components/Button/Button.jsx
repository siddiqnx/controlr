import React from 'react'
import styled from 'styled-components';
import { tButtonLabel_0, tButtonLabel_s1, tLabel_0 } from 'style/typography';

const StyledButton = styled.button`
  all: unset;
  color: ${({ solid }) => (solid ? ({ theme }) => theme.cPrimary_400 : ({ theme }) => theme.cAccent1_100)};
  ${(props) => (props.lg ? tButtonLabel_0 : (props.md ? tLabel_0 : (props.sm ? tButtonLabel_s1 : '12px')))};
  border: ${({ solid }) => (!solid && '1px solid currentColor')};
  border-radius: 28px;
  padding: ${(props) => (props.lg ? '12px 24px' : props.md ? '4px 16px' : props.sm ? '2px 8px' : 0)};
  background-color: ${({ solid }) => (solid && 'currentColor')};
`;

export const Button = ({ sm = false, md = false, lg = false, icon = null, variant = 'primary', solid = false, children, onClick }) => {
  const ButtonIcon = icon;

  return (
    <StyledButton sm={sm} md={md} lg={lg} onClick={onClick}>
      {icon && <ButtonIcon />}
      {children}
    </StyledButton>
  )
}
