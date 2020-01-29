import React from 'react';
import { View } from 'react-native';

import { Container, Form, Username,Password,SubmitButton } from './styles';

export default function Login() {
  return (
    <Container>
        <Form>
            <Username />
            <Password />
            <SubmitButton/>
        </Form>
    </Container>
  );
}
