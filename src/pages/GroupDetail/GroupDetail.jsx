import { Container } from 'components/Container/Container'
import { SecondaryPageHeader } from 'components/Headers/SecondaryPageHeader';
import { Devices } from 'pages/Common/Devices/Devices';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchGroupDetail } from 'requests/groups/fetchGroupDetail';
import styled from 'styled-components'

const StyledContainer = styled(Container)``;

export const GroupDetail = () => {
  const { groupId } = useParams();
  const { data: group } = useQuery(['groups', groupId], fetchGroupDetail);

  return (
    <StyledContainer>
      <SecondaryPageHeader
        className='secondaryPageHeader'
        title={group?.name}
        subtitle={'Group'}
        hamMenu
      />
      {group &&
        <Devices devices={group.devices} />
      }

    </StyledContainer>
  )
}
