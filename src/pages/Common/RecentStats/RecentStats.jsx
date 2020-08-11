import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { RecentStatsList } from 'pages/Common/RecentStats/RecentStatsList';

export const RecentStats = ({ recentStats }) => {
  return (
    <section>
      <SectionHeader
        level={2}
        text='Recent'
      />
      <RecentStatsList stats={recentStats} />
    </section>
  )
}
