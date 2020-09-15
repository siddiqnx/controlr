import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { TimersList } from './TimersList'
import PlusIcon from 'images/icons/Plus';
import { ActionButton } from 'components/Buttons/ActionButton';

const actionBtn = (
  <ActionButton link='/rooms'>
    <PlusIcon width='18px' height='18px' />
  </ActionButton>
);

export const Timers = () => {
  return (
    <section>
      <SectionHeader text='Timers' actionBtn={actionBtn} />
      <TimersList />
    </section>
  )
}
