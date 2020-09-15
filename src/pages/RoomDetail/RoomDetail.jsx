import React, { useState, useEffect } from 'react'
import { Container } from 'components/Container/Container';
import { SecondaryPageHeader } from 'components/Headers/SecondaryPageHeader';
import { ActionButton } from 'components/Buttons/ActionButton';
import AddIcon from 'images/icons/Plus';
import { InfoSquares } from 'components/SectionContainers/InfoSquares';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import styled from 'styled-components';
import { Devices } from './Devices/Devices';
import { RecentUsage } from 'pages/Common/RecentUsage/RecentUsage';
import { HighestUsage } from 'pages/Common/HighestUsage/HighestUsage';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, queryCache } from 'react-query';
import { fetchRoomDetail } from 'requests/rooms/fetchRoomDetail';
import { fetchRoomCurrentStats } from 'requests/rooms/fetchRoomCurrentStats';
import { fetchRecentUsage } from 'requests/usage/fetchRecentUsage';
import { fetchDevicesUsageList } from 'requests/usage/fetchDevicesUsageList';
import { DateTime, Duration } from 'luxon';


const StyledContainer = styled(Container)`
  .secondaryPageHeader {
    margin-bottom: 24px;
  }
`;


export const RoomDetail = () => {
  const { roomId } = useParams();
  const [devicesUsageList, setDevicesUsageList] = useState(queryCache.getQueryData(['devicesUsageList', 'room', roomId]));
  const [roomRecentUsage, setRoomRecentUsage] = useState(queryCache.getQueryData(['roomRecentUsage', roomId]));

  const [getRecentUsage] = useMutation(fetchRecentUsage, {
    onSuccess: (data) => {
      queryCache.setQueryData(['roomRecentUsage', roomId], data);
      setRoomRecentUsage(data);
    }
  });

  const [getDevicesUsageList] = useMutation(fetchDevicesUsageList, {
    onSuccess: (data) => {
      queryCache.setQueryData(['devicesUsageList', 'room', roomId], data);
      setDevicesUsageList(data);
    }
  })

  const { data: room } = useQuery(['rooms', roomId], fetchRoomDetail);
  const { data: roomCurrentStats } = useQuery(['roomCurrentStats', roomId], fetchRoomCurrentStats);

  useEffect(() => {
    getRecentUsage({
      roomId,
      durations: ['P1D', 'P7D', 'P30D', 'P60D']
    })
    getDevicesUsageList({
      roomId,
      startTs: DateTime.utc().minus(Duration.fromObject({ days: 7 })).toISO(),
      endTs: DateTime.utc().toISO(),
    })
  }, []);

  const AddDeviceButton = (
    <ActionButton link={`/rooms/${roomId}/add`}>
      <AddIcon width='20px' height='20px' />
    </ActionButton>
  )

  return (
    <>
      {room &&
        <StyledContainer>
          <SecondaryPageHeader
            className='secondaryPageHeader'
            title={room.name}
            subtitle={room.room_group_name}
            actionBtn={AddDeviceButton}
            hamMenu
          />

          {roomCurrentStats &&
            <InfoSquares>
              <InfoSquareCard className='infoSquareCard' level={2} value={roomCurrentStats.num_devices_on} unit={`/${roomCurrentStats.num_devices_total}`} text='Devies Online' />
              <InfoSquareCard className='infoSquareCard' level={2} value={roomCurrentStats.current_power_usage} unit='U' text='Power Usage' highlight />
            </InfoSquares>
          }

          {room && room.devices.length > 0
            ? <Devices devices={room.devices} />
            : <Devices description='No devices are available in this room. Add a device using the plus icon in the top right corner.' devices={room.devices} />
          }

          {roomRecentUsage?.length > 0 &&
            <RecentUsage recentUsage={roomRecentUsage} />
          }
          {devicesUsageList?.length > 0 &&
            <HighestUsage title='Highest Usage' description='Highest Usage List of devices in this room during the last 7 days' usageData={devicesUsageList} />
          }
        </StyledContainer>
      }
    </>
  )
}
