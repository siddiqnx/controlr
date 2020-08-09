import React from 'react'
import styled from 'styled-components'
import { tText_l4_b, tText_0_n } from 'style/typography';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.cPrimary_650};
  border-left: none;
  width: ${({ width }) => width};
  padding: 22px 5px;

  .value {
    ${tText_l4_b};
  }

  .unit {
    ${tText_0_n};
    color: ${({ theme }) => theme.cPrimary_400};
  }

  .title {
    color: ${({ theme }) => theme.cPrimary_500};
    margin-top: 8px;
  }
`;

export const RecentInfoCard = ({
  width = '100%',
  unit = 'U',
  title,
  value,
  className
}) => {
  return (
    <StyledCard width={width} className={className}>
      <div className='value'>{value}<span className='unit'>{unit}</span></div>
      <div className='title'>{title}</div>
    </StyledCard>
  )
}
