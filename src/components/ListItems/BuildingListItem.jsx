import React from 'react'
import styled from 'styled-components'
import { tText_0_n, tText_0_b } from 'style/typography';

const StyledListItem = styled.li`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  
  .buildingImage {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    background: ${({ theme }) => theme.cPrimary_800};
  }

  .name {
    ${tText_0_b};
    margin-left: 16px;
  }
  .location {
    display: block;
    ${tText_0_n};
    color: ${({ theme }) => theme.cPrimary_600};
  }
`;

export const BuildingListItem = ({ name, location, imageLink }) => {
  return (
    <StyledListItem >
      <span className='buildingImage'></span>
      <div className='name'>
        {name}
        <span className='location'>{location}</span>
      </div>
    </StyledListItem>
  )
}
