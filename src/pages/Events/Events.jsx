import React from 'react'
import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { EventGroupList } from './EventGroupList/EventGroupList';

export const Events = () => {
  return (
    <Container>
      <MainPageHeader text={'Events'} hamMenu />
      <EventGroupList />
    </Container>
  )
}

