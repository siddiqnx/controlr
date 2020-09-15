import React, { useContext } from 'react'
import { Container } from 'components/Container/Container';
import { LoginForm } from './LoginForm';
import { Redirect } from 'react-router';
import { AuthContext } from 'contexts/AuthContext';

export const Login = ({ authenticate }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated()) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  )
}
