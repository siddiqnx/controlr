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
import { fetchRoomGroupList } from 'requests/buildings/fetchRoomGroupList';

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

export const AddRoom = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [mutateCreateRoom] = useMutation(createRoom);
  const history = useHistory();
  const buildingId = localStorage.getItem('currentBuilding');
  const { data: buildingInfo } = useQuery(['buildings', buildingId], fetchBuildingDetail);
  const { data: roomGroupList } = useQuery('roomGroups', fetchRoomGroupList);

  const onSubmit = (data) => {
    mutateCreateRoom(data);
    history.goBack();
  }

  const handleChange = (value) => {
    setValue('room_group', value);
  }

  useEffect(() => {
    register('room_group');
  }, [register]);

  return (
    <StyledContainer>
      {buildingInfo &&
        <FormHeader subject='Add a Room in' title={`${buildingInfo.name}`} />
      }
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Room Name'
          type='text'
          name='name'
          required={true}
          register={register}
        />
        <Select
          style={{ width: "100%", borderRadius: '15px' }}
          placeholder="Select a Room Group"
          onChange={handleChange}
        >
          {roomGroupList?.map((roomGroup) => (
            <Option key={roomGroup.id} value={roomGroup.id}>{roomGroup.name}</Option>
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

