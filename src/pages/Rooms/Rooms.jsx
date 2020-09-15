import React, { useState, useEffect } from 'react'
import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { RoomGroupList } from './RoomGroupList/RoomGroupList';
import { HighestUsage } from 'pages/Common/HighestUsage/HighestUsage';
import styled from 'styled-components';
import { ActionButton } from 'components/Buttons/ActionButton';
import AddIcon from 'images/icons/Plus';
import { useMutation, queryCache } from 'react-query';
import { fetchRoomsUsageList } from 'requests/usage/fetchRoomsUsageList';
import { DateTime, Duration } from 'luxon';


const StyledContainer = styled(Container)`
  .sectionHeader {
    margin-top: 48px;
    margin-bottom: 28px;
  }
`;

const actionBtn = (
  <ActionButton link='/rooms/add'>
    <AddIcon width='20px' height='20px' />
  </ActionButton>
);

export const Rooms = () => {
  const [roomsUsageList, setRoomsUsageList] = useState(queryCache.getQueryData('roomsUsageList'));
  const [getRoomsUsageList] = useMutation(fetchRoomsUsageList, {
    onSuccess: (data) => {
      queryCache.setQueryData('roomsUsageList', data);
      setRoomsUsageList(data);
    }
  });

  useEffect(() => {
    getRoomsUsageList({
      startTs: DateTime.utc().minus(Duration.fromObject({ days: 7 })).toISO(),
      endTs: DateTime.utc().toISO(),
    })
  }, []);


  return (
    <StyledContainer>
      <MainPageHeader text={'Rooms'} hamMenu actionBtn={actionBtn} />
      <RoomGroupList />
      <HighestUsage title='Highest Usage' description='Highest energy usage data of rooms during the last 7 days' usageData={roomsUsageList} />
    </StyledContainer>
  )
}

