import React from 'react'
import styled from 'styled-components'
import { GroupCard } from 'components/Cards/GroupCard';

const groups = [
  {
    groupName: 'Online Devices',
    numDevices: 32
  },
  {
    groupName: 'Least used',
    numDevices: 5
  },
];

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  grid-gap: 16px;
`;

export const GroupList = () => {
  return (
    <StyledList>
      {groups.map((group) => (
        <li>
          <GroupCard
            className='groupCard'
            title={group.groupName}
            numDevices={group.numDevices}
            link='/usage'
          />
        </li>
      ))}
    </StyledList>
  )
}
