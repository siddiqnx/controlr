import React, { useState } from 'react'
import { SectionHeader } from 'components/Headers/SectionHeader'
import { TimersList } from './TimersList'
import PlusIcon from 'images/icons/Plus';
import { ActionButton } from 'components/Buttons/ActionButton';
import { Popover } from 'antd';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Buttons/Button';
import { TimePicker } from 'antd';
import { FormContainer } from 'components/SectionContainers/FormContainer';
import { useEffect } from 'react';
import SwitchBtn from 'react-switch';
import { Input } from 'components/Input/Input';
import { DateTime, Interval } from 'luxon';
import { useMutation, queryCache } from 'react-query';
import { createTimer } from 'requests/timers/createTimer';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const HorizontalFormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  .input {
    width: 80px;
  }

  .input + .input {
    margin-left: 8px;
  }
`;

export const Timers = () => {
  const { deviceId } = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [timerState, setTimerState] = useState(true);
  const [mutateTimer] = useMutation(createTimer, {
    onSuccess: () => queryCache.invalidateQueries(['timers', { deviceId }])
  });

  const actionBtn = (
    <ActionButton button onClick={() => setModalVisible(true)}>
      <PlusIcon width='18px' height='18px' />
    </ActionButton>
  );

  useEffect(() => {
    register('state');
    setValue('state', true);
  }, [register]);

  const onTimerSubmit = (data) => {
    if (data.hours === '' && data.minutes === '')
      return;

    const triggerTime = DateTime.utc().plus({
      hours: data.hours !== '' ? data.hours : 0,
      minutes: data.minutes !== '' ? data.minutes : 0
    }).toString();


    mutateTimer({
      device: deviceId,
      trigger_time: triggerTime,
      state_change: data.state
    });
  };

  const onStateChange = (value) => {
    setTimerState(value);
    setValue('state', value);
  };

  const TimerForm = (
    <FormContainer onSubmit={handleSubmit(onTimerSubmit)}>
      <HorizontalFormGroup>
        <Input className='input' name='hours' label='Hours' type='number' register={register} />
        <Input className='input' name='minutes' label='Minutes' type='number' register={register} />
      </HorizontalFormGroup>
      <HorizontalFormGroup>
        <p>Trigger State</p>
        <SwitchBtn
          width={28}
          height={14}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={10}
          offColor='#818DBA'
          onColor='#486EF6'
          checked={timerState}
          offHandleColor='#2B3045'
          onHandleColor='#2B3045'
          onChange={() => onStateChange(!timerState)}
        />
      </HorizontalFormGroup>
      <Button md solid type='submit' >Add Timer </Button>
    </FormContainer>
  )

  return (
    <section>
      <SectionHeader text='Timers' actionBtn={actionBtn} />
      <TimersList />

      <Popover
        placement="topLeft"
        title='Add Timer'
        visible={modalVisible}
        content={TimerForm}
        onVisibleChange={setModalVisible}
      >
      </Popover>
    </section>
  )
}
