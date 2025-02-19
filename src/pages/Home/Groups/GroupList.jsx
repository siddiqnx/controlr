import React from 'react'
import styled from 'styled-components'
import { GroupCard } from 'components/Cards/GroupCard';
import { useQuery } from 'react-query';
import { fetchGroups } from 'requests/groups/fetchGroupList';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  grid-gap: 16px;
`;

export const GroupList = () => {
  const { data: groups } = useQuery('groups', fetchGroups);
  return (
    <StyledList>
      {groups && groups.map((group, i) => (
        <li key={group.id}>
          <GroupCard
            id={group.id}
            className='groupCard'
            title={group.name}
            numDevices={group.num_devices}
          />
        </li>
      ))}
    </StyledList>
  )
}
