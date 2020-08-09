import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { HighestUsageOverallTable } from './HighestUsageOverallTable';

export const HighestUsageOverall = () => {
  return (
    <section>
      <SectionHeader text='Highest Usage' level={2} />
      <HighestUsageOverallTable />
    </section>
  )
}
