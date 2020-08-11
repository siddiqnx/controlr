import React from 'react'
import styled, { css } from 'styled-components'
import { tHeadingGroup } from 'style/typography';

const StyledHeader = styled.header`
  padding-bottom: 12px;
  color: ${({ theme }) => theme.cPrimary_600};
  ${tHeadingGroup};

  ${({ lined }) => lined && css`
    border-bottom: 1px solid ${({ theme }) => theme.cPrimary_650};
  `};
  
`;

export const GroupHeader = ({ text, className, lined = false }) => {
  return (
    <StyledHeader className={className} lined={lined}>
      <h2>{text}</h2>
    </StyledHeader>
  )
}
