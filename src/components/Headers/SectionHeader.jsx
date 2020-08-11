import React from 'react'
import styled from 'styled-components'
import { tHeading2_0, tText_s1_n } from 'style/typography';
const StyledSectionHeader = styled.header`

  margin-bottom: 28px;
  margin-top: 34px;

  .headerGroup {
    display: flex;
    justify-content: space-between;
    ${tHeading2_0};
    color: ${({ theme }) => theme.cPrimary_400};
    margin-bottom: 6px;
  }

  .description {
    ${tText_s1_n};
    color: ${({ theme }) => theme.cPrimary_500}
  }
`;

export const SectionHeader = ({
  level = 2,
  text,
  description,
  actionBtn,
  className
}) => {
  const H = 'h' + level;
  return (
    <StyledSectionHeader className={className}>
      <div className='headerGroup'>
        <H>{text}</H>
        {actionBtn && actionBtn}
      </div>
      {description && <p className='description'>{description}</p>}
    </StyledSectionHeader>
  )
}
