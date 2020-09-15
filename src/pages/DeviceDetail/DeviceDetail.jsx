import React, { useState, useEffect } from 'react'
import { Container } from 'components/Container/Container'
import { SecondaryPageHeader } from 'components/Headers/SecondaryPageHeader'
import StarIcon from 'images/icons/Star';
import { ActionButton } from 'components/Buttons/ActionButton';
import { LargeSwitchButton } from 'components/Buttons/LargeSwitchButton';
import Generic from 'images/deviceIcons/Generic';
import styled, { css } from 'styled-components';
import { RecentUsage } from 'pages/Common/RecentUsage/RecentUsage';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, queryCache } from 'react-query';
import { fetchDeviceDetail } from 'requests/devices/fetchDeviceDetail';
import { setFavorite } from 'requests/devices/setFavorite';
import { removeFavorite } from 'requests/devices/removeFavorite';
import { updateDeviceState } from 'requests/devices/updateDeviceState';
import { fetchRecentUsage } from 'requests/usage/fetchRecentUsage';
import { Timers } from './Timers/Timers';
import { Schedules } from './Schedules/Schedules';

const StyledContainer = styled(Container)`
  .largeSwitchButton {
    margin-top: 48px;
  }
`;

const StyledActionButton = styled(ActionButton)`
  ${({ isFavorite }) => isFavorite && css`
    svg {
      color: ${ ({ theme }) => theme.cAccent1_300};
    }
  `}
`;

export const DeviceDetail = () => {
  const { deviceId } = useParams();

  const [deviceRecentUsage, setDeviceRecentUsage] = useState(queryCache.getQueryData(['deviceRecentUsage', deviceId]));

  const { data: device } = useQuery(['device', deviceId], fetchDeviceDetail);

  const [mutateSetFavorite] = useMutation(setFavorite, {
    onSuccess: () => queryCache.invalidateQueries(['device', deviceId])
  });

  const [mutateRemoveFavorite] = useMutation(removeFavorite, {
    onSuccess: () => queryCache.invalidateQueries(['device', deviceId])
  });

  const [mutateUpdateDeviceState] = useMutation(updateDeviceState, {
    onSuccess: () => queryCache.invalidateQueries(['device', deviceId])
  })

  const [getRecentUsage] = useMutation(fetchRecentUsage, {
    onSuccess: (data) => {
      queryCache.setQueryData(['deviceRecentUsage', deviceId], data);
      setDeviceRecentUsage(data)
    }
  });

  const onFavoriteChange = () => {
    if (device && !device.is_favorite) {
      mutateSetFavorite({ deviceId });
    } else if (device && device.is_favorite) {
      mutateRemoveFavorite({ deviceId });
    }
  }

  useEffect(() => {
    getRecentUsage({
      deviceIds: [deviceId],
      durations: ['P1D', 'P7D', 'P30D', 'P60D']
    })
  }, [])

  const actionBtn = (
    <StyledActionButton
      isFavorite={device ? device.is_favorite : false}
      button
      onClick={onFavoriteChange}
    >
      <StarIcon width='20px' height='20px' />
    </StyledActionButton>
  )

  return (
    <StyledContainer>
      {device &&
        <>
          <SecondaryPageHeader
            title={device.name}
            subtitle={`${device.room_name} • ${device.power}W`}
            hamMenu
            actionBtn={actionBtn}
          />
          <LargeSwitchButton
            className='largeSwitchButton'
            icon={Generic}
            state={device.state}
            onClick={() => mutateUpdateDeviceState({ deviceId, state_change: !device.state })}
          />
        </>
      }
      {deviceRecentUsage &&
        <RecentUsage recentUsage={deviceRecentUsage} />
      }
      <Timers />
      <Schedules />
    </StyledContainer>
  )
}
