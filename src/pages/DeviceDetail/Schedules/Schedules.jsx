import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { ScheduleList } from './ScheduleList'
import PlusIcon from 'images/icons/Plus';
import { ActionButton } from 'components/Buttons/ActionButton';

const actionBtn = (
  <ActionButton link='/rooms'>
    <PlusIcon width='18px' height='18px' />
  </ActionButton>
);

export const Schedules = () => {
  return (
    <section>
      <SectionHeader text='Schedules' actionBtn={actionBtn} />
      <ScheduleList />
    </section>
  )
}

