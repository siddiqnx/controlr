import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { HighestUsageTable } from './HighestUsageTable';

export const HighestUsage = ({ usage }) => {
  return (
    <section>
      <SectionHeader text='Highest Usage' level={2} />
      <HighestUsageTable usage={usage} />
    </section>
  )
}
