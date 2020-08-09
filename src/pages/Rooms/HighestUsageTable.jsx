import React from 'react'
import styled from 'styled-components'
import { HighestUsageRoomRow } from 'components/TableRows/HighestUsageRoomRow';

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

export const HighestUsageTable = ({ rooms }) => {
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
        {rooms.map((room, key) => (
          <HighestUsageRoomRow
            key={key}
            roomName={room.roomName}
            percentage={room.percentage}
            value={room.value}
            unit={room.unit}
            className='highestUsageRoomRow'
          />
        ))}
      </tbody>
    </StyledTable>
  )
}
