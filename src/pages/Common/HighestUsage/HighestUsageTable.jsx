import React from 'react'
import styled from 'styled-components'
import { HighestUsageRow } from 'components/TableRows/HighestUsageRow';



const StyledTable = styled.table`
  display: grid;
  grid-template-columns: 1fr 1fr 60px;
  max-width: 400px;
  grid-row-gap: 16px;
  min-width: 0;

  thead, tbody, tr {
    display: contents;
  }

  th {
    display: none;
  }

`;

export const HighestUsageTable = ({ usageData }) => {
  const totalUsage = usageData?.reduce((total, item) => (total + item.usage), 0);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Room Name</th>
          <th>Usage Percentage</th>
          <th>Usage Value</th>
        </tr>
      </thead>
      <tbody>
        {usageData && usageData.map(item => {
          return (<HighestUsageRow
            key={item.device_id || item.room_id || item.group_id}
            title={item.device_name || item.room_name || item.group_name}
            subtitle={item.device_name && `${item.room_name} • ${item.room_group_name}`}
            percentage={(item.usage / totalUsage * 100).toFixed(0)}
            value={(item.usage / 1000).toFixed(2)}
            unit='U'
            className='highestUsageDeviceRow'
          />);
        })}
      </tbody>
    </StyledTable>
  )
}

