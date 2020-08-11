import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { DeviceList } from './DeviceList'

export const Devices = () => {
  return (
    <section>
      <SectionHeader
        text='Devices'
        level={2}
      />
      <DeviceList />
    </section>
  )
}
