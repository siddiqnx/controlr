import React from 'react'
import styled from 'styled-components'
import { RecentInfoCard } from 'components/Cards/RecentInfoCard';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-left: -24px;
  margin-right: -24px;

  .recentInfoCard {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const RecentStatsList = () => {
  return (
    <StyledList>
      <li>
        <RecentInfoCard
          className='recentInfoCard'
          title='Today'
          value={1.13}
          unit='U'
          width='112px'
        />
      </li>
      <li>
        <RecentInfoCard
          className='recentInfoCard'
          title='Last 7 days'
          value={8.13}
          unit='U'
          width='112px'
        />
      </li>
      <li>
        <RecentInfoCard
          className='recentInfoCard'
          title='Last 30 days'
          value={80.13}
          unit='U'
          width='112px'
        />
      </li>
      <li>
        <RecentInfoCard
          className='recentInfoCard'
          title='Last 60 days'
          value={150.13}
          unit='U'
          width='112px'
        />
      </li>
    </StyledList>
  )
}
