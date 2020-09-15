import React from 'react'
import styled from 'styled-components'
import { GroupHeader } from 'components/Headers/GroupHeader';
import { RoomList } from './RoomList';
import groupByProperty from 'utils/groupByProperty';
import { fetchRoomList } from 'requests/rooms/fetchRoomList';
import { useQuery } from 'react-query';

const StyledList = styled.ul`
  .roomGroupHeader {
    margin: 28px 0 22px;
  }
`;

export const RoomGroupList = () => {
  const { data: rooms } = useQuery('rooms', fetchRoomList);

  let roomGroups = null;
  if (rooms)
    roomGroups = groupByProperty(rooms, 'room_group');

  return (
    <StyledList>
      {roomGroups && Object.entries(roomGroups).map(([roomGroup, rooms]) => (
        <li key={roomGroup}>
          <GroupHeader lined className='roomGroupHeader' text={rooms[0].room_group_name} />
          <RoomList rooms={rooms} />
        </li>
      ))}
    </StyledList>
  )
}
