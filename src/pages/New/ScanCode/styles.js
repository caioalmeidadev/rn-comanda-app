import styled from 'styled-components/native';
import Button from './../../../components/Button';
import Input from './../../../components/Input';
import {RNCamera} from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
`;

export const Scanner = styled(RNCamera)`
  flex: 1;
`;
export const SnapButton = styled.TouchableOpacity`
  flex: 0;
  background-color: #fff;
  border-radius: 5;
  padding: 15px;

  align-self: center;
  margin: 20px;
`;

export const SnapButtonText = styled.Text`
  font-size: 14px;
`;

export const InputHeader = styled(Input)`
  margin: 5px 15px;
`;

export const SelectButton = styled(Button)``;

export const ButtonText = styled.Text``;
