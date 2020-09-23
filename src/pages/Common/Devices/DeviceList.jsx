import React from 'react'
import Generic from 'images/deviceIcons/Generic';
import styled from 'styled-components';
import { DeviceCard } from 'components/Cards/DeviceCard';
import { useRouteMatch } from 'react-router-dom';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  grid-gap: 8px;
`;

export const DeviceList = ({ devices }) => {
  const { url } = useRouteMatch();

  return (
    <StyledList>
      {devices.map((device) => (
        <li key={device.id}>
          <DeviceCard
            deviceId={device.id}
            link={`${url}/devices/${device.id}`}
            icon={Generic}
            {...device}
          />
        </li>
      ))}
    </StyledList>
  )
}
