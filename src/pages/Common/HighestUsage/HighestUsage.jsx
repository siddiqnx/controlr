import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { HighestUsageTable } from './HighestUsageTable';

export const HighestUsage = ({
  title,
  usageData,
  description
}) => {
  return (
    <section>
      <SectionHeader description={description} text={title} level={2} />
      <HighestUsageTable usageData={usageData} />
    </section>
  )
}
