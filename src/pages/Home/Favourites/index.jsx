import React from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader';
import { Button } from 'components/Button/Button'
import { FavouriteList } from './FavouriteList';

export const Favourites = () => {
  return (
    <section>
      <SectionHeader
        className='sectionHeader'
        text='Favourites'
        level={2}
        description='Add a device to favourites to see it here.'
      />

      <FavouriteList />
    </section>
  )
}
