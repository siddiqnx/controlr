import React from 'react'
import Generic from 'images/deviceIcons/Generic';
import styled from 'styled-components';
import { DeviceCard } from 'components/Cards/DeviceCard';

const devices = [
  {
    deviceName: 'Air Conditioner',
    icon: Generic,
    state: true,
  },
  {
    deviceName: 'Television',
    icon: Generic,
    state: false,
  },
  {
    deviceName: 'Fan',
    icon: Generic,
    state: true,
  },
  {
    deviceName: 'Bed Lamp',
    icon: Generic,
    state: true,
  },
  {
    deviceName: ' Light',
    icon: Generic,
    state: false,
  },
];

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  grid-gap: 8px;
`;

export const DeviceList = () => {
  return (
    <StyledList>
      {devices.map((device, i) => (
        <li key={i}>
          <DeviceCard
            {...device}
          />
        </li>
      ))}
    </StyledList>
  )
}
