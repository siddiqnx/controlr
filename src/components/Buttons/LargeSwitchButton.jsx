import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  text-align: center;
  margin: 0 auto;
  border-radius: 100%;
  color: ${({ theme, state }) => state ? theme.cPrimary_100 : theme.cPrimary_400};
  background: ${({ theme, state }) => state ? theme.cGradient_1 : theme.cPrimary_900};
  box-shadow: ${({ theme, state }) => state ? theme.bsShadow_2 : 'none'};
`;

export const LargeSwitchButton = ({
  className,
  width = '160px',
  icon: Icon,
  state,
  onClick
}) => {
  return (
    <StyledButton width={width} state={state} className={className} onClick={onClick}>
      <Icon width='60%' height='60%' />
    </StyledButton>
  )
}
