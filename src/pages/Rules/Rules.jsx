import React from 'react'
import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { ActiveTimers } from './ActiveTimers/ActiveTimers';
import { Schedules } from './Schedules/Schedules';

export const Rules = () => {
  return (
    <Container>
      <MainPageHeader text={'Rules'} hamMenu />
      <ActiveTimers />
      <Schedules />
    </Container>
  )
}
