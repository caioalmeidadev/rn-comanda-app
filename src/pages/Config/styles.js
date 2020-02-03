import styled from 'styled-components/native';
import Button from './../../components/Button';
import Input from './../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-content: center;
  justify-content: center;
  margin: 30px;
`;

export const InputConfig = styled(Input)`
  margin: 10px 0;
`;

export const SubmitButton = styled(Button)`
  margin: 10px 0;
  background: #7159c1;
`;

export const SyncButton = styled(Button)`
  margin: 10px 0;
  background: #48d1cc;
`;

export const LoginPage = styled(Button)`
  background: #000;
`;
