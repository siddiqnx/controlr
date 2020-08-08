import React from 'react'
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 38px 24px;
`;

export const Container = ({ children }) => {
  return (
    <ContainerDiv>
      {children}
    </ContainerDiv>
  )
}
