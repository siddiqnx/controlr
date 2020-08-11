import React from 'react'
import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { RoomGroupList } from './RoomGroupList/RoomGroupList';
import { HighestUsage } from './HighestUsage/HighestUsage';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  .sectionHeader {
    margin-top: 48px;
    margin-bottom: 28px;
  }
`;

export const Rooms = () => {
  return (
    <StyledContainer>
      <MainPageHeader text={'Rooms'} hamMenu />
      <RoomGroupList />

      <HighestUsage />
    </StyledContainer>
  )
}

