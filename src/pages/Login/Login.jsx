import React, { useState } from 'react'
import { Container } from 'components/Container/Container';
import styled from 'styled-components';
import { tHeading1_0 } from 'style/typography';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { useHistory } from 'react-router-dom';

const Heading = styled.h1`
  ${tHeading1_0};
  text-align: center;
  margin-top: 128px;
  margin-bottom: 50px;
`;

const LoginContainer = styled.div`

`;

export const Login = ({ authenticate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <Container>
      <LoginContainer>
        <Heading>ControlR</Heading>
        <Input
          type="email"
          value={email}
          id='email'
          label='Email'
          onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          value={password}
          id='password'
          label='Password'
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: '18px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '28px' }}>
          <Button lg onClick={authenticate}>Sign Up</Button>
          <Button lg solid onClick={() => history.push('/')}>Sign In</Button>
        </div>
      </LoginContainer>
    </Container>
  )
}
