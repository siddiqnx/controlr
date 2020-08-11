import React from 'react';
import { SectionHeader } from 'components/Headers/SectionHeader';
import { ScheduleList } from './ScheduleList';

export const Schedules = () => {
  return (
    <div>
      <SectionHeader text='Schedules' level={2} />
      <ScheduleList />
    </div>
  )
}
