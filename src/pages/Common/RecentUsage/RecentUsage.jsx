import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { RecentUsageList } from 'pages/Common/RecentUsage/RecentUsageList';


export const RecentUsage = ({ recentUsage }) => {
  return (
    <section>
      <SectionHeader
        level={2}
        text='Recent'
      />
      <RecentUsageList recentUsage={recentUsage} />
    </section>
  )
}
