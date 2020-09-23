import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import { RecentUsage } from 'pages/Common/RecentUsage/RecentUsage';
import { UsageToday } from './UsageToday/UsageToday';
import { HighestUsage } from 'pages/Common/HighestUsage/HighestUsage';
import { useQuery } from 'react-query';
import { fetchBuildingCurrentStats } from 'requests/buildings/fetchBuildingCurrentStats';
import { fetchDevicesUsageList } from 'requests/usage/fetchDevicesUsageList';
import { fetchRecentUsage } from 'requests/usage/fetchRecentUsage';
import { useMutation, queryCache } from 'react-query';
import { DateTime, Duration } from 'luxon';

const StyledContainer = styled(Container)`
`;

const InfoSquares = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;

  .infoSquareCard {
    margin-top: 24px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const Usage = () => {
  const [devicesUsageList, setDevicesUsageList] = useState(queryCache.getQueryData(['devicesUsageList', 'all']));
  const [buildingRecentUsage, setBuildingRecentUsage] = useState(queryCache.getQueryData('buildingRecentUsage'));
  const { data: buildingCurrentStats } = useQuery('buildingCurrentStats', fetchBuildingCurrentStats);

  const [getRecentUsage] = useMutation(fetchRecentUsage, {
    onSuccess: (data) => {
      queryCache.setQueryData('buildingRecentUsage', data);
      setBuildingRecentUsage(data)
    }
  });

  const [getDevicesUsageList] = useMutation(fetchDevicesUsageList, {
    onSuccess: (data) => {
      queryCache.setQueryData(['devicesUsageList', 'all'], data);
      setDevicesUsageList(data);
    }
  });


  useEffect(() => {
    getDevicesUsageList({
      startTs: DateTime.utc().minus(Duration.fromObject({ days: 7 })).toISO(),
      endTs: DateTime.utc().toISO(),
    });
    getRecentUsage({
      durations: ['P1D', 'P7D', 'P30D', 'P60D']
    });

  }, []);


  return (
    <StyledContainer>
      <MainPageHeader text={'Usage'} hamMenu />

      {buildingCurrentStats && <InfoSquares>
        <InfoSquareCard
          small
          width='120px'
          className='infoSquareCard'
          level={2}
          value={buildingCurrentStats.current_power_usage}
          unit='Wh'
          text='Power Usage'
          highlight
        />
        <InfoSquareCard
          small
          width='120px'
          className='infoSquareCard'
          level={2}
          value={buildingCurrentStats.num_devices_on}
          unit={`/${buildingCurrentStats.num_devices_total}`}
          text='Devices Online'
          outline
        />
        <InfoSquareCard
          small
          width='120px'
          className='infoSquareCard'
          level={2}
          value={buildingCurrentStats.num_rooms_on}
          unit={`/${buildingCurrentStats.num_rooms_total}`}
          text='Rooms Online'
          outline
        />
      </InfoSquares>}

      {buildingRecentUsage &&
        <RecentUsage recentUsage={buildingRecentUsage} />
      }

      <UsageToday />

      <HighestUsage title='Highest Usage' description='Highest energy usage data of devices during the last 7 days' usageData={devicesUsageList} />

    </StyledContainer>
  )
}


