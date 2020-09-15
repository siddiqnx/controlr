import React from 'react'
import { Container } from 'components/Container/Container'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import { FormHeader } from 'components/Headers/FormHeader';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Button } from 'components/Buttons/Button';
import PlusIcon from 'images/icons/Plus';
import { FormContainer } from 'components/SectionContainers/FormContainer';
import { createBuilding } from 'requests/buildings/createBuilding';

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

export const AddBuilding = () => {
  const { register, handleSubmit } = useForm();
  const [mutateCreateBuilding] = useMutation(createBuilding);
  const history = useHistory();

  const onSubmit = (formData) => {
    const data = {
      ...formData,
    }
    mutateCreateBuilding({ data });
    history.goBack();
  }

  return (
    <StyledContainer>
      <FormHeader subject='Add a Building' />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Building Name'
          type='text'
          name='name'
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

