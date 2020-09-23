import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { ScheduleList } from './ScheduleList'
import PlusIcon from 'images/icons/Plus';
import { ActionButton } from 'components/Buttons/ActionButton';
import { useRouteMatch } from 'react-router-dom';


export const Schedules = () => {
  const { url } = useRouteMatch();

  const actionBtn = (
    <ActionButton link={`${url}/schedules/add`}>
      <PlusIcon width='18px' height='18px' />
    </ActionButton>
  );

  return (
    <section>
      <SectionHeader text='Schedules' actionBtn={actionBtn} />
      <ScheduleList />
    </section>
  )
}

