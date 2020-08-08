import React from 'react'
import { MainPageHeader } from 'components/MainPageHeader/MainPageHeader';
import { Container } from 'components/Container/Container';

export const Home = () => {
  return (
    <Container>
      <MainPageHeader text={'Albrin\'s Home'} hamMenu />
    </Container>
  )
}
