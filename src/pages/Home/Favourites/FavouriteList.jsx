import React from 'react'
import styled from 'styled-components';
import Generic from 'images/deviceIcons/Generic';
import { FavouriteCard } from 'components/Cards/FavouriteCard';

const favourites = [
  {
    deviceName: 'Air Conditioner',
    room: 'Living Room',
    icon: Generic,
    state: true,
  },
  {
    deviceName: 'Fan',
    room: 'Bedroom',
    icon: Generic,
    state: false,
  },
  {
    deviceName: 'Bed Lamp',
    room: 'Bedroom',
    icon: Generic,
    state: true,
  },
  {
    deviceName: 'TV',
    room: 'Living Room',
    icon: Generic,
    state: false,
  },
];

const StyledList = styled.ul`
  display: flex;
  margin: 0 -24px;
  flex-wrap: nowrap;
  overflow-x: auto;

`;

export const FavouriteList = ({ className }) => {
  return (
    <StyledList className={className}>
      {favourites.map((device, i) => (
        <li key={i}>
          <FavouriteCard
            className='favouriteCard'
            title={device.deviceName}
            state={device.state}
            subtitle={device.room}
            width='150px'
            icon={device.icon}
            link='/rooms'
          />
        </li>
      ))}
    </StyledList>
  )
}
