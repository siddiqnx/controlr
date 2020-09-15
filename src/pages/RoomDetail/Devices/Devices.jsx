import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { DeviceList } from './DeviceList'

export const Devices = ({ devices, title = 'Devices', description }) => {
  return (
    <section>
      <SectionHeader
        text={title}
        description={description}
        level={2}
      />
      <DeviceList devices={devices} />
    </section>
  )
}
