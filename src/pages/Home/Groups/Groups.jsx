import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { Button } from 'components/Buttons/Button';
import { GroupList } from './GroupList';
import { ActionButton } from 'components/Buttons/ActionButton';
import PlusIcon from 'images/icons/Plus';

const actionBtn = (
  <ActionButton link='/groups/add'>
    <PlusIcon width='20px' height='20px' />
  </ActionButton>
)

export const Groups = () => {
  return (
    <section>
      <SectionHeader
        className='sectionHeader'
        text='Groups'
        level={2}
        actionBtn={actionBtn}
      />

      <GroupList />
    </section>
  )
}
