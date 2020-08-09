import React from 'react'
import styled from 'styled-components'
import { tHeadingGroup } from 'style/typography';

const StyledHeader = styled.header`
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.cPrimary_650};
  color: ${({ theme }) => theme.cPrimary_600};
  ${tHeadingGroup};
`;

export const RoomGroupHeader = ({ children, className }) => {
  return (
    <StyledHeader className={className}>
      <h2>{children}</h2>
    </StyledHeader>
  )
}
