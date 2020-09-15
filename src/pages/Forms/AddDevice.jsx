import React from 'react'
import { Container } from 'components/Container/Container'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import { FormHeader } from 'components/Headers/FormHeader';
import { useParams, useHistory } from 'react-router-dom';
import { queryCache, useMutation } from 'react-query';
import { Button } from 'components/Buttons/Button';
import PlusIcon from 'images/icons/Plus';
import { FormContainer } from 'components/SectionContainers/FormContainer';
import { createDevice } from 'requests/devices/createDevice';

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

export const AddDevice = () => {
  let { roomId } = useParams();
  const { register, handleSubmit } = useForm();
  const roomData = queryCache.getQueryData(['rooms', roomId]);
  const [mutateCreateDevice] = useMutation(createDevice);
  const history = useHistory();

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      power: parseInt(formData.power),
      room: roomId
    }
    mutateCreateDevice({ data });
    history.goBack();
  }

  return (
    <StyledContainer>
      <FormHeader subject='Add a Device in' title={roomData && roomData.name} />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Device Name'
          type='text'
          name='name'
          required={true}
          register={register}
        />
        <Input
          label='Unique ID'
          type='text'
          name='unique_id'
          required={true}
          register={register}
        />
        <Input
          label='Power (W)'
          type='number'
          name='power'
          required={true}
          register={register}
        />
        <ButtonGroup>
          <Button lg onClick={() => history.goBack()}>Cancel</Button>
          <Button type='submit' solid lg iconLeft icon={PlusIcon}>Add Device</Button>
        </ButtonGroup>
      </FormContainer>
    </StyledContainer>
  )
}
