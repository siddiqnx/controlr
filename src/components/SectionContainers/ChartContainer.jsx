import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 -24px;
`;

export const ChartContainer = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
