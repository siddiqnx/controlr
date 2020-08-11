import React from 'react'
import { RecentInfoCard } from 'components/Cards/RecentInfoCard';
import { RecentStatsContainer } from 'components/SectionContainers/RecentStatsContainer';

export const RecentStatsList = ({ stats }) => {
  return (
    <RecentStatsContainer>
      {stats.map((stat, i) => (
        <li key={i}>
          <RecentInfoCard
            className='recentInfoCard'
            title={stat.period}
            value={stat.value}
            unit='U'
            width='112px'
          />
        </li>
      ))}
    </RecentStatsContainer>
  )
}
