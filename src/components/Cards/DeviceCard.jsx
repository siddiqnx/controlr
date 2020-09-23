import React from 'react'
import styled from 'styled-components'
import { tText_l1_n } from 'style/typography';
import SwitchBtn from 'react-switch';
import { Link, useParams } from 'react-router-dom';
import { useMutation, queryCache } from 'react-query';
import { updateDeviceState } from 'requests/devices/updateDeviceState';

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.brRadius_1};
  
  > a {
    display: flex;
    ${tText_l1_n};
    padding: 18px 24px;
    align-items: center;
  }

  background: ${({ theme, state }) => state ? theme.cPrimary_950 : theme.cPrimary_900};

  .icon {
    vertical-align: middle;
  }

  .switch {
    margin-left: auto
  }

  .deviceName {
    margin-left: 16px;
  }

`;

export const DeviceCard = ({
  name,
  state,
  icon: Icon,
  width,
  link,
  className,
  deviceId
}) => {
  const { roomId } = useParams();
  const { groupId } = useParams();
  const [mutate] = useMutation(updateDeviceState, {
    onSuccess: () => {
      queryCache.invalidateQueries(['rooms', roomId]);
      queryCache.invalidateQueries(['groups', groupId])
      queryCache.invalidateQueries(['roomCurrentStats', roomId])
    }
  });

  const handleChange = async () => {
    await mutate({ deviceId, state_change: !state });
  };

  return (
    <StyledCard className={className} width={width} state={state}>
      <Link to={link}>
        <span><Icon width='28px' height='28px' /></span>
        <div className='deviceName'>{name}</div>
        <span className='switch'>
          <SwitchBtn
            width={28}
            height={14}
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={10}
            offColor='#818DBA'
            onColor='#486EF6'
            checked={state}
            offHandleColor='#2B3045'
            onHandleColor='#2B3045'
            onChange={handleChange}
          />
        </span>
      </Link>
    </StyledCard>
  )
}
