import React from 'react'
import styled from 'styled-components'
import { tText_0_b, tLabel_s1 } from 'style/typography';

const StyledTableRow = styled.tr`
  td {
    min-width: 0;
    overflow: hidden;
  }

  .item {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden
    }

    .subtitle {
      ${tLabel_s1};
      color: ${({ theme }) => theme.cPrimary_600};
      margin-top: 6px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .line {
    --mul: .7;
    display: inline-block;
    height: 2px;
    background-color: ${({ theme }) => theme.cAccent3};
    width: ${({ percentage }) => `calc(${percentage}% * var(--mul))`};
    margin-right: 5px;
    vertical-align: middle;
  }

  .percentage {
    color: ${({ theme }) => theme.cAccent3};
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

export const HighestUsageRow = ({
  title,
  subtitle,
  percentage,
  value,
  unit,
  className
}) => {
  return (
    <StyledTableRow className={className} percentage={percentage}>
      <td className='item'>
        <div className='title'>{title}</div>
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </td>
      <td className='percentage'><span className='line'></span>{percentage}%</td>
      <td className='value'>{value} <span className='unit'>{unit}</span></td>
    </StyledTableRow>
  )
}

