import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { Button } from 'components/Buttons/Button';
import { GroupList } from './GroupList';


export const Groups = () => {
  return (
    <section>
      <SectionHeader
        className='sectionHeader'
        text='Groups'
        level={2}
        actionBtn={<Button sm>Open</Button>}
      />

      <GroupList />
    </section>
  )
}
