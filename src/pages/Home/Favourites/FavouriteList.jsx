import React from 'react'
import styled from 'styled-components';
import Generic from 'images/deviceIcons/Generic';
import { FavouriteCard } from 'components/Cards/FavouriteCard';
import { useQuery, useMutation, queryCache } from 'react-query';
import { fetchFavorites } from 'requests/devices/fetchFavorites';
import { updateDeviceState } from 'requests/devices/updateDeviceState';

const StyledList = styled.ul`
  display: flex;
  margin: 0 -24px;
  flex-wrap: nowrap;
  overflow-x: auto;

`;

export const FavouriteList = ({ className }) => {
  const { data: favorites } = useQuery('favorites', fetchFavorites);
  const [mutateDeviceState] = useMutation(updateDeviceState, {
    onSuccess: () => {
      queryCache.invalidateQueries('favorites');
      queryCache.invalidateQueries('buildingCurrentStats');
    }
  });

  return (
    <StyledList className={className}>
      {favorites && favorites.map((device) => (
        <li key={device.device_id}>
          <FavouriteCard
            className='favouriteCard'
            title={device.name}
            state={device.state}
            subtitle={device.room_name}
            width='150px'
            icon={Generic}
            onClick={() => mutateDeviceState({ deviceId: device.device_id, state_change: !device.state })}
          />
        </li>
      ))}
    </StyledList>
  )
}
