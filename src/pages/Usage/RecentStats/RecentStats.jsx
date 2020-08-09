import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { RecentStatsList } from './RecentStatsList';

export const RecentStats = () => {
  return (
    <section>
      <SectionHeader
        level={2}
        text='Recent'
      />
      <RecentStatsList />
    </section>
  )
}
