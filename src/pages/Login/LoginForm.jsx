import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Buttons/Button';
import RightChevron from 'images/icons/ChevronRight';
import styled from 'styled-components';
import { tHeading1_0 } from 'style/typography';
import { publicFetch } from 'utils/fetch';
import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';

const Heading = styled.h1`
  ${tHeading1_0};
  text-align: center;
  margin-top: 128px;
  margin-bottom: 50px;
`;

const FormFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;
`;

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    non_field_errors: null
  });
  const { setAuthToken } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await publicFetch.post('auth/login/', data);
      setAuthToken(response.data.key);
    } catch (err) {
      const errors = err.response.data
      setErrors(errors)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading>ControlR</Heading>
      <Input
        type="email"
        register={register}
        name='email'
        label='Email'
        required={true}
      />
      {errors.email}
      <Input
        type="password"
        register={register}
        required={true}
        name='password'
        label='Password'
        style={{ marginTop: '18px' }}
      />
      {errors.password}
      {errors.non_field_errors}
      <FormFooter>
        <Button type='submit' iconRight icon={RightChevron} lg solid>
          Sign In
        </Button>
      </FormFooter>
    </form>
  )
}
