import React from 'react'
import styled from 'styled-components'
import { HighestUsageDeviceRow } from 'components/TableRows/HighestUsageDeviceRow';

const highestUsage = [
  {
    deviceName: 'Air Conditioner',
    roomName: 'Living Room',
    percentage: 52.5,
    value: 10.23,
    unit: 'U'
  },
  {
    deviceName: 'Refrigirator',
    roomName: 'Bedroom',
    percentage: 30.5,
    value: 10.23,
    unit: 'U'
  },
  {
    deviceName: 'TV',
    roomName: 'Kitchen',
    percentage: 10.5,
    value: 10.23,
    unit: 'U'
  }
];

const StyledTable = styled.table`
  display: grid;
  grid-template-columns: 1fr 1fr 60px;
  max-width: 400px;
  grid-row-gap: 16px;

  thead, tbody, tr {
    display: contents;
  }

  th {
    display: none;
  }

`;

export const HighestUsageOverallTable = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Room Name</th>
          <th>Percentage Usage</th>
          <th>Usage Value</th>
        </tr>
      </thead>
      <tbody>
        {highestUsage.map((device, key) => (
          <HighestUsageDeviceRow
            key={key}
            deviceName={device.deviceName}
            roomName={device.roomName}
            percentage={device.percentage}
            value={device.value}
            unit={device.unit}
            className='highestUsageDeviceRow'
          />
        ))}
      </tbody>
    </StyledTable>
  )
}

