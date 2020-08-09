import React from 'react'
import styled from 'styled-components'
import { tText_0_b, tLabel_s1 } from 'style/typography';

const StyledTableRow = styled.tr`

  .roomName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .room {
      ${tLabel_s1};
      color: ${({ theme }) => theme.cPrimary_600};
      margin-top: 4px;
    }
  }

  .line {
    --mf: .7;
    display: inline-block;
    height: 2px;
    background-color: ${({ theme }) => theme.cAccent2_0};
    width: ${({ percentage }) => `calc(${percentage}% * var(--mf))`};
    margin-right: 5px;
    vertical-align: bottom;
  }

  .percentage {
    color: ${({ theme }) => theme.cAccent2_0};
    ${tLabel_s1};
    vertical-align: bottom;
  }

  .value {
    ${tText_0_b}
  }

  .unit {
    font-size: .8em;
  }
`;

export const HighestUsageDeviceRow = ({
  deviceName,
  roomName,
  percentage,
  value,
  unit,
  className
}) => {
  return (
    <StyledTableRow className={className} percentage={percentage}>
      <td className='roomName'>
        <div class='device'>{deviceName}</div>
        <div class='room'>{roomName}</div>
      </td>
      <td className='percentage'><span className='line'></span>{percentage}%</td>
      <td className='value'>{value} <span className='unit'>{unit}</span></td>
    </StyledTableRow>
  )
}

