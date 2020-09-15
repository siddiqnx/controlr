import React from 'react'
import styled from 'styled-components'
import { tHeading1_s1 } from 'style/typography';

const Heading = styled.h1`
  ${tHeading1_s1};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.cAccent1_200};
`;

export const FormHeader = ({ subject, title }) => {
  return (
    <>
      <Heading>{subject} <Highlight>{title}</Highlight></Heading>
    </>
  )
}
