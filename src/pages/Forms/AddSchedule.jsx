import React, { useEffect } from 'react'
import { Container } from 'components/Container/Container'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { FormHeader } from 'components/Headers/FormHeader';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery, queryCache } from 'react-query';
import { Button } from 'components/Buttons/Button';
import PlusIcon from 'images/icons/Plus';
import { FormContainer } from 'components/SectionContainers/FormContainer';
import { createRoom } from 'requests/rooms/createRoom';
import { fetchBuildingDetail } from 'requests/buildings/fetchBuildingDetail';
import { Select } from 'antd';
import { Radio } from 'antd';
import { fetchRoomGroupList } from 'requests/buildings/fetchRoomGroupList';
import daysOfWeek from 'constants/daysOfWeek';
import { TimePicker } from 'antd';
import { createSchedule } from 'requests/schedules/createSchedule';
import { DateTime } from 'luxon';

const { Option } = Select;

const StyledContainer = styled(Container)`
  padding: 100px 48px 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.cPrimary_950};
  form {
    margin-top: 42px;
  }
`;

const ButtonGroup = styled.footer`
  position: fixed;
  left: 0;
  bottom: 150px;
  width: 100%;
  background: ${({ theme }) => theme.cPrimary_950};
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
`;

export const AddSchedule = () => {
  const history = useHistory();
  const { deviceId } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [mutateCreateSchedule] = useMutation(createSchedule, {
    onSuccess: () => queryCache.invalidateQueries(['schedules', { deviceId }])
  });

  const deviceName = queryCache.getQueryData(['devices', deviceId])?.name;

  const onSubmit = (data) => {
    mutateCreateSchedule({
      ...data,
      device: deviceId,
      trigger_time: data.time.toISOString()
    });
    history.goBack();
  }

  useEffect(() => {
    register('state_change');
    register('days_of_week');
    register('time');
    setValue('state_change', true);
  }, [register]);

  const onTriggerStateChange = (e) => setValue('state_change', e.target.value);

  const onDaysOfWeekChange = (value) => setValue('days_of_week', value);
  const onTimeChange = (value) => setValue('time', value);


  return (
    <StyledContainer>

      <FormHeader subject='Add a Schedule for' title={`${deviceName && deviceName}`} />

      <FormContainer onSubmit={handleSubmit(onSubmit)}>

        <Radio.Group
          size='large'
          defaultValue={true}
          buttonStyle='solid'
          onChange={onTriggerStateChange}
        >
          <Radio.Button value={true}>Device On</Radio.Button>
          <Radio.Button value={false}>Device Off</Radio.Button>
        </Radio.Group>

        <Select
          size='large'
          mode='multiple'
          style={{ width: "100%" }}
          placeholder="Select days of week"
          onChange={onDaysOfWeekChange}
        >
          {Object.entries(daysOfWeek).map(([value, day]) => (
            <Option key={value} value={value}>{day}</Option>
          ))}
        </Select>

        <TimePicker onChange={onTimeChange} format='HH:mm' />

        <ButtonGroup>
          <Button lg onClick={() => history.goBack()}>Cancel</Button>
          <Button type='submit' solid lg iconLeft icon={PlusIcon}>Add Schedule</Button>
        </ButtonGroup>

      </FormContainer>
    </StyledContainer>
  )
}

