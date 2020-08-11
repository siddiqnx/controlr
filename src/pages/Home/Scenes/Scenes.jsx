import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { SceneList } from './SceneList';
import { Button } from 'components/Button/Button';

export const Scenes = () => {
  return (
    <section>
      <SectionHeader
        className='sectionHeader'
        text='Scenes'
        level={2}
        actionBtn={<Button sm>Open</Button>}
        description='Click on a scene to activate it'
      />

      <SceneList />
    </section>
  )
}
