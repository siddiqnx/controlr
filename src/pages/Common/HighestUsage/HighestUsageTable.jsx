import React from 'react'
import styled from 'styled-components'
import { HighestUsageDeviceRow } from 'components/TableRows/HighestUsageRow';



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

export const HighestUsageTable = ({ usage }) => {
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
        {usage.map((device, key) => (
          <HighestUsageDeviceRow
            key={key}
            title={device.title}
            subtitle={device.subtitle && device.subtitle}
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

