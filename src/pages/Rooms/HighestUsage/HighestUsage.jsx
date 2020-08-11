import React from 'react'
import { HighestUsageTable } from './HighestUsageTable'
import { SectionHeader } from 'components/Headers/SectionHeader';

export const HighestUsage = () => {
  return (
    <>
      <SectionHeader
        className='sectionHeader'
        text='Highest Usage'
        level={2}
      />
      <HighestUsageTable />
    </>
  )
}
