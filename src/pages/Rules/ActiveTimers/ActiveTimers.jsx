import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { ActiveTimerList } from './ActiveTimerList'


export const ActiveTimers = () => {
  return (
    <section>
      <SectionHeader text='Active Timers' level={2} />
      <ActiveTimerList />
    </section>
  )
}
