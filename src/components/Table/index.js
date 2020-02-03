import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TableNo, TotalText} from './styles';

export default function Table({data}) {
  return (
    <Container>
      <Icon name="restaurant" size={25} color="#D3D3D3" />
      <TableNo>{data}</TableNo>
      <TotalText>R$ 0,00</TotalText>
    </Container>
  );
}
