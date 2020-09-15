import React from 'react'
import { RecentInfoCard } from 'components/Cards/RecentInfoCard';
import { RecentUsageContainer } from 'components/SectionContainers/RecentUsageContainer';
import { Duration } from 'luxon';

export const RecentUsageList = ({ recentUsage }) => {
  return (
    <RecentUsageContainer>
      {recentUsage.map((usage) => {
        const durationObj = Duration.fromISO(usage.duration).toObject();
        const durationUnit = Object.keys(durationObj)[0];

        let title = `Past ${durationObj[durationUnit]} ${durationUnit}`

        if (durationObj[durationUnit] === 1)
          title = title.slice(0, -1)

        return (<li key={usage.duration}>
          <RecentInfoCard
            className='recentInfoCard'
            title={title}
            value={(usage.usage / 1000).toFixed(1)}
            unit='U'
            width='112px'
          />
        </li>)
      })}
    </RecentUsageContainer>
  )
}
