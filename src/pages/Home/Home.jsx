import React from 'react'
import styled from 'styled-components';

import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import { Favourites } from './Favourites/Favourites';
import { Scenes } from './Scenes/Scenes';
import { Groups } from './Groups/Groups';
import { InfoSquares } from 'components/SectionContainers/InfoSquares';
import { fetchBuildingCurrentStats } from 'requests/buildings/fetchBuildingCurrentStats';
import { useQuery } from 'react-query';


const StyledContainer = styled(Container)`
  .mainPageHeader {
    margin-bottom: 24px;
  }

  .sectionHeader {
    margin-top: 34px;
    margin-bottom: 28px;
  }
`;

export const Home = () => {
  const { data: buildingCurrentStats } = useQuery('buildingCurrentStats', fetchBuildingCurrentStats);

  return (
    <StyledContainer>

      <MainPageHeader className='mainPageHeader' text={buildingCurrentStats && buildingCurrentStats.building_name} hamMenu />

      {buildingCurrentStats &&
        <InfoSquares>
          <InfoSquareCard className='infoSquareCard' level={2} value={buildingCurrentStats.num_devices_on} unit={`/${buildingCurrentStats.num_devices_total}`} text='Devies Online' />
          <InfoSquareCard className='infoSquareCard' level={2} value={buildingCurrentStats.current_power_usage} unit='Wh' text='Power Usage' highlight />
        </InfoSquares>
      }

      <Favourites />
      {/* <Scenes /> */}
      <Groups />

    </StyledContainer>
  )
}
