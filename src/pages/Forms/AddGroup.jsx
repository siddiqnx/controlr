import React, { useEffect } from 'react'
import { Container } from 'components/Container/Container'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import { FormHeader } from 'components/Headers/FormHeader';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { Button } from 'components/Buttons/Button';
import PlusIcon from 'images/icons/Plus';
import { FormContainer } from 'components/SectionContainers/FormContainer';
import { createRoom } from 'requests/rooms/createRoom';
import { fetchBuildingDetail } from 'requests/buildings/fetchBuildingDetail';
import { Select } from 'antd';
import { fetchDeviceList } from 'requests/devices/fetchDeviceList';
import { createGroup } from 'requests/groups/createGroup';

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

export const AddGroup = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [mutateCreateGroup] = useMutation(createGroup);
  const history = useHistory();
  const buildingId = localStorage.getItem('currentBuilding');
  const { data: buildingInfo } = useQuery(['buildings', buildingId], fetchBuildingDetail);
  const { data: devices } = useQuery('devices', fetchDeviceList);

  const onSubmit = (data) => {
    console.log(data);
    mutateCreateGroup(data);
    history.goBack();
  }
  const handleChange = (value) => {
    setValue('devices', value);
  }

  useEffect(() => {
    register('devices');
  }, [register]);

  return (
    <StyledContainer>
      {buildingInfo &&
        <FormHeader subject='Add a Group in' title={`${buildingInfo.name}`} />
      }
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Group Name'
          type='text'
          name='name'
          required={true}
          register={register}
        />
        <Select
          style={{ width: "100%", borderRadius: '15px' }}
          placeholder="Select Devices"
          onChange={handleChange}
          size='large'
          mode='multiple'
        >
          {devices?.map((device) => (
            <Option key={device.id} value={device.id}>{device.name}</Option>
          ))}
        </Select>
        <ButtonGroup>
          <Button lg onClick={() => history.goBack()}>Cancel</Button>
          <Button type='submit' solid lg iconLeft icon={PlusIcon}>Add Room</Button>
        </ButtonGroup>
      </FormContainer>
    </StyledContainer>
  )
}


