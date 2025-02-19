import React from 'react'
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 38px 24px 80px;
`;

export const Container = ({ children, className }) => {
  return (
    <ContainerDiv className={className}>
      {children}
    </ContainerDiv>
  )
}
